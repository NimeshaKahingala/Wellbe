document.getElementById("login").onclick = function () {
  window.location.href = "./form.html";
  console.log("aaaaaaaaaa")
};



$(function () {
  'use strict';
  $('.menu').hide();
  $('.navbar').removeClass('shadow-sm');
  $('.navbar-brand').css("display", "block")

  $('.hamburger-menu-wrapper').click(function (e) {
      e.preventDefault();

      if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          $('.menu-overlay').fadeToggle('fast', 'linear');
          $('.menu').slideToggle('slow');
      } else {
          $(this).addClass('active');
          $('.menu-overlay').fadeToggle('fast', 'linear');
          $('.menu').slideToggle('slow');
          $(this).addClass('active');

      }
  })

  // if (on_index == "home") {
  //     $('.navbar-brand').hide();
  // }

  const $menu = $('.navbar');

  $(document).mouseup(e => {
      if (!$menu.is(e.target)
          && $menu.has(e.target).length === 0) {
          $('.ham').removeClass('active');
          $('.menu').hide();
      }
  });

  $(window).scroll(function () {
      $('.ham').removeClass('active');
      $('.menu').hide();

      if ($(this).scrollTop() > 0) {
          $('.navbar').addClass('shadow-sm');
          $('.navbar-brand').show();
      }
      else {
          $('.navbar').removeClass('shadow-sm');
          // if (on_index == "home") {
          //     $('.navbar-brand').hide();
          // }
      }

  });

});

function myFunction() {
  document.getElementById("").innerHTML = "Hello World";
}
