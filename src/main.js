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

  $(".datepicker1").datepicker({
    todayHighlight: true,
    title: "Date of Birth",
  });

  $(".input-daterange").datepicker({ todayHighlight: true });

  $(".input-group.date").datepicker({});
});

$(function () {
  "use strict";
  $(".menu").hide();
  $(".navbar").removeClass("shadow-sm");
  // $(".navbar-brand").css("display", "block");

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

  // if (on_index == "home") {
  //     $('.navbar-brand').hide();
  // }

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
