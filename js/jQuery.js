$(function(){
      $('.nav-list-item1').click(function(){
        $(this).css('width','90px').css('height','77px').css('background-size','80px 67px').css('margin-left','25px').css('margin-top','2.5px').css('margin-right','2.5px');
      });  
      $('.nav-list-item2').click(function(){
        $(this).css('width','90px').css('height','77px').css('background-size','80px 67px').css('margin-left','17.5px').css('margin-top','2.5px').css('margin-right','2.5px');
      }); 
      $('.nav-list-item3').click(function(){
        $(this).css('width','90px').css('height','77px').css('background-size','80px 67px').css('margin-left','17.5px').css('margin-top','2.5px').css('margin-right','2.5px');
      }); 
      $('.nav-list-item4').click(function(){
        $(this).css('width','90px').css('height','77px').css('background-size','80px 67px').css('margin-left','17.5px').css('margin-top','2.5px').css('margin-right','2.5px');
      }); 
      $('.nav-list-item5').click(function(){
        $(this).css('width','90px').css('height','77px').css('background-size','80px 67px').css('margin-left','17.5px').css('margin-top','2.5px').css('margin-right','2.5px');
      }); 
      $("#gotop").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },333);
      });
      $(window).scroll(function() {
        if ( $(this).scrollTop() > 300 ){
          $('#gotop').fadeIn(222);
        } else {
          $('#gotop').stop().fadeOut(222);
        }
        if ( $(this).scrollTop() > 300 ){
          $('.leavebutton').css('opacity','0.4').css('transition','.3s');
        } else {
          $('.leavebutton').css('opacity','1').css('transition','.3s');
        }
      }).scroll();
      
});