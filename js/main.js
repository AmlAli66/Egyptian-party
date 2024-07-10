// $('.container')
//     .animate({ width: '100%' })
//     .animate({ height: '100vh' }, function () {
//         $('h1').slideDown(500, function () {
//             $('.title').slideDown(500, function () {
//                 $('.col-md-4').eq(0).slideDown(500, function () {
//                     $('.col-md-4').eq(1).slideDown(500, function () {
//                         $('.col-md-4').eq(2).slideDown(500)
//                     })
//                 })
//             })
//         })
//     })
//==========>Aside menu<=============
$('.open-sidebar').click(function () {
    $('.left-aside').animate({ width: '250px' }, 50)
    $('.header-box').animate({ marginLeft: '250px' }, 50)
})

$('.left-aside-close').click(function () {
    $('.left-aside').animate({ width: '0px' }, 50)
    $('.header-box').animate({ marginLeft: '0px' }, 50)

})
// ==========>scrolling


$('a[href^="#"]').click(function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);

    return false;
});
//==========>Duration section<==========

$('.singer-header').click(function () {
    $(this).next().slideToggle(500)
    $('.singer-info').not($(this).next()).slideUp(500)
})




//=========>Count Dwon section<========== 


var countDownDate = new Date("oct 25, 2027 15:48:25").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();
    var distance = countDownDate - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    $('.days').text(days + " D ")
    $('.hours').text(hours + " h ")
    $('.minutes').text(minutes + " m ")
    $('.seconds').text(seconds + " s ")

}, 1000);



//=========>form <========== 

$('.contact-form form textarea').keyup(function () {
    let text = $(this).val().length;
    let remainingchars = 100 - text;
    if (remainingchars > 0) {
        $('.remaining-chars').text(remainingchars)
    } else {
        $('.remaining-chars').text('your available character finished')

    }

})