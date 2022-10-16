var flag = 0;
document.querySelector("#nav .open")
  .addEventListener("click", function () {
    if (flag === 0) {
      document.querySelector("#page-1 #nav2").style.top = "0"
      flag = 1
    } else {
      document.querySelector("#page-1 #nav2").style.top = "-100%"
      flag = 0
    }
  })

let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];

let tabsPane = tabHeader.getElementsByTagName("div")

for (let i = 0; i < tabsPane.length; i++) {
  console.log("jyfrdfjnh  ")
  tabsPane[i].addEventListener("click", function () {
    tabHeader.getElementsByClassName("active")
    [0].classList.remove("active")
    tabsPane[i].classList.add("active");
    tabBody.getElementsByClassName("active")
    [0].classList.remove("active")
    tabBody.getElementsByClassName("detl")
    [i].classList.add("active")

    tabIndicator.style.left = `calc(calc(100%/6)*${i})`
  })
}





gsap.to(".trans", {
  scrollTrigger: {
    trigger: ".rating",
    start: "top 80%",
  },
  ease: Expo.easeInOut,
  duration: 2,
  scale: 1.2

}, '-=1')

gsap.from(".boxes", {
  scrollTrigger: {
    trigger: ".boxes",
    start: "top 80%",
  },
  ease: Expo.easeInOut,
  duration: 2,
  stagger: .2,
  x: 200,
  opacity: 0,
  scale: 1

}, '-=1')
gsap.from(".ml-image", {
  scrollTrigger: {
    trigger: "#ml-image",
    start: "top 80%",
  },
  ease: Expo.easeInOut,
  duration: 1,
  opacity: 0,
  scale: .2

}, '-=2')



gsap.from(".movetick", {
  scrollTrigger: {
    trigger: ".movetick",
    start: "top 80%",
  },
  ease: Expo.easeInOut,
  duration: 2,
  stagger: .2,
  x: -50,
  opacity: 0,

}, '-=1')










const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  grabCursor: true

});

function slideToWhy(index) {
  swiper.slideTo(index);
}
