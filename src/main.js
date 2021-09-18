// document.getElementById("login").onclick = function () {
//   window.location.href = "createappoinment.html";
// };

$(document).ready(function () {
  $("#login").click(function (e) {
    e.preventDefault();
    window.location.href = "createappoinment.html";
  });

  $("#appointmentSubmit").click(function (e) {
    e.preventDefault();
    window.location.href = "thankyou.html";
  });

  $("#createAppoinment").click(function (e) {
    e.preventDefault();
    window.location.href = "createappoinment.html";
  });

  $("#logout").click(function (e) {
    e.preventDefault();
    window.location.href = "index.html";
  });

  $(".date-of-birth").datepicker({
    todayHighlight: true,
    format: "dd/M/yyyy",
    clearBtn: true,
  });

  $(".input-daterange").datepicker({ todayHighlight: true });

  $(".input-group.date").datepicker({});
});

$('#date').datepicker({
  format: "dd/M/yyyy",
  startView: 1,
  minViewMode: 0,
  maxViewMode: 0,
  multidate: true,
  multidateSeparator: "   🡲   ",
  autoClose:true,
  clearBtn: true,
}).on("changeDate",function(event){
    var dates = event.dates, elem=$('#date');
    if(elem.data("selecteddates")==dates.join(",")) return; //To prevernt recursive call, that lead to lead the maximum stack in the browser.
    if(dates.length>2) dates=dates.splice(dates.length-1);
    dates.sort(function(a,b){return new Date(a).getTime()-new Date(b).getTime()});
    elem.data("selecteddates",dates.join(",")).datepicker('setDates',dates);
});

function getDates()
{
  // console.log($("#date").datepicker("getDates"));
  console.log($("#date").datepicker("getUTCDates"));
  console.log($("#date").data('datepicker').getFormattedDate('yyyy/mm/dd'));
}

$(function () {
  "use strict";
  $(".menu").hide();
  $(".navbar").removeClass("shadow-sm");

  $(".hamburger-menu-wrapper").click(function (e) {
    e.preventDefault();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".menu-overlay").fadeToggle("fast", "linear");
      $(".menu").slideToggle("slow");
    } else {
      $(this).addClass("active");
      $(".menu-overlay").fadeToggle("fast", "linear");
      $(".menu").slideToggle("slow");
      $(this).addClass("active");
    }
  });

  const $menu = $(".navbar");

  $(document).mouseup((e) => {
    if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
      $(".ham").removeClass("active");
      $(".menu").hide();
    }
  });

  $(window).scroll(function () {
    $(".ham").removeClass("active");
    $(".menu").hide();

    if ($(this).scrollTop() > 0) {
      $(".navbar").addClass("shadow-sm");
      $(".navbar-brand").show();
    } else {
      $(".navbar").removeClass("shadow-sm");
      // if (on_index == "home") {
      //     $('.navbar-brand').hide();
      // }
    }
  });
});
