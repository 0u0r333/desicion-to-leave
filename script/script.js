$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) { 
          $('.button').fadeIn(),100,linear;
        } else {
          $('.button').fadeOut(),100,linear;
        }
      }); // 버튼 클릭시 
      $(".button").click(function() { 
          $('html, body').animate({ scrollTop : 0 
          }, 400);
          return false; 
      }); 


      //배우 이미지위에 마우스 오버시 소개 나오게
      $(".o_box").on({
        mouseover:function(){
          $(this).find('span,p').stop(true).animate({opacity:'1'},300,'linear');
        },

        mouseout:function(){
          $(this).find('span,p').stop(true).animate({opacity:'0'},300,'linear');
        },

        
      });



});