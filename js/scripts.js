var leapYear = function(year) {
  if (isNaN(year) || (year < 0)) {
    return null;
  } else {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    if (result === null) {
      alert("Please enter a number")
    } else {
      $(".year").text(year);

      if (!result) {
        $(".not").text("not");
      } else {
        $(".not").text("");
      }

      $("#result").show();
    }

    event.preventDefault();
  });
});
