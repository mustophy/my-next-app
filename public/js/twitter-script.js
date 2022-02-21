var jQueryj = jQuery.noConflict();
jQuery(function (jQuery) {
"use strict"
 // twitter ------------------
 if (jQuery("#footer-twiit").length > 0) {
     var config1 = {
         "profile": {
             "screenName": jQuery('#footer-twiit').data('twitts-user')
         },
         "domId": 'footer-twiit',
         "maxTweets": jQuery('#footer-twiit').data('twitts-count'),
         "enableLinks": true,
         "showImages": false
     };
     twitterFetcher.fetch(config1);
 }


});