const heroSect = document.querySelector('.hero');
const backgroundImages = [
  '/photos/photo-1.avif',
  '/photos/photo-2.avif',
  '/photos/photo-3.avif',
  '/photos/photo-4.avif',
  '/photos/photo-5.avif',
];

// track the current image showing
let currentImage = 0;

//change the background using slide show
const changeBackground = () => {
  heroSect.style.backgroundImage = `url(${backgroundImages[currentImage]})`;
  heroSect.style.backgroundSize = 'cover';
  heroSect.style.backgroundPosition = 'center center';
};

//set timing to change the pictures automatically
changeBackground();
setInterval(() => {
  currentImage = (currentImage + 1) % backgroundImages.length;
  changeBackground();
}, 5000);
