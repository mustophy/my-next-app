function initKotlisins() {
 //   instagram ------------------	
 var actoket = jQuery('#insta-content').data("instatoken");
 var token = actoket,
     num_photos = 6;
 jQuery.ajax({
     url: '//api.instagram.com/v1/users/self/media/recent',
     dataType: 'jsonp',
     type: 'GET',
     data: {
         access_token: token,
         count: num_photos
     },
     success: function(data) {
         for (x in data.data) {
             jQuery('#insta-content').append('<a target="_blank" href="' + data.data[x].link + '"><img src="' + data.data[x].images.low_resolution.url + '"></a>');
         }
     },
     error: function(data) {
         console.log(data);
     }
 });
 }
