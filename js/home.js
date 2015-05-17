/*
Responsive nav menu with sub menus on larger screens.

built using very limited amount of js (javascript adds a couple of css classes) and to deal with an unknown number of menu items (used in several WordPress themes).

many further enhancements could easily be made (for example I normally include js to allow keyboard focus to automatically expand the collapsed menus) outside the scope of this demo.

The CSS could do with a bit of a clean up at the moment and the styling has intentionally been left very basic for this demo but the key points should still be clear!
*/

/**********
MOBILE MENU
**********/
$('.menu-toggle').click(function(e){
  if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey)) {
    e.preventDefault();
    if($(this).parent().find('.menu').hasClass('expanded-mobile-menu')){
      $(this).removeClass('expanded-menu-toggle').parent().removeClass('nav-expanded').find('.menu').removeClass('expanded-mobile-menu');
    }else{
      $(this).addClass('expanded-menu-toggle').parent().addClass('nav-expanded').find('.menu').addClass('expanded-mobile-menu');
    }
  }
});