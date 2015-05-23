$(document).ready(function () {
	
	$("div[class^=\'img-bonsai']").bind("mouseover, mouseenter", function () {

		$(this).find(".details").slideDown(100);

	}).bind("mouseout, mouseleave", function () {
		
		$(this).find(".details").slideUp(100);


	});
	$("#tree2").bind("click, click", function () {

		document.getElementById("tree2").innerHTML="關於董文吉";

	}).bind("mouseover, mouseenter", function () {
		
		document.getElementById("tree2").innerHTML="關於名巨樹園";

	});


});

		$('a[href^=\'#\']').click(function (e) {
		    var yPos,  target = $($(this).attr('href') + ':first');
		    e.preventDefault();

		    if (target.length == 1) {
		        yPos = target.offset().top;
		        if (window.matchMedia('(min-width: 1000px)').matches) {
		            $('html,body').animate({ scrollTop: yPos - 60 }, 1000);
		        } else {
		            $('html,body').animate({ scrollTop: yPos - 40 }, 1000);
		        }
		    }
		});

		var $content = $('.wrapper .frontcover')
		  , wHeight  = $(window).height();

		$(window).on('resize', function(){
		  wHeight = $(window).height();
		});

		window.requestAnimFrame = (function()
		{
		  return  window.requestAnimationFrame       ||
		          window.webkitRequestAnimationFrame ||
		          window.mozRequestAnimationFrame    ||
		          function( callback ){
		            window.setTimeout(callback, 1000 / 60);
		          };
		})();

		function Scroller()
		{
		  this.latestKnownScrollY = 0;
		  this.ticking            = false;
		}

		Scroller.prototype = {
		 
		  init: function() {
		    window.addEventListener('scroll', this.onScroll.bind(this), false);
		    
		  },


		  onScroll: function() {
		    this.latestKnownScrollY = window.scrollY;
		    this.requestTick();
		  },

		  
		  requestTick: function() {
		    if( !this.ticking ) {
		      window.requestAnimFrame(this.update.bind(this));
		    }
		    this.ticking = true;
		  },

		  update: function() {
		    var currentScrollY = this.latestKnownScrollY;
		    this.ticking       = false;
		    
		    
		    
		   if(currentScrollY > wHeight)
		     $('.logo2').css({ position:"fixed", display:"block" });

		   else
		     $('.logo2').css({ position:"absolute", display:"none" });

		   
		    
		   
		  }
		};

		var scroller = new Scroller();  
		scroller.init();


	