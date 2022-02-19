const app = (() => {
    let body;
    let menu;
    let fullScreen;
    let contactOption;
    let isMenuOpened;
  
    const init = () => {
      body = document.querySelector('body');
      menu = document.querySelector('.menu-icon');
      fullScreen = document.querySelector('.overlay');
      contactOption = document.querySelector('.contact-option');

      fullScreen.style.visibility = 'hidden';
  
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
      isMenuOpened = fullScreen.classList.contains('active');

      toggleClass(menu, 'open');

      if (isMenuOpened === true) {
        // Transition to fade out
        toggleClass(fullScreen, 'active');
        setTimeout(() => {          
          fullScreen.style.visibility = 'hidden';
        }, 350);
      }
      else {
        // Transition to fade in
        toggleClass(fullScreen, 'active');
        fullScreen.style.visibility = 'visible';
      }
    }
  
    init();
  })();