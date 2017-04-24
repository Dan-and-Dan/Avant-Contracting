$(document).ready(function () {
    $('.dashBtn').on('click', function () {
        $('.dashboard').hide();
        $('.main').removeClass('hide').addClass('fade');
    })
    $('.modalbutton').on('click', function () {
        $('.main').removeClass('fade');
    })

    $('body').scrollspy({
        target: '#navbar-section'
    });
    $('#sendEmailButton').on('click', function () {
        var mailObj = {};
        mailObj.name = $('#name').val();
        mailObj.number = $('#number').val();
        mailObj.message = $('#message').val();

        console.log(mailObj);

        window.open("mailto:" + "dillonbolognino@avantcontracting.com" + '&subject=' + mailObj.name + " " + mailObj.number + '&body=' + mailObj.message)
    })
    $(".owl-carousel").owlCarousel({
        nav: true,
        items: 1,
        responsive: {
            responsiveBaseElement: document.getElementById("owlContainer"),
            responsiveRefreshRate: 1000
        },
        navText: ['previous', 'next'],
        slideBy: 1,
        margin: 20,
        autoWidth: false,
        animateOut: true,
        animateIn: true
    })
});