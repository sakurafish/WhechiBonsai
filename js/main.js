// slidedown
	$(document).ready(function () {			
			$("div[class^=\'works-img']").bind("mouseover, mouseenter", function () {
				$(this).find(".works-view").slideDown(100);
			}).bind("mouseout, mouseleave", function () {
				$(this).find(".works-view").slideUp(100);
			});
			


	});	
// Scoll
	$('a[href^=\'#\']').click(function (e) {
		    var star,  target = $($(this).attr('href') + ':first');
		    e.preventDefault();

		    if (target.length == 1) {
		        star = target.offset().top;
		        if (window.matchMedia('(min-width: 1000px)').matches) {
		            $('html,body').animate({ scrollTop: star - 60 }, 1000);
		        } else {
		            $('html,body').animate({ scrollTop: star - 40 }, 1000);
		        }
		    }
		});	


					function ab(){

		 				$(".text-content2").toggle("slow");
		 				
		 				
		 				document.getElementById("about-treepark2").style.display = "none";
					}
