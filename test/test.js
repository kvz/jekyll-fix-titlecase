var assert       = require('assert');
var _            = require('underscore');
var fixTitlecase = require('../lib/fix-titlecase');


var fixtures = {
  '---\ntitle: "Deploy to a dynamic serverlist with Capistrano"': '---\ntitle: "Deploy to a Dynamic Serverlist With Capistrano"',
  '---\ntitle: "Access MySQL Without Password "': '---\ntitle: "Access MySQL Without Password"',
  '---\ntitle: "Better performance with mod_deflate"': '---\ntitle: "Better Performance With mod_deflate"',
  '---\ntitle: "New `frame` parameter for the /image/resize robot"': '---\ntitle: "New `frame` Parameter for the /image/resize Robot"',
  '---\ntitle: "A word on the focus of php.js"': '---\ntitle: "A Word on the Focus of php.js"',
  '---\ntitle: "Welcome to node.js"': null
};

describe('fixTitlecase', function(){
  describe('newPost', function(){
    it('should give an error for no frontmatter', function(done){
      fixTitlecase.newPost('title: Hey', function (err, actualPost, oldTitle, newTitle) {
        assert.strictEqual('No frontmatter in post', err);
        done();
      });
    });
    _.each(fixtures, function(expectedPost, brokenPost) {
      it('should become ' + (expectedPost+'').replace('---\n', ''), function(done){
        fixTitlecase.newPost(brokenPost, function (err, actualPost, oldTitle, newTitle) {
          assert.strictEqual(null, err);
          assert.strictEqual(actualPost, expectedPost);
          done();
        });
      });
    });
  });
});
