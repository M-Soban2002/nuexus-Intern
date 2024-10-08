const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let position = 0; // This variable keeps track of the current position of the carousel

prevButton.addEventListener('click', () => {
  if (position > 0) {
    position -= 1;
    track.style.transform = `translateX(-${position * 230}px)`; // Adjust based on the width of the item and margin
  }
});

nextButton.addEventListener('click', () => {
  if (position < track.children.length - 3) { // Ensure it does not move past the last image
    position += 1;
    track.style.transform = `translateX(-${position * 230}px)`;
  }
});
