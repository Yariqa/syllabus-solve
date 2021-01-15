// remove placeholder on focus
$('input,textarea').focus(function () {
    $(this).data('placeholder', $(this).attr('placeholder'))
        .attr('placeholder', '');
}).blur(function () {
    $(this).attr('placeholder', $(this).data('placeholder'));
});


// pricing carousel
$('.prices-carousel').owlCarousel({
    loop: false,
    margin: 25,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

// teacher carousel
$('.teacher-carousel').owlCarousel({
    loop: true,
    margin: 25,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})