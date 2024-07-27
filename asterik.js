// Menu Toogle
const menuBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navigation.classList.toggle("active");
    });


// time js Function
function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if (hrs >= 12) {
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    }

    if (hrs > 12) {
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);

// scroll left right card

function scrollr() {
    var left = document.querySelector(".splide__track");
    left.scrollBy(382, 0)
}

function scrolll() {
    var right = document.querySelector(".splide__track");
    right.scrollBy(-382, 0)
}

// counter stats

const list = document.querySelectorAll(".list");

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));


// SLide js function

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".productCarousels").forEach((carousel) =>
      new Splide(carousel, {
          //type: "loop",
          perPage: 3.5,
          perMove: 1,
          arrows: false,
          pagination: false,
          focus: 'center',
          breakpoints: {
              1024: {
                  perPage: 2.5
              },
              768: {
                  perPage: 1.5
              },
              480: {
                  perPage: 1
              }
          }
      }).mount()
  );
});


// SMPT Server
