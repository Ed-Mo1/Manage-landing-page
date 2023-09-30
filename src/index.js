const reviews = [
  {
    "customer name": "Anisha Li",
    comment: `“Manage has supercharged our team’s workflow. The ability to maintain 
  visibility on larger milestones at all times keeps everyone motivated.”`,
    avatar: `./images/avatar-anisha.png`,
  },
  {
    "customer name": "Ali Bravo",
    comment: `“We have been able to cancel so many other subscriptions since using 
    Manage. There is no more cross-channel confusion and everyone is much 
    more focused.”`,
    avatar: `./images/avatar-ali.png`,
  },
  {
    "customer name": "Richard Watts",
    comment: `“Manage allows us to provide structure and process. It keeps us organized 
    and focused. I can’t stop recommending them to everyone I talk to!”`,
    avatar: `./images/avatar-richard.png`,
  },
  {
    "customer name": "Shanai Gough",
    comment: ` “Their software allows us to track, manage and collaborate on our projects 
    from anywhere. It keeps the whole team in-sync without being intrusive.”`,
    avatar: `../images/avatar-shanai.png`,
  },
];
const wraperContent = document.querySelector(".swiper-wrapper");
const reviewsContent = document.querySelector("#reviews-content");
const nav_toggle = document.querySelector(".navbar-toggler-icon");
window.onscroll = () => {
  if (window.scrollY >= 100) {
    document.querySelector(".navbar").classList.remove("bg-transparent");
    document.querySelector(".navbar").classList.add("bg-white");
  } else {
    document.querySelector(".navbar").classList.remove("bg-white");
    document.querySelector(".navbar").classList.add("bg-transparent");
  }
};
reviews.forEach((el) => {
  wraperContent.innerHTML += `
  <div class="swiper-slide">
  <div class="card border-0">
    <div class="card-img">
      <img
        src="${el.avatar}"
        class="d-block mx-auto"
      />
    </div>
    <div class="card-body text-center">
      <h5 class="card-title name">${el["customer name"]}</h5>
      <p class="card-text text-black-50">
       ${el.comment}
      </p>
    </div>
  </div>
</div>
  `;
});

nav_toggle.addEventListener("click", function () {
  this.classList.toggle("close");
});

document.forms[0].onsubmit = (e) => {
  e.preventDefault();
  if (
    !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
      document.querySelector("input").value
    )
  ) {
    document.querySelector(".form-group").classList.add("error");
    setInterval(() => {
      document.querySelector(".form-group").classList.remove("error");
    }, 5000);
  }
};

new Swiper(".swiper", {
  effect: "coverflow",
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    992: {
      effect: false,

      slidesPerView: 3,
      pagination: false,
    },
  },
});
