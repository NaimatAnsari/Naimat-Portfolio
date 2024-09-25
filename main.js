let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');  // Make sure bx-x class exists
    navbar.classList.toggle('active');  // Ensure active class is defined in CSS
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close the menu when scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}



function openMail() {
    let name1 = document.getElementById("name1").value;
    let email1 = document.getElementById("email1").value;
    let number1 = document.getElementById("number1").value;
    let emailMessage1 = document.getElementById("emailMessage1").value;
    let message1 = document.getElementById("message1").value;
  
    if (name1 && email1 && number1 && emailMessage1 && message1) {
  
      window.location.href = "mailto:naimatansari31@gmail.com";
    }
  }


  let currentSlide = 0;

  function showSlide(index) {
      const slides = document.querySelectorAll('.carousel-item');
      if (index >= slides.length) {
          currentSlide = 0;
      } else if (index < 0) {
          currentSlide = slides.length - 1;
      } else {
          currentSlide = index;
      }
      const carouselContainer = document.querySelector('.carousel-container');
      carouselContainer.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
  }
  
  function changeSlide(direction) {
      showSlide(currentSlide + direction);
  }
  
  // Show the first slide on page load
  showSlide(currentSlide);
  