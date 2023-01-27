const navList = document.querySelector(".nav-menu"),
      openNav = document.querySelector(".hamburger"),
      closeNav = document.querySelector(".close-nav");

    openNav.onclick = function(){
      navList.classList.add("active-nav");
    }
    
    closeNav.onclick = function(){
      navList.classList.remove("active-nav");
    }

const serviceContainer = document.querySelector(".service-content-container");

function moveleft() {
    serviceContainer.scrollBy(-1000, 0)
} 

function moveright() {
   serviceContainer.scrollBy(1000, 0)

} 

const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
  // reset: true
})


sr.reveal(`.home-img, .home-contxt-container`,{
  origin: 'bottom',
  interval: 80,
})

sr.reveal(`.testimonial-header, .testimonial-container, .follow-list-img, .hero-img`,{
  origin: 'bottom',
  interval: 80,
})

sr.reveal(`.about-img, .left-img`,{
  origin: 'left',
  interval: 80,
})

sr.reveal(`.schedule-img, .right-img`,{
  origin: 'right',
  interval: 80,
})