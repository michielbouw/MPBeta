(function ($) {
    $.fn.SocialPost = function (options) {

        var defaults = {
            Count: ' ',
            UID: ' ',
        };

        var options = $.extend(defaults, options);
		var selector = this;

        return this.each(function () {

			var Facebookurl = 'https://graph.facebook.com/' + options.UID + '/posts?access_token=257246281110093|LFauDLtvm6RXTKqC-YjYbBybX-c&limit=' + options.Count;
			$.getJSON(Facebookurl, function (posts) {    
    			//only show posts that are posted by the page admin
    			if(posts.data[0].from.id==options.UID){
    			
				function myDateFormatter(dateObject) {
					
    				var parts, date, time, dt, ms;
    				parts = dateObject.split(/[T ]/); // Split on `T` or a space to get date and time
    				date = parts[0];
    				time = parts[1];
    				dt = new Date();
    				parts = date.split(/[-\/]/);  // Split date on - or /
    				dt.setFullYear(parseInt(parts[0], 10));
    				dt.setMonth(parseInt(parts[1], 10) - 1); // Months start at 0 in JS
    				dt.setDate(parseInt(parts[2], 10));
    				parts = time.split(/:/);    // Split time on :
    				dt.setHours(parseInt(parts[0], 10));
    				dt.setMinutes(parseInt(parts[1], 10));
				    dt.setSeconds(parseInt(parts[2], 10));
    				ms = dt.getTime();
					
					var d = new Date(ms);
        			var day = d.getDate();
        			var month = d.getMonth() + 1;
        			var year = d.getFullYear();
        			if (day < 10) {
        			    day = "0" + day;
        			}
        			if (month < 10) {
        			    month = "0" + month;
        			}
        			var your_date = day + "-" + month + "-" + year;

        			return your_date;
    			}; 
				
				var myTime = myDateFormatter(posts.data[0].created_time);
				
				post = '<strong>' + posts.data[0].message + '</strong> <small style="color:#ffffff;">(' + myTime + ')</small>';
				
				$(selector).html(post);
    			
				}

			});

		});

};

})(jQuery);
