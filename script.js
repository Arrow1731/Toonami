let currentIndex = 0;
  const slidesContainer = document.getElementById('carouselSlides');
  const totalSlides = document.querySelectorAll('.carousel-slide').length;

  function showSlide(index) {
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;

    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  setInterval(nextSlide, 3000); // Auto-slide every 6 seconds



//   Cards homepage
