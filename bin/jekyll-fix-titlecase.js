#!/usr/bin/env node
var cli          = require('cli').enable('status', 'help', 'version', 'glob', 'timeout');
var fs           = require('fs');
var glob         = require('glob');
var path         = require('path');
var async        = require('async');
var fixTitlecase = require('../lib/fix-titlecase');

// --debug works out of the box. See -h
cli.parse({
  dir   : ['dir', 'Directory with markdown posts to convert', 'path'],
  title : ['title', 'Just one title as cli arg', 'string'],
  fix   : ['fix', 'Try to fix Markdown blog posts automatically (warning: overwrites existing files)', 'boolean', false],
  body  : ['body', 'Try to fix Markdown titles in the body of the post automatically (warning: overwrites existing files)', 'boolean', false],
});

cli.main(function(args, options) {
  var self = this;
  if (options.title) {
    console.log(fixTitlecase.toTitleCase(options.title).trim());
    return;
  }
  if (!options.dir) {
    self.error('Please specify a dir');
    self.getUsage();
    return;
  }

  var pattern = options.dir + '/*.{markdown,md}';
  self.debug('Scanning ' + pattern);
  var issuesFound = 0;
  var issuesFixed = 0;
  glob(pattern, {}, function(err, files) {
    if (err) {
      throw new Error(err);
    }

    var q = async.queue(function(filePath, cb){
      fs.readFile(filePath, 'utf-8', function(err, content) {
        if (err) {
          throw new Error(err);
        }

        fixTitlecase.newPost(content, options, function (err, newPost, changes) {
          if (err) {
            throw new Error(err);
          }

          if (changes.length === 0) {
            self.debug('No need to change ' + filePath);
            return cb();
          }

          if (options.fix === true) {
            self.info('Rewriting ' + filePath);
          } else {
            self.info(' Issue in ' + filePath);
          }

          for (var i in changes) {
            self.debug('          ' + changes[i].oldTitle);
            self.debug('should be ' + changes[i].newTitle);
          }

          issuesFound++;
          if (options.fix) {
            fs.writeFileSync(filePath, newPost);
            issuesFixed++;
          }

          return cb();
        });
      });
    }, 1);
    q.drain = function() {
      self.info(issuesFound + ' issues found');
      self.info(issuesFixed + ' issues fixed');

      var issuesRemain = issuesFound - issuesFixed;
      if (issuesRemain > 0) {
        process.exit(1);
      }
      process.exit(0);
    };
    q.push(files);

  });
});
