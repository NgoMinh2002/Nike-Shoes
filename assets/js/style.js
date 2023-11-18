// function openNav() {
//   document.getElementById("sidenav").style.width = "300px";
//   var overlays = document.getElementsByClassName("overlay");
//   for (var i = 0; i < overlays.length; i++) {
//     overlays[i].classList.add("active");
//   }
// }

// function closeNav() {
//   document.getElementById("sidenav").style.width = "0";
//   var overlays = document.getElementsByClassName("overlay");
//   for (var i = 0; i < overlays.length; i++) {
//     overlays[i].classList.remove("active");
//   }
// }
function openNav() {
  document.getElementById("sidenav").classList.add("open");
  var overlays = document.getElementsByClassName("overlay");
  for (var i = 0; i < overlays.length; i++) {
    overlays[i].classList.add("active");
  }
}

function closeNav() {
  document.getElementById("sidenav").classList.remove("open");
  var overlays = document.getElementsByClassName("overlay");
  for (var i = 0; i < overlays.length; i++) {
    overlays[i].classList.remove("active");
  }
}
// Cách thực hiện - Thanh điều hướng cố định/gắn
window.onscroll = function () {
  myFunction();
  scrollFunction();
};

var navbar = document.getElementById("navbars");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

let mybutton = document.getElementById("myBtn");

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Khi người dùng nhấp vào nút, cuộn đến đầu trang của tài liệu
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(".filtering").slick({
  Swipe: true,
  slidesToShow: 5,
  slidesToScroll: 3,
  arrows: true,
  speed: 300,

  prevArrow:
    '<button type="button"  class="slick-prev"><i class="fa-solid fa-caret-left fa-1x"></i></button>',

  nextArrow:
    '<button type="button" class="slick-next"><i class="fa-solid fa-caret-right"></i></button>',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        speed: 300,
      },
    },
    {
      breakpoint: 994,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        speed: 300,
      },
    },
    {
      breakpoint: 587,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        speed: 300,
      },
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 300,
      },
    },
  ],
});

var filtered = false;

$(".js-filter").on("click", function () {
  if (filtered === false) {
    $(".filtering").slick("slickFilter", ":even");
    $(this).text("Unfilter Slides");
    filtered = true;
  } else {
    $(".filtering").slick("slickUnfilter");
    $(this).text("Filter Slides");
    filtered = false;
  }
});

$(".multiple-items").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 994,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        speed: 300,
      },
    },

    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 300,
      },
    },
  ],
});

$(".banner-bottom").slick({
  slidesToShow: 5,
  arrows: false,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 3,
      },
    },
  ],
});
//
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// backtop
