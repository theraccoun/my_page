// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//

//= require jquery
//= require jquery-ui.min
//= require jquery_ujs
//= require bootstrap

$(document).ready( function() {

	$("#myCarousel").carousel({
			interval: 20000
		});

	$(function() {

	    var $el, leftPos, newWidth,
	        $mainNav = $("#example-one");
	    
	    $mainNav.append("<li id='magic-line'></li>");
	    var $magicLine = $("#magic-line");
	    
	    $magicLine
	        .width($(".current_page_item").width())
	        .css("left", $(".current_page_item").position().left)
	        .data("origLeft", $magicLine.position().left)
	        .data("origWidth", $magicLine.width());
	        
	    $("#example-one li").hover(function() {
	        $el = $(this);
	        leftPos = $el.position().left;
	        newWidth = $el.width();
	        $magicLine.stop().animate({
	            left: leftPos,
	            width: newWidth
	        });
	    }, function() {
	        $magicLine.stop().animate({
	            left: $magicLine.data("origLeft"),
	            width: $magicLine.data("origWidth")
	        });    
	    });
	});
	
});