document.addEventListener("DOMContentLoaded", () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    smoothMobile: true,
    inertia: 0.5,
    lerp: 0.1,
    multiplier: 1,

    mobile: {
      smooth: false,
      inertia: 0,
      lerp: 0,
      multiplier: 0,
    },
  });

  scroll.update();

  let el = document.querySelector("ul > li > p");
  // let el = document.querySelector(".header__scroll");
  console.log(el);

  scroll.on("scroll", (instance) => {
    console.log(instance.scroll.y);
    let value = instance.scroll.y / 2;
    el.style.transform = "rotate(" + value + "deg)";
    el.style.transform = "rotate(-" + value + "deg)";
  });
});
