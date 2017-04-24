$(document).ready(function () {
    $('.dashBtn').on('click', function () {
        $('.dashboard').hide();
        $('.main').removeClass('hide').addClass('fade');
    })
});