function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  menu.classList.toggle('show');
}
const backToTop = document.getElementById("backToTop");
/* Going to top button*/
window.onscroll = () => {
  if (document.body.scrollTop > 175 || document.documentElement.scrollTop > 175) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


