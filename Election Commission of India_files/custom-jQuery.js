var jQ = jQuery.noConflict();

jQ(document).ready(function () {
  //This function for sticky header
  jQ(window).scroll(function () {
    if (jQ(this).scrollTop() > 50) {
      jQ(".top-head").addClass("Sticky-top-head");
    } else {
      jQ(".top-head").removeClass("Sticky-top-head");
    }
  });


});
