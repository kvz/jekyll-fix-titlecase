var cli          = require('cli').enable('status', 'help', 'version', 'glob', 'timeout');
var fs           = require('fs');
var glob         = require('glob');
var path         = require('path');
var fixTitlecase = require('./lib/fix-titlecase');

// --debug works out of the box. See -h
cli.parse({
  dir : ['dir', 'Directory with markdown posts to convert', 'path']
});

cli.main(function(args, options) {
  var self = this;
  if (!options.dir) {
    self.error('Please specify a dir');
    self.getUsage();
    return;
  }

  var pattern = options.dir + '/*.{markdown,md}';
  self.debug('Scanning ' + pattern);
  glob(pattern, {}, function(err, files) {
    if (err) {
      return self.error(err);
    }

    files.forEach(function (filepath) {
      fs.readFile(filepath, 'utf-8', function(err, content) {
        if (err) {
          return self.error(err);
        }

        fixTitlecase.newPost(content, function (err, newPost, oldTitle, newTitle) {
          if (err) {
            return self.error(err);
          }
          if (newPost === null) {
            self.debug('No need to change ' + filepath + '\n');
            return;
          }

          self.info('Rewriting ' + filepath);
          self.debug(' from ' + oldTitle);
          self.debug('   to ' + newTitle + '\n');
          fs.writeFile(filepath, newPost);
        });
      });
    });
  });
});
