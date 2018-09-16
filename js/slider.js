(function() {
    const slider = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        // And if we need scrollbar
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
    });

})()