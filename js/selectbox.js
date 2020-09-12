$(function() {
  var $select = $('.js-my-select'),
      $images =  $('.product_item');
  $select.on('change', function() {
    var value = '.' + $(this).val();
    $images.show().not(value).hide();
  });
   
});

