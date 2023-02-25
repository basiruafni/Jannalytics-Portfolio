// aos
AOS.init();

// on Scroll smooth when click the ID from Navbar
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500
  );
});

// list dropdown
$(document).ready(function () {
  $("#list-dropdown").hide();
  $("#dropdown").click(function () {
    $("#list-dropdown").fadeToggle();
    $("#list-dropdown-2").fadeOut();
    $("#list-dropdown-3").fadeOut();
    $("#list-dropdown-4").fadeOut();
  });

  $("#dropdown-2").click(function () {
    $("#list-dropdown-2").fadeToggle();
    $("#list-dropdown").fadeOut();
    $("#list-dropdown-3").fadeOut();
    $("#list-dropdown-4").fadeOut();
  });

  $("#dropdown-3").click(function () {
    $("#list-dropdown-3").fadeToggle();
    $("#list-dropdown-2").fadeOut();
    $("#list-dropdown").fadeOut();
    $("#list-dropdown-4").fadeOut();
  });

  $("#dropdown-4").click(function () {
    $("#list-dropdown-4").fadeToggle();
    $("#list-dropdown-2").fadeOut();
    $("#list-dropdown-3").fadeOut();
    $("#list-dropdown").fadeOut();
  });
});

// fungsi search
$(document).ready(function () {
  $("#search input[type='text']").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#card-projects .card").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

// $(document).ready(function () {
//   var i;
//   for (i = 1; i <= 4; i++) {
//     $("#list-dropdown-" + i).hide();
//     $("#dropdown-" + i).click(function () {
//       var j;
//       for (j = 1; j <= 4; j++) {
//         if (j !== i) {
//           $("#list-dropdown-" + j).fadeOut();
//         }
//       }
//       $("#list-dropdown-" + i).fadeToggle();
//     });
//   }
// });

// function filter

$(document).ready(function () {
  $(".btn-filter").click(function () {
    var filter = $(this).attr("data-filter");
    if (filter == "all") {
      $("#card-projects .card").show("slow");
    } else {
      $("#card-projects .card")
        .not("." + filter)
        .hide("slow");
      $("#card-projects .card." + filter).show("slow");
    }
    $(".btn-filter").removeClass("active-filter");
    $(this).addClass("active-filter");
  });
});

// function addClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       element.className += " " + arr2[i];
//     }
//   }
// }

function addClass(element, name) {
  var arr1 = $(element).attr("class").split(" ");
  var arr2 = name.split(" ");
  $.each(arr2, function (i, className) {
    if ($.inArray(className, arr1) == -1) {
      $(element).addClass(className);
    }
  });
}

function removeClass(element, name) {
  var arr1 = $(element).attr("class").split(" ");
  var arr2 = name.split(" ");
  $.each(arr2, function (i, className) {
    arr1 = $.grep(arr1, function (value) {
      return value != className;
    });
  });
  $(element).attr("class", arr1.join(" "));
}

// function removeClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }

// function navbar fix
var num = 50;

$(window).bind("scroll", function () {
  if ($(window).scrollTop() > num) {
    $("#navbar").addClass("fixNav");
  } else {
    $("#navbar").removeClass("fixNav");
  }
});

// function animation for modal
$(document).ready(function () {
  $(".modal").on("show.bs.modal", function () {
    $(this).find(".modal-content").addClass("animate zoomIn");
  });
  $(".modal").on("hide.bs.modal", function () {
    $(this).find(".modal-content").removeClass("animate zoomIn");
  });
});
