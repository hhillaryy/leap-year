var leapYear = function(year) {
<<<<<<< HEAD
  if (isNaN(year) || (year < 0)) {
    return null;
  } else {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }
=======
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
>>>>>>> 613d1151bac0b53a28d41dd31482bf7383fb37d8
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

<<<<<<< HEAD
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

=======
    $(".year").text(year);

    if (!result) {                 // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
>>>>>>> 613d1151bac0b53a28d41dd31482bf7383fb37d8
    event.preventDefault();
  });
});
