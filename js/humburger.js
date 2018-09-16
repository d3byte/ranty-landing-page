(function() {
    const humburgerBtn = document.querySelector('.header__main__humburger-toggle');
    const humburgerMenu = document.querySelector('.header__humburger');

    humburgerBtn.addEventListener('click', toggleMenu);

    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const headerHeight = 97;

    let isHumburgerToggled = false;

    function toggleMenu() {
        if (!isHumburgerToggled) {
            isHumburgerToggled = true;
            humburgerBtn.querySelector('img').setAttribute('src', 'assets/icon_burger_close.svg');
            humburgerMenu.style.maxHeight = `${viewportHeight - headerHeight}px`;
            document.body.style.overflow = 'hidden';
            return
        }
        isHumburgerToggled = false;
        humburgerBtn.querySelector('img').setAttribute('src', 'assets/icon_burger.svg');
        humburgerMenu.style.maxHeight = '0';
        document.body.style.overflow = 'visible';
    }
})();