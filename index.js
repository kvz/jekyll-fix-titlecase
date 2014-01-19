var cli       = require('cli').enable('status', 'help', 'version', 'glob', 'timeout');
var fs        = require('fs');
var glob      = require('glob');
var path      = require('path');
var __root    = __dirname + '/..';

// --debug works out of the box. See -h
cli.parse({
  dir : ['dir', 'Directory with markdown posts to convert', 'path']
});

/* 
  * To Title Case 2.1 – http://individed.com/code/to-title-case/
  * Copyright © 2008–2013 David Gouch. Licensed under the MIT License.
 */
cli.toTitleCase = function(str){
  var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;

  return (str+'').replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title){
    if (index > 0 && index + match.length !== title.length &&
      match.search(smallWords) > -1 && title.charAt(index - 2) !== ":" &&
      (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
      title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }
    // Avoid upercasing 'safe_mode' or 'str_replace'
    if (match.indexOf('_') > -1) {
      return match;
    }
    // Avoid upercasing: 'tmpfs' or anything that doesn't have a vowel
    if (!match.match(/[aeiou]/)) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
};

cli.main(function(args, options) {
  if (!options.dir) {
    cli.error('Please specify a dir');
    cli.getUsage();
    return;
  }

  glob(options.dir + '/*.markdown', {}, function(err, files) {
    if (err) {
      cli.error(err);
      return;
    }

    files.forEach(function (filepath) {
      fs.readFile(filepath, 'utf-8', function(err, content) {
        if (err) {
          return cb(err);
        }

        var frontMatter = content.split('---')[1];
        var matches     = frontMatter.match(/^(title\s*:\s*)\"?(.+?)\"?\s*$/im);

        var oldLine = matches[0];
        var newLine = matches[1] + '"' + cli.toTitleCase(matches[2]) + '"';

        if (oldLine !== newLine) {
          cli.info('Rewriting ' + filepath);
          cli.debug(' old ' + oldLine);
          cli.debug(' new ' + newLine);
          fs.writeFile(filepath, content.replace(oldLine, newLine));
        }
      });
    });
  });
});
