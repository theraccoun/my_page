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
//= require_tree .

$(document).ready( function() {

	// Fade out/in projects:
	$('.projdescription').hide();
	//$('.projbox').fadeTo(0, 0.4);

    $('.projbox').hover( 
        function() {
            var me = $(this);
            var title = $(this).children()[2];
            var description = $(this).children()[3];          
            $(title).hide( 0, function() {
                $(description).fadeIn(0);
                //$(me).fadeTo(0, 0.9);
            });
        },
        function() {
            var me = $(this);
            var title = $(this).children()[2];
            var description = $(this).children()[3];
            $(description).fadeOut(0, function() {
                $(title).show(0);
                //$(me).fadeTo(0, 0.4);
            });
        }
    );
    /*
    $('.paper-title-container').hover( 
        function() {
            var me = $(this);
            var description = me.siblings()[0];
            $(description).show( 0, function() {
            //    $(description).fadeIn(0);
                //$(me).fadeTo(0, 0.9);
            });
        },
        function() {
            var me = $(this);
            var description = me.siblings()[0];
            //$(description).hide( 0, function() {
            //    $(description).fadeIn(0);
                //$(me).fadeTo(0, 0.9);
            //});
        }
    );
    */

    var open_paper = {}

    var paper_animation = {    
        over: function() {

            var me = $(this);

            if( $(me)[0] !== $(open_paper)[0] ){
                var title = me.children()[1];
                var description = me.children()[2];

                $(title).animate({backgroundColor: '#FFAD33', 
                                  borderBottomLeftRadius: 0,
                                  borderBottomRightRadius: 0 }, 200);

                $(description).slideDown('fast', function() {
                    // Animation complete.
                });

                if(typeof(open_paper.children) === 'function'){
                    var old_title = open_paper.children()[1];
                    var old_description = open_paper.children()[2];
                    $(old_title).animate({backgroundColor: '#eaeaea'}, 200);

                    $(old_description).slideUp('fast', function() {
                        $(old_title).animate({
                                      borderBottomLeftRadius: 10,
                                      borderBottomRightRadius: 10 }, 10);
                    });
                }

                open_paper = me;
            }
        }, // function = onMouseOver callback (REQUIRED)    
        interval: 100, // number = milliseconds delay before onMouseOut
        timeout: 100,  
        out: function() {
            /*
            var me = $(this);
            var title = me.children()[1];
            var description = me.children()[2];

            $(title).animate({backgroundColor: '#eaeaea'}, 200);

            $(description).slideUp('fast', function() {
                $(title).animate({
                              borderBottomLeftRadius: 10,
                              borderBottomRightRadius: 10 }, 10);
            });
*/
        } // function = onMouseOut callback (REQUIRED)    
    };

    $('.paper-container').hoverIntent( paper_animation );
/*
    $('.paper-container').hoverIntent(function() {
            var me = $(this);
            var title = me.children()[1];
            var description = me.children()[2];

            $(title).delay(500).animate({backgroundColor: '#FFAD33', 
                              borderBottomLeftRadius: 0,
                              borderBottomRightRadius: 0 }, 200);

            $(description).delay(500).slideDown('fast', function() {
                // Animation complete.
            });
        },
        function() {
            var me = $(this);
            var title = me.children()[1];
            var description = me.children()[2];

            $(title).animate({backgroundColor: '#eaeaea'}, 200);

            $(description).slideUp(0, function() {
                $(title).animate({
                              borderBottomLeftRadius: 10,
                              borderBottomRightRadius: 10 }, 10);
            });
        }
    );
*/
});