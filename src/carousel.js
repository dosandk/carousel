!(function() {
  document.addEventListener('DOMContentLoaded', () => {
    const selectors = {
      nav: '.nav',
      item: '.carousel-item',
      container: '.carousel-container'
    };
    const activeClassName = 'active';
    const containers = document.querySelectorAll(selectors.container);

    Array.from(containers).forEach(initCarousels);

    function initCarousels(el) {
      const nav = el.querySelectorAll(selectors.nav);

      Array.from(nav).forEach(createNavigationEventListener);
    }

    function createNavigationEventListener(el) {
      el.addEventListener('click', () => {
        const items = el.parentElement.querySelectorAll(selectors.item);

        if (items.length) {
          const lastIndex = items.length - 1;
          const activeIndex = Array.from(items).findIndex(item => item.classList.contains(activeClassName));
          const nextIndex = activeIndex + 1 > lastIndex ? 0 : activeIndex + 1;

          items[activeIndex].classList.remove(activeClassName);
          items[nextIndex].classList.add(activeClassName);
        }
      });
    }
  });
}());

