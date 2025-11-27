           
    let swiper = null;

function enableSwiper() {
  swiper = new Swiper('.swiper-container', {
    slidesPerView: 1.5,
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
}

function disableSwiper() {
  if (swiper !== null) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

function checkWidth() {
  const width = window.innerWidth;

  if (width < 768) {
    if (!swiper) {
      enableSwiper();
    }
  } 
  else {
    disableSwiper();
  }
}


window.addEventListener('load', checkWidth);

window.addEventListener('resize', checkWidth);


const btn = document.querySelector('.container-toggle');
const label = btn.querySelector('.label');
const arrow = btn.querySelector('.content__arrow--img');
const list = document.querySelector('.swiper-container');

if (btn && list) {
 btn.addEventListener('click', () => {
   list.classList.toggle('expanded');          
    if (list.classList.contains('expanded')) {
                   label.textContent = "Hide";
                  arrow.classList.add('rotated');
                } 
                else {
                 label.textContent = "Show all";
                 arrow.classList.remove('rotated');
                }
  });
 }