$(document).ready(function(){

  var $select = $('.js-my-select'),
      $images =  $('.hehehrhr');
  $select.on('change', function() {
    var value = '.' + $(this).val();
    $images.show().not(value).hide();
  });

    $('select').niceSelect();

});