$(document).ready(function () {
    $('.dashBtn').on('click', function () {
        $('.dashboard').hide();
        $('.main').removeClass('hide').addClass('fade');
    })
    $('.modalbutton').on('click', function () {
        $('.main').removeClass('fade');
    })
});