$(document).ready(function() {
  $(".dropdown-menu").click(function(e) {
    e.stopPropagation();
  });

  $(".datepicker")
    .datepicker()
    .on("changeDate", function(e) {
      $(this).datepicker("hide");
    });

  $(".timeline__item_expand").on("click", function() {
    $(this)
      .siblings(".timeline__item_text")
      .toggleClass("show");
  });
});
