 function clicou(){
        swal({
          title: '<h1 class="text-modal">WISH LIST</h1>',   
          html:
            'You can use <b>bold text</b>, ' +
            '<a href="//github.com">links</a> ' +
            'and other HTML tags',
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: true,
          confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Great!',
          confirmButtonAriaLabel: 'Thumbs up, great!',
          cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
          cancelButtonAriaLabel: 'Thumbs down',
        });
      }

      $(function(){
           $(function(){
          $(window).resize(function(){
       if ($(window).width() > 994) {
             $('.menu2').removeClass('oculto');
              $('.menu1').addClass('oculto');
        }
        if ($(window).width() < 994) {
            $('.menu1').removeClass('oculto');
            $('.menu2').addClass('oculto');
          }
          });
      });
      });
      $(function(){

        $(document).ready(function(){
          $('#collapsemenu').collapse('hide');

          if ($(window).width() > 994) {
              $('.menu2').removeClass('oculto');
              $('.menu1').addClass('oculto');


          }
          if ($(window).width() < 994) {
            $('.menu1').removeClass('oculto ');
            $('.menu2').addClass('oculto');
          }
          $(function(){
        $('.show').collapse('hide');
          $('.btn-card').click(function(){
            $(this).addClass('animated  tada').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
              $(this).removeClass('animated   tada');
            });        
          });
      });
        });
      
      });

      

       