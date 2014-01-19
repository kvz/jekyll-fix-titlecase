# jekyll-fix-titlecase

<!-- badges/ -->
[![Build Status](https://secure.travis-ci.org/kvz/jekyll-fix-titlecase.png?branch=master)](http://travis-ci.org/kvz/jekyll-fix-titlecase "Check this project's build status on TravisCI")
[![NPM version](http://badge.fury.io/js/jekyll-fix-titlecase.png)](https://npmjs.org/package/jekyll-fix-titlecase "View this project on NPM")
[![Dependency Status](https://david-dm.org/kvz/jekyll-fix-titlecase.png?theme=shields.io)](https://david-dm.org/kvz/jekyll-fix-titlecase)
[![Development Dependency Status](https://david-dm.org/kvz/jekyll-fix-titlecase/dev-status.png?theme=shields.io)](https://david-dm.org/kvz/jekyll-fix-titlecase#info=devDependencies)

[![Gittip donate button](http://img.shields.io/gittip/kvz.png)](https://www.gittip.com/kvz/ "Sponsor the development of jekyll-fix-titlecase via Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](https://flattr.com/submit/auto?user_id=kvz&url=https://github.com/kvz/jekyll-fix-titlecase&title=jekyll-fix-titlecase&language=&tags=github&category=software "Sponsor the development of jekyll-fix-titlecase via Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=kevin%40vanzonneveld%2enet&lc=NL&item_name=Open%20source%20donation%20to%20Kevin%20van%20Zonneveld&currency_code=USD&bn=PP-DonationsBF%3abtn_donate_SM%2egif%3aNonHosted "Sponsor the development of jekyll-fix-titlecase via Paypal")
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/19BtCjLCboRgTAXiaEvnvkdoRyjd843Dg2 "Sponsor the development of jekyll-fix-titlecase via BitCoin")
<!-- /badges -->

Iterates over markdown files in a directory and uppercases first letter of words in title, with exception of small words, etc

## Warning

Make sure your posts are safely under Git or other VCS so you can always review and revert any unwanted changes.

## Example

Here's how it looks when I run it against our [Transloadit](http://transloadit.com) blogposts

```bash
$ node index.js --debug --dir transloadit/_posts
```

```
DEBUG: Scanning transloadit/_posts/*.{markdown,md}
INFO: Rewriting transloadit/_posts/2010-04-04-welcome-to-the-blog.md
DEBUG:  from Welcome to the blog
DEBUG:    to Welcome to the Blog

INFO: Rewriting transloadit/_posts/2010-04-07-robot-renaming.md
DEBUG:  from Robot renaming
DEBUG:    to Robot Renaming

INFO: Rewriting transloadit/_posts/2010-04-22-to-launch-or-not.md
DEBUG:  from To launch or not?
DEBUG:    to To Launch or Not?

INFO: Rewriting transloadit/_posts/2010-07-02-we-are-launching-on-july-13.md
DEBUG:  from We are launching on July 13
DEBUG:    to We Are Launching on July 13

DEBUG: No need to change transloadit/_posts/2010-07-18-new-iphone-sdk.md

INFO: Rewriting transloadit/_posts/2010-08-12-haproxy-logging.md
DEBUG:  from HAProxy logging
DEBUG:    to HAProxy Logging

INFO: Rewriting transloadit/_posts/2010-07-13-announcing-our-launch.md
DEBUG:  from Announcing our launch!
DEBUG:    to Announcing Our Launch!

INFO: Rewriting transloadit/_posts/2010-10-15-does-your-image-scaling-software-suck.md
DEBUG:  from Does your image scaling software suck?
DEBUG:    to Does Your Image Scaling Software Suck?

INFO: Rewriting transloadit/_posts/2010-07-22-our-jquery-plugin-is-now-open-source.md
DEBUG:  from Our jQuery plugin is now open source!
DEBUG:    to Our jQuery Plugin Is Now Open Source!

INFO: Rewriting transloadit/_posts/2010-07-19-new-free-plan.md
DEBUG:  from New: Free plan
DEBUG:    to New: Free Plan

DEBUG: No need to change transloadit/_posts/2010-11-11-support-for-rackspace-cloud-files.md

INFO: Rewriting transloadit/_posts/2010-11-19-auto-rotation-for-iphone-videos.md
DEBUG:  from Auto rotation for iphone videos
DEBUG:    to Auto Rotation for Iphone Videos

INFO: Rewriting transloadit/_posts/2010-12-20-realtime-encoding-over-150x-faster.md
DEBUG:  from Realtime encoding - over 150x faster
DEBUG:    to Realtime Encoding - Over 150x Faster

DEBUG: No need to change transloadit/_posts/2010-12-18-php-sdk.md

INFO: Rewriting transloadit/_posts/2010-12-16-demo-time.md
DEBUG:  from Demo time!
DEBUG:    to Demo Time!

INFO: Rewriting transloadit/_posts/2010-11-29-advanced-use-conditions-for-assembly-steps.md
DEBUG:  from Advanced use conditions for assembly steps
DEBUG:    to Advanced Use Conditions for Assembly Steps

INFO: Rewriting transloadit/_posts/2011-01-21-slides-node-js-in-production.md
DEBUG:  from Slides: Node.js in production
DEBUG:    to Slides: Node.js in Production

INFO: Rewriting transloadit/_posts/2011-01-25-major-documentation-overhaul.md
DEBUG:  from Major documentation overhaul
DEBUG:    to Major Documentation Overhaul

INFO: Rewriting transloadit/_posts/2011-01-31-cropping-by-coordinates-has-landed.md
DEBUG:  from Cropping by coordinates has landed
DEBUG:    to Cropping by Coordinates Has Landed

INFO: Rewriting transloadit/_posts/2011-03-01-8-core-machines.md
DEBUG:  from 8 core machines
DEBUG:    to 8 Core Machines

INFO: Rewriting transloadit/_posts/2011-03-01-faster-x264-encoding.md
DEBUG:  from Faster x264 encoding
DEBUG:    to Faster x264 Encoding

INFO: Rewriting transloadit/_posts/2011-03-18-now-on-route-53.md
DEBUG:  from Transloadit now on Route 53
DEBUG:    to Transloadit Now on Route 53

INFO: Rewriting transloadit/_posts/2011-04-01-image-rotation-has-landed.md
DEBUG:  from Image rotation has landed
DEBUG:    to Image Rotation Has Landed

INFO: Rewriting transloadit/_posts/2011-04-27-webm-support.md
DEBUG:  from WebM support has landed
DEBUG:    to WebM Support Has Landed

INFO: Rewriting transloadit/_posts/2011-05-09-support-for-leaving-smaller-images-untouched.md
DEBUG:  from Support for leaving smaller images untouched
DEBUG:    to Support for Leaving Smaller Images Untouched

INFO: Rewriting transloadit/_posts/2011-05-13-detecting-aborted-uploads.md
DEBUG:  from Detecting aborted uploads
DEBUG:    to Detecting Aborted Uploads

DEBUG: No need to change transloadit/_posts/2011-05-16-fixing-amazon-s3.md

INFO: Rewriting transloadit/_posts/2011-05-26-new-frame-parameter-for-the-image-resize-robot.md
DEBUG:  from New `frame` parameter for the /image/resize robot
DEBUG:    to New `frame` Parameter for the /image/resize Robot

INFO: Rewriting transloadit/_posts/2011-05-26-new-s3-store-parameter-url-prefix.md
DEBUG:  from New /s3/store parameter: `url_prefix`
DEBUG:    to New /s3/store Parameter: `url_prefix`

INFO: Rewriting transloadit/_posts/2011-05-30-launching-our-new-design.md
DEBUG:  from Launching our new design
DEBUG:    to Launching Our New Design

DEBUG: No need to change transloadit/_posts/2011-06-06-exploding-growth.md

INFO: Rewriting transloadit/_posts/2011-06-28-improved-persistence-for-temporary-files.md
DEBUG:  from Improved persistence for temporary files
DEBUG:    to Improved Persistence for Temporary Files

DEBUG: No need to change transloadit/_posts/2011-07-04-ruby-rails-sdks.md

DEBUG: No need to change transloadit/_posts/2011-07-05-scheduled-database-maintenance.md

INFO: Rewriting transloadit/_posts/2011-07-26-improved-assembly-detail-page-more.md
DEBUG:  from Improved assembly detail page & more
DEBUG:    to Improved Assembly Detail Page & More

INFO: Rewriting transloadit/_posts/2011-08-21-introducing-sftp-robot-and-new-homepage.md
DEBUG:  from Introducing SFTP robot and new homepage
DEBUG:    to Introducing SFTP Robot and New Homepage

INFO: Rewriting transloadit/_posts/2011-11-21-audio-encoding-is-officially-released-now.md
DEBUG:  from Audio encoding is officially released now
DEBUG:    to Audio Encoding Is Officially Released Now

INFO: Rewriting transloadit/_posts/2011-12-05-changing-transloadit-pricing.md
DEBUG:  from Changing Transloadit pricing
DEBUG:    to Changing Transloadit Pricing

INFO: Rewriting transloadit/_posts/2011-12-06-new-file-filter-robot-released.md
DEBUG:  from New /file/filter robot released
DEBUG:    to New /file/filter Robot Released

INFO: Rewriting transloadit/_posts/2011-12-15-improved-assemblies-index-page.md
DEBUG:  from Improved assemblies index page
DEBUG:    to Improved Assemblies Index Page

INFO: Rewriting transloadit/_posts/2012-01-02-happy-new-year.md
DEBUG:  from Happy New Year
DEBUG:    to Happy New Year

INFO: Rewriting transloadit/_posts/2012-01-03-release-of-inofficial-nodejs-sdk.md
DEBUG:  from Release of unofficial NodeJS SDK
DEBUG:    to Release of Unofficial NodeJS SDK

DEBUG: No need to change transloadit/_posts/2012-01-12-new-pricing.md

INFO: Rewriting transloadit/_posts/2012-01-25-youtube-robot-released.md
DEBUG:  from YouTube Robot released!
DEBUG:    to YouTube Robot Released!

INFO: Rewriting transloadit/_posts/2012-01-31-we-added-the-ability-to-retry-notifications.md
DEBUG:  from We added the ability to retry notifications
DEBUG:    to We Added the Ability to Retry Notifications

INFO: Rewriting transloadit/_posts/2012-02-11-uk-based-rackspace-auth-and-multi-url-http-import.md
DEBUG:  from UK-based Rackspace auth and multi-url http import
DEBUG:    to UK-Based Rackspace Auth and Multi-Url http Import

INFO: Rewriting transloadit/_posts/2012-02-14-new-resize-strategy-fillcrop-and-notification-duration-available.md
DEBUG:  from New resize strategy `fillcrop` and notification duration available
DEBUG:    to New Resize Strategy `fillcrop` and Notification Duration Available

INFO: Rewriting transloadit/_posts/2012-02-23-new-feature-assembly-replays.md
DEBUG:  from New feature: Assembly replays
DEBUG:    to New Feature: Assembly Replays

INFO: Rewriting transloadit/_posts/2012-03-30-two-new-robots-and-more-features.md
DEBUG:  from Two new robots and more features
DEBUG:    to Two New Robots and More Features

INFO: Rewriting transloadit/_posts/2012-03-31-last-nights-elevated-queuetimes.md
DEBUG:  from Last night's elevated queue-times
DEBUG:    to Last Night's Elevated Queue-Times

INFO: Rewriting transloadit/_posts/2012-04-04-more-features-assembly-cost-replay-api-calls-and-custom-params-fields.md
DEBUG:  from More features: assembly cost, replay api calls and custom params fields
DEBUG:    to More Features: Assembly Cost, Replay Api Calls and Custom Params Fields

DEBUG: No need to change transloadit/_posts/2012-04-13-converting-to-twitter-bootstrap.md

DEBUG: No need to change transloadit/_posts/2012-04-18-introducing-rate-limiting.md

INFO: Rewriting transloadit/_posts/2012-04-25-removing-support-for-realtime-encoding.md
DEBUG:  from Removing support for realtime encoding
DEBUG:    to Removing Support for Realtime Encoding

INFO: Rewriting transloadit/_posts/2012-04-27-assembly-variables-available-everywhere-now.md
DEBUG:  from Assembly variables everywhere available
DEBUG:    to Assembly Variables Everywhere Available

INFO: Rewriting transloadit/_posts/2012-05-04-adding-support-for-assembly-list-api.md
DEBUG:  from Adding support for assembly list API
DEBUG:    to Adding Support for Assembly List API

INFO: Rewriting transloadit/_posts/2012-05-29-releasing-our-ftp-robot.md
DEBUG:  from Releasing our FTP robot
DEBUG:    to Releasing Our FTP Robot

INFO: Rewriting transloadit/_posts/2012-07-24-further-stability-and-performance-upgrades.md
DEBUG:  from Further stability and performance upgrades
DEBUG:    to Further Stability and Performance Upgrades

INFO: Rewriting transloadit/_posts/2012-10-06-design-improvements-and-new-site-features.md
DEBUG:  from Design improvements and new site features
DEBUG:    to Design Improvements and New Site Features

INFO: Rewriting transloadit/_posts/2012-10-21-we-are-now-supporting-image-blurring.md
DEBUG:  from We are now supporting image blurring
DEBUG:    to We Are Now Supporting Image Blurring

INFO: Rewriting transloadit/_posts/2012-10-22-we-added-support-for-md5-file-hashes.md
DEBUG:  from We added support for md5 file hashes
DEBUG:    to We Added Support for md5 File Hashes

INFO: Rewriting transloadit/_posts/2012-10-30-new-robot-sftp-import.md
DEBUG:  from New robot: /sftp/import
DEBUG:    to New Robot: /sftp/import

INFO: Rewriting transloadit/_posts/2012-11-01-releasing-a-robot-that-many-people-have-been-looking-forward-to.md
DEBUG:  from Make document thumbnails with Transloadit
DEBUG:    to Make Document Thumbnails With Transloadit

INFO: Rewriting transloadit/_posts/2012-11-12-introducing-the-bonus-and-referral-system.md
DEBUG:  from Introducing the bonus and referral system
DEBUG:    to Introducing the Bonus and Referral System

INFO: Rewriting transloadit/_posts/2012-11-22-adding-support-for-waveform-images.md
DEBUG:  from Adding support for waveform images
DEBUG:    to Adding Support for Waveform Images

INFO: Rewriting transloadit/_posts/2012-12-11-adding-support-for-image-interlacing.md
DEBUG:  from Adding support for image interlacing
DEBUG:    to Adding Support for Image Interlacing

INFO: Rewriting transloadit/_posts/2012-12-12-document-thumbs-now-supports-animation-delays.md
DEBUG:  from Convert PDF files into animated gifs - animation delays now supported
DEBUG:    to Convert PDF Files Into Animated Gifs - Animation Delays Now Supported

INFO: Rewriting transloadit/_posts/2012-12-28-improvements-for-bill-limits.md
DEBUG:  from Bill limit improvements
DEBUG:    to Bill Limit Improvements

INFO: Rewriting transloadit/_posts/2013-01-02-improvements-for-how-assembly-crashes-are-handled.md
DEBUG:  from Improvements for how assembly crashes are handled
DEBUG:    to Improvements for How Assembly Crashes Are Handled

DEBUG: No need to change transloadit/_posts/2013-02-25-transloadit-javascript-plugin-and-jquery-1-9.md

INFO: Rewriting transloadit/_posts/2013-03-23-we-have-added-support-for-svg-images.md
DEBUG:  from We have added support for SVG images
DEBUG:    to We Have Added Support for SVG Images

INFO: Rewriting transloadit/_posts/2013-04-08-announcing-our-new-assembly-notification-system.md
DEBUG:  from Announcing our new assembly notification system
DEBUG:    to Announcing Our New Assembly Notification System

INFO: Rewriting transloadit/_posts/2013-04-17-adding-density-parameter-to-the-document-thumbs-robot.md
DEBUG:  from Adding `density` parameter to the /document/thumbs robot
DEBUG:    to Adding `density` Parameter to the /document/thumbs Robot

DEBUG: No need to change transloadit/_posts/2013-04-24-api-announcements.md

INFO: Rewriting transloadit/_posts/2013-04-29-new-parameters-for-the-html-convert-robot.md
DEBUG:  from New parameters for the /html/convert robot
DEBUG:    to New Parameters for the /html/convert Robot

INFO: Rewriting transloadit/_posts/2013-05-14-changing-our-free-plan.md
DEBUG:  from We are changing how our free plan works
DEBUG:    to We Are Changing How Our Free Plan Works

INFO: Rewriting transloadit/_posts/2013-05-15-adding-support-for-notification-signatures.md
DEBUG:  from Adding support for notification signatures
DEBUG:    to Adding Support for Notification Signatures

INFO: Rewriting transloadit/_posts/2013-05-15-the-simplest-way-to-encode-video-with-php-just-got-simpler.md
DEBUG:  from The simplest way to encode video with PHP, just got simpler
DEBUG:    to The Simplest Way to Encode Video With PHP, Just Got Simpler

INFO: Rewriting transloadit/_posts/2013-06-06-we-are-adding-lossless-image-optimization.md
DEBUG:  from We are adding lossless image optimization
DEBUG:    to We Are Adding Lossless Image Optimization

INFO: Rewriting transloadit/_posts/2013-06-12-we-upgraded-all-the-things.md
DEBUG:  from Upgrade All The Things
DEBUG:    to Upgrade All the Things

INFO: Rewriting transloadit/_posts/2013-07-07-a-few-improvements-from-the-last-week.md
DEBUG:  from A few improvements from the last week
DEBUG:    to A Few Improvements From the Last Week

INFO: Rewriting transloadit/_posts/2013-07-11-to-everyone-using-the-youtube-store-robot.md
DEBUG:  from To everyone using the /youtube/store robot
DEBUG:    to To Everyone Using the /youtube/store Robot

INFO: Rewriting transloadit/_posts/2013-07-17-introducing-the-new-s3-import-robot.md
DEBUG:  from Introducing the new /s3/import robot
DEBUG:    to Introducing the New /s3/import Robot

INFO: Rewriting transloadit/_posts/2013-08-07-combining-image-and-audio-files-into-video.md
DEBUG:  from Combining image and audio files into video
DEBUG:    to Combining Image and Audio Files Into Video

INFO: Rewriting transloadit/_posts/2013-08-08-new-jquery-plugin-version-2-1-0-released.md
DEBUG:  from New jQuery plugin version 2.1.0 released!
DEBUG:    to New jQuery Plugin Version 2.1.0 Released!

INFO: Rewriting transloadit/_posts/2013-09-04-we-can-now-create-zip-and-tar-archives-of-encoding-results.md
DEBUG:  from Create zip & tar archives of encoded files!
DEBUG:    to Create Zip & Tar Archives of Encoded Files!

INFO: Rewriting transloadit/_posts/2013-11-29-api-updates-and-jquery-plugin-version-2-3-0.md
DEBUG:  from API updates and jQuery plugin version 2.3.0
DEBUG:    to API Updates and jQuery Plugin Version 2.3.0

INFO: Rewriting transloadit/_posts/2013-12-16-announcing-our-net-sdk.md
DEBUG:  from Announcing our .NET SDK
DEBUG:    to Announcing Our .NET SDK

DEBUG: No need to change transloadit/_posts/2014-01-14-transloadit-in-2013.md
```

## Prior art

Thanks to

- [David Gouch](https://github.com/gouch/to-title-case), building on javascript work of
- [John Resig](http://ejohn.org/blog/title-capitalization-in-javascript/), building on perl work of
- [John Gruber](http://daringfireball.net/2008/05/title_case)

## License

[MIT Licensed](LICENSE)
