var assert       = require('assert');
var _            = require('underscore');
var fixTitlecase = require('../lib/fix-titlecase');

var titleFixtures = {
  "PHP: tiff2pdf": "PHP: tiff2pdf",
  "follow step-by-step instructions": "Follow Step-by-Step Instructions",
  "this sub-phrase is nice": "This Sub-Phrase Is Nice",
  "catchy title: a subtitle": "Catchy Title: A Subtitle",
  "catchy title: \"a quoted subtitle\"": "Catchy Title: \"A Quoted Subtitle\"",
  "catchy title: “‘a twice quoted subtitle’”": "Catchy Title: “‘A Twice Quoted Subtitle’”",
  "\"a title inside double quotes\"": "\"A Title Inside Double Quotes\"",
  "all words capitalized": "All Words Capitalized",
  "small words are for by and of lowercase": "Small Words Are for by and of Lowercase",
  "a small word starts": "A Small Word Starts",
  "a small word it ends on": "A Small Word It Ends On",
  "do questions work?": "Do Questions Work?",
  "multiple sentences. more than one.": "Multiple Sentences. More Than One.",
  "Ends with small word of": "Ends With Small Word Of",
  "double quoted \"inner\" word": "Double Quoted \"Inner\" Word",
  "single quoted 'inner' word": "Single Quoted 'Inner' Word",
  "fancy double quoted “inner” word": "Fancy Double Quoted “Inner” Word",
  "fancy single quoted ‘inner’ word": "Fancy Single Quoted ‘Inner’ Word",
  "We Added Support for MD5 File Hashes": "We Added Support for MD5 File Hashes",
  "this vs. that": "This vs. That",
  "this vs that": "This vs That",
  "this v. that": "This v. That",
  "this v that": "This v That",
  "address email@example.com titles": "Address email@example.com Titles",
  "pass camelCase through": "Pass camelCase Through",
  "don't break": "Don't Break",
  "catchy title: substance subtitle": "Catchy Title: Substance Subtitle",
  "we keep NASA capitalized": "We Keep NASA Capitalized",
  "tus 1.0, a prerelease": "tus 1.0, a Prerelease",
  "leave Q&A unscathed": "Leave Q&A Unscathed",
  "Scott Moritz and TheStreet.com’s million iPhone la-la land": "Scott Moritz and TheStreet.com’s Million iPhone La-La Land",
  "you have a http://example.com/foo/ title": "You Have a http://example.com/foo/ Title",
  "your hair[cut] looks (nice)": "Your Hair[cut] Looks (Nice)",
  "keep that colo(u)r": "Keep That Colo(u)r",
  "have you read “The Lottery”?": "Have You Read “The Lottery”?",
  "Read markdown_rules.txt to find out how _underscores around words_ will be interpreted": "Read markdown_rules.txt to Find Out How _Underscores Around Words_ Will Be Interpreted",
  "Read markdown_rules.txt to find out how *asterisks around words* will be interpreted": "Read markdown_rules.txt to Find Out How *Asterisks Around Words* Will Be Interpreted",
  "Notes and observations regarding Apple’s announcements from ‘The Beat Goes On’ special event": "Notes and Observations Regarding Apple’s Announcements From ‘The Beat Goes On’ Special Event",
  "Drink this piña colada while you listen to ænima": "Drink This Piña Colada While You Listen to Ænima",
  "capitalize hyphenated words on-demand": "Capitalize Hyphenated Words On-Demand"
};

var postFixtures = {
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
    _.each(postFixtures, function(expectedPost, brokenPost) {
      it('should become ' + (expectedPost+'').replace('---\n', ''), function(done){
        fixTitlecase.newPost(brokenPost, function (err, actualPost, oldTitle, newTitle) {
          assert.strictEqual(null, err);
          assert.strictEqual(actualPost, expectedPost);
          done();
        });
      });
    });
  });
  describe('toTitleCase', function(){
    _.each(titleFixtures, function(expectedTitle, brokenTitle) {
      it('should become ' + (expectedTitle), function(){
        var actualTitle = fixTitlecase.toTitleCase(brokenTitle);
        assert.strictEqual(actualTitle, expectedTitle);
      });
    });
  });
});
