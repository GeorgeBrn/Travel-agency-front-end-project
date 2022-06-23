//HTML TO VARIABLES
const main = document.querySelector("main");
const navBar = document.querySelector(".navbar");

function navigation() {
  //NAVIGATION FADE
  function navFade(e) {
    if (e.target.classList.contains("navlink")) {
      const target = e.target;
      const siblings = target.closest(".navbar").querySelectorAll(".navlink");

      siblings.forEach(e => {
        if (e !== target) e.style.opacity = this;
      });
    }
  }

  navBar.addEventListener("mouseover", navFade.bind(0.5));
  navBar.addEventListener("mouseout", navFade.bind(1));

  //STICKY NAVIGATION
  const mainObserver = new IntersectionObserver(
    events => {
      const [event] = events;
      if (event.isIntersecting === true) {
        navBar.classList.add("sticky");
      } else {
        navBar.classList.remove("sticky");
      }
    },
    {
      root: null,
      rootMargin: "0px 0px -100%",
      threshold: 0,
    }
  );

  mainObserver.observe(main);

  //PAGE NAVIGATION
  function pageNav(e) {
    if (e.target.classList.contains("navlink")) {
      e.preventDefault();

      const id = document.querySelector(e.target.getAttribute("href"));
      const idCoord = id.getBoundingClientRect().top - 85;

      scrollTo({
        top: idCoord + window.pageYOffset,
        behavior: "smooth",
      });
    }
  }

  navBar.addEventListener("click", pageNav);
}

export { navigation };
