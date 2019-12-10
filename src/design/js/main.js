$(document).ready(function() {
  $('input[type="file"]').change(function(e) {
    var fileName = e.target.files[0].name;
    $(".custom-file-label").html(fileName);
  });

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
