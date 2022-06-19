$(function($){
    $('.button1').on('click', function(){
        if($('.open-box').is(':hidden')) {
            $('.open-box').slideDown();
            $(this).text('close');
            $(this).css('font-size' , '16px');
            $(this).css('background-color','rgba(171,139,172,0.4)');
            $(this).css('color','#fff')
        }else{
            $('.open-box').slideUp();
            $(this).text('ALL COLOR');
            $(this).css('font-size' , '16px');
            $(this).css('background-color','#fff');
            $(this).css('color','rgba(171,139,172,0.9)')
        }
    });

    $('.slider').slick({
        dots: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplaySpeed: 5000,
        prevArrow:'<img src="images/左.png" alt="" class="prev_icon">',
        nextArrow:'<img src="images/右.png" alt="" class="next_icon">',
    });

    $('.slider2').slick({
        dots: true,
        centerMode:true,
        centerPadding:'0',
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        prevArrow:'<img src="images/左.png" alt="" class="prev_icon">',
        nextArrow:'<img src="images/右.png" alt="" class="next_icon">',
    });


    $(document).ready(function () {
        
        $(function () {

            $('#button2 a').click(function () {
                var speed = 300;
                $('body,html').animate({
                    scrollTop: 0
                }, speed,'swing');
                return false;
            });
        });
    });

    

    $('#about1 a').click(function(){
        var adjust = 50;
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' :href);
        var position = target.offset().top - adjust;
        $('body,html').animate({
            scrollTop: position
          },speed,'swing');
          return false;
      });

      $('.itemheader a').click(function(){
        var adjust = 70;
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' :href);
        var position = target.offset().top - adjust;
        $('body,html').animate({
            scrollTop: position
          },speed,'swing');
          return false;
      });
    

});