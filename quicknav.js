$( document ).ready(function() {
  //cache quicknav
  var $quicknav = $('.quick_nav--offcanvas');

  if($quicknav.length){
    $quicknav.append('<button></button>');
    $quicknav.find('button').on('click', function(e){
      $quicknav.toggleClass('expanded');
    });
  }
});
