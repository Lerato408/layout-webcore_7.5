 // Initialize Swiper with responsive breakpoints
               const swiper = new Swiper(".swiper", {
               slidesPerView: 1.5,
               spaceBetween: 20,
               loop: true,
               pagination: { 
                 el: ".swiper-pagination",
                clickable: true, 
            },
               navigation: {
               nextEl: ".swiper-button-next",
               prevEl: ".swiper-button-prev"
              },
             allowTouchMove: true,
          
                }
             );

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