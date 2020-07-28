$(document).ready(function(){
    $('.slider-section').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        // autoplay: true,
    });
});

$(document).ready(function(){
    $('.slider-content .content').hyphenate();
});

$(document).ready(function(){
   $('.text-section .details').click(function(){
       if ($(this).hasClass('-opened')) {
           $(this).siblings('.text').html(
               $(this).siblings('.original').html().substr(0, 437) + "..."
           );
           $(this).text('Развернуть новость');
           $(this).css({'margin-top': 'auto'});
           $(this).removeClass('-opened');
       } else {
           $(this).siblings('.text').html(
               $(this).siblings('.original').html()
           );
           $(this).text('Свернуть новость');
           $(this).css({'margin-top': '20px'});
           $(this).addClass('-opened');
       }
   });
});