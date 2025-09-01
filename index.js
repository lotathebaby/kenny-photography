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

const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileMenu = document.getElementById('mobileMenu');
const backdrop = document.getElementById('backdrop');

const openMenu = () => {
  mobileMenu.classList.remove('translate-x-full');
  backdrop.classList.remove('hidden');
};

const closeMenu = () => {
  mobileMenu.classList.add('translate-x-full');
  backdrop.classList.add('hidden');
};

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
backdrop.addEventListener('click', closeMenu);
