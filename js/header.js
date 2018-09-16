// DEPRECATED YET

(function() {
    const header = document.querySelector('header.header');
    
    const headerPosition = header.offsetTop;

    // document.addEventListener('scroll', handleScroll);
    window.onscroll = handleScroll;

    function handleScroll(e) {
        console.log(window.pageYOffset, headerPosition);
        if (window.pageYOffset > headerPosition) {
            header.classList.add('header--floating');
        } else {
            header.classList.remove('header--floating');
        }
    }
})()