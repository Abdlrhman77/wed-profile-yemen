  // Splash 
  window.addEventListener("load", () => {
    setTimeout(() => document.getElementById("splash").style.display="none", 2000);

  
  });

  // Mobile menu 
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(link=>{
    link.addEventListener('click',()=>{ 
      navLinks.classList.remove('active'); 
      menuToggle.classList.remove('active'); 
    });
  });

  document.addEventListener('click', function(event) {
    const nav = document.querySelector('.nav-container');
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });


  // Slider JS
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const dots = document.querySelectorAll('.dot');
  let index = 0;

  function updateSlider() {
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(${-index * slideWidth}px)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  }

  prevBtn.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : slides.length - 1;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    index = (index < slides.length - 1) ? index + 1 : 0;
    updateSlider();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i;
      updateSlider();
    });
  });

  setInterval(() => {
    index = (index < slides.length - 1) ? index + 1 : 0;
    updateSlider();
  }, 4000);


