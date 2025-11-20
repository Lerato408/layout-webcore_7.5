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

              const btn = document.querySelector('.brand__container-toggle');
              const list = document.querySelector('.swiper-container');

              if (btn && list) {
              btn.addEventListener('click', () => {
              list.classList.toggle('expanded');
               btn.textContent = list.classList.contains('expanded') ? "Hide" : "Show all";
             });
             }