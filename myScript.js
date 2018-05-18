$(document).ready(function() {
  $("#search").click(function() {
    var searchTerm = $("#searchTerm").val();
    $.ajax({
      type: "GET",
      url:
        "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
          searchTerm +
          "&callback=?",
      async: false,
      dataType: "json",
      success: function(data) {
        $("#result").html("");
        for (var i = 0; i < 10; i++) {
          var j = i + 1;
          $("#result").append(
            j +
              " - <a href=" +
              data[3][i] +
              ' target= "blank">' +
              data[1][i] +
              "</a><h3>" +
              data[2][i] +
              "</h3><br><hr>"
          );
        }
      },
      error: function(errorMessage) {
        console.log("err");
      }
    });
  });
  //  enter for search
  $("#searchTerm").bind("keypress", function(e) {
    if ((e.which == 13)) {
      $("#search").click();
    }
  });
  Site.PARALLAX_FACTOR = 0;
});

