//set consts
const trackGallery = document.querySelector('.gallery-carousel__container');
const container = Array.from(trackGallery.children);
const nextButton = document.querySelector('.gallery-carousel__button--right');
const prevButton = document.querySelector('.gallery-carousel__button--left');

//arrange slides next to one another
const slideWidthGallery = container[0].getBoundingClientRect().width;
const setSlidePositionGallery = ((slide, index) => {
    slide.style.left = slideWidthGallery * index + 'px';
})
container.forEach(setSlidePositionGallery);

//function to move to a target slide
const moveToSlideGallery = (trackGallery, currentSlide, targetSlide) => {
    trackGallery.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-container');
    targetSlide.classList.add('current-container');
};

//move slide to the right
nextButton.addEventListener('click', () => {
    const currentSlide = trackGallery.querySelector('.current-container');
    let nextSlide = currentSlide.nextElementSibling;

    if(!nextSlide){
        nextSlide = container[0];
    }

    moveToSlideGallery(trackGallery, currentSlide, nextSlide);
});

//move slide to the left
prevButton.addEventListener('click', () => {
    const currentSlide = trackGallery.querySelector('.current-container');
    let prevSlide = currentSlide.previousElementSibling;

    if(!prevSlide){
        prevSlide = container[container.length-1];
    }

    moveToSlideGallery(trackGallery, currentSlide, prevSlide);
});
