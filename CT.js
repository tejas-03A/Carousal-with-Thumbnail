document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carousel');
    const thumbnails = document.getElementById('thumbnails');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function updateThumbnails() {
        thumbnails.childNodes.forEach((thumbnail, i) => {
            thumbnail.classList.toggle('active', i === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        updateThumbnails();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
        updateThumbnails();
    }

    function goToSlide(slideId) {
        const index = Array.from(slides).findIndex(slide => slide.id === slideId);
        if (index !== -1) {
            currentIndex = index;
            showSlide(currentIndex);
            updateThumbnails();
        }
    }


    showSlide(currentIndex);
    updateThumbnails();
});