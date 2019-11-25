$(document).ready(function() {
  $(".dropdown-menu").click(function(e) {
    e.stopPropagation();
  });

  $(".datepicker")
    .datepicker()
    .on("changeDate", function(e) {
      $(this).datepicker("hide");
    });
});
