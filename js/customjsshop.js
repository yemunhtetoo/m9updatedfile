/*$('#yemun').toggle(function() {

  $('#yemun').text('Class (1) Collaps -');
  $('#toggle_text').slideToggle();

}, function() {

  $('#yemun').text('Class (1) Collaps +');
  $('#toggle_text').slideToggle();

});*/

$('.filter-sort__filter-select').click(function() {
    $(this).toggleClass('active');
});


/*function toggle_plus(id) {
    var f = document.getElementById(id);
    if (f.classList.contains("showplus")) {
            f.classList.remove("showplus");
            f.classList.add("showminus");
        } else {
            f.classList.remove("showminus");
            f.classList.add("showplus");
        }
}
// Toggle to show and hide content below the link
function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block') {
      e.style.display = 'none';
   } else {
      e.style.display = 'block';
   }
}*/