const app = (() => {
    let body;
    let menu;
    let fullScreen;
    let contactOption;
    let isMenuOpened = false;
  
    const init = () => {
      body = document.querySelector('body');
      menu = document.querySelector('.menu-icon');
      fullScreen = document.querySelector('.overlay');
      contactOption = document.querySelector('.contact-option');
  
      applyListeners();
    };
  
    const applyListeners = () => {
      menu.addEventListener('click', () => toggleMenu());
      contactOption.addEventListener('click', () => toggleMenu());
    };
  
    const toggleClass = (element, stringClass) => {
      if (element.classList.contains(stringClass))
      element.classList.remove(stringClass);else
  
      element.classList.add(stringClass);
    };

    const toggleMenu = () => {
      isMenuOpened = !body.classList.contains('nav-active');

      toggleClass(menu, 'open');
      toggleClass(fullScreen, 'active');

      if (isMenuOpened === false) {
        setTimeout(() => {
          fullScreen.style.width = '0%'
        }, 350)
      }
      else {
        fullScreen.style.width = '100%'
      }
    }
  
    init();
  })();