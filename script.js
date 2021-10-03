$(document).ready(function () {
  $("#configModal").modal("show");

  // Configuration Button Spin
  $(".config-container")
    .mouseenter(function () {
      $(".config-container > svg").removeClass("fa-spin");
    })
    .mouseleave(function () {
      $(".config-container > svg").addClass("fa-spin");
    });
});
