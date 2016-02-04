/**
 * To Title Case 2.1 – http://individed.com/code/to-title-case/
 * Copyright © 2008–2013 David Gouch. Licensed under the MIT License.
 *
 * 2 more exceptions added by kvz
 */
exports.toTitleCase = function(str){
  var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;

  return (str+'').replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title){
    if (index > 0 && index + match.length !== title.length &&
      match.search(smallWords) > -1 && title.charAt(index - 2) !== ":" &&
      (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
      title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match === 'tus') {
      return match;
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }
    // Avoid uppercasing 'mod_deflate', apt-file - kvz
    if (match.match(/.[\_\-\/\d]./)) {
      return match;
    }
    // Avoid uppercasing '`frame`', '/sftp/import' - kvz
    if (match.match(/(^[`\/]|[`]$)/)) {
      return match;
    }
    // Avoid uppercasing: 'tmpfs' or anything that doesn't have a vowel - kvz
    if (!match.match(/[aeiou]/)) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
};

exports.newPost = function (content, opts, cb){
  var self        = this;
  var matches     = [];
  var oldTitle    = '';
  var newTitle    = '';
  var oldLine     = '';
  var heading     = '';
  var newLine     = '';
  var changes     = [];
  var words       = [];
  var frontMatter = content.split('---')[1];

  if (frontMatter) {
    matches     = frontMatter.match(/^(title\s*:\s*)\"?(.+?)\"?[\ \t]*$/im);
    oldTitle    = matches[2];
    newTitle    = self.toTitleCase(oldTitle).trim();
    oldLine     = matches[0];
    newLine     = matches[1] + '"' + newTitle + '"';
    if (oldLine !== newLine) {
      changes.push({oldTitle: oldTitle, newTitle: newTitle});
      content = content.replace(oldLine, newLine);
    }
  }

  if (opts.body === true) {
    matches = content.match(/^\#{1,6} ([a-zA-Z0-9\-\;\!\?\%\&\;\:\.\/\(\)\ ]+)$/mg)
    for (var i in matches) {
      words       = matches[i].split(' ')
      heading     = words.shift();
      oldTitle    = words.join(' ');
      newTitle    = self.toTitleCase(oldTitle).trim();
      oldLine     = heading + ' ' + oldTitle;
      newLine     = heading + ' ' + newTitle;
      if (oldLine !== newLine) {
        changes.push({oldTitle: oldTitle, newTitle: newTitle});
        content = content.replace(oldLine, newLine);
      }
    }
  }


  if (changes.length === 0) {
    content = null;
  }

  return cb(null, content, changes);
};
