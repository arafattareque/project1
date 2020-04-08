$(function(){
   $(window).scroll(function(){
       let position = $(this).scrollTop();
       if(position >= 200){
          $('.nav-menu').addClass('custom-navbar');
          }else{
           $('.nav-menu').removeClass('custom-navbar');
          }
   }); 
});

var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });


$(window).on('load' , function(){
    $("#isotope-container").isotope({
        
    });
    $("#isotope-filters").on('click' , 'button' , function(){
        var filterValue = $(this).attr('data-filter');
        $("#isotope-container").isotope({
            filter : filterValue
        });
        $("#isotope-filters").find('.active').removeClass('active')
        $(this).addClass("active");
    });
    
});

$(function(){
    $("#portfolio-wrapper").magnificPopup({
       delegate : 'a',
       type: 'image',
        gallery : {
            enabled : true
        }
    });
});

$(function(){
    $("#gallary-tab").responsiveTabs({
        animation:'slide'
    });
});