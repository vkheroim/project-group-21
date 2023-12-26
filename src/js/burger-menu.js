// (() => {
//     const mobileMenu = document.querySelector(".js-menu-container");
//     const openMenuBtn = document.querySelector(".js-open-menu");
//   const closeMenuBtn = document.querySelector(".js-close-menu");
//   // const closeMenuLink1 = document.querySelector(".js-close-menu-link1");
//   // const closeMenuLink2 = document.querySelector(".js-close-menu-link2");
//   // const closeMenuLink3 = document.querySelector(".js-close-menu-link3");
//   const closeMenuLink = document.querySelectorAll('.js-close-menu-link');

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');

//     const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//     openMenuBtn.addEventListener("click", toggleMenu);
//   // closeMenuBtn.addEventListener("click", toggleMenu);
//   // closeMenuLink1.addEventListener("click", toggleMenu);
//   // closeMenuLink2.addEventListener("click", toggleMenu);
//   // closeMenuLink3.addEventListener("click", toggleMenu);
//   closeMenuLink.forEach(item => item.addEventListener('click', toggleMenu));
  


//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const closeMenuLink = document.querySelectorAll('.js-close-menu-link');
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  closeMenuLink.forEach(item => item.addEventListener('click', toggleMenu));
  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
    
