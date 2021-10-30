



$(document).ready(function(){
  $('[data-submit]').on('click', function(e){
      e.preventDefault();
    $(this).parent('form').submit();
  })
  $.validator.addMethod(
          "regex",
          function(value, element, regexp) {
              var re = new RegExp(regexp);
              return this.optional(element) || re.test(value);
          },
          "Please check your input."
      );
  function valEl(el){
     
          el.validate({
        rules:{
          tel:{
            required:true,
            regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
          },
          name:{
            required:true
          },
          email:{
            required:true,
            email:true
          }
        },
          messages:{
            tel:{
                required:'Поле обязательно для заполнения',
                regex:'Телефон может содержать символы + - ()'
            },
            name:{
                required:'Поле обязательно для заполнения',
            },
            email:{
              required:'Поле обязательно для заполнения', 
              email:'Неверный формат E-mail'
            }
        },            
        submitHandler: function (form) {
          $('#loader').fadeIn();
          var $form = $(form);
          var $formId = $(form).attr('id');
          switch($formId){
            case'goToNewPage':
              $.ajax({
                    type: 'POST',
                    url: $form.attr('action'),
                    data: $form.serialize(),
                  })
                  .always(function (response) {  
                      //ссылка на страницу "спасибо" - редирект
                      location.href='https://wayup.in/lm/landing-page-marathon/success';
                      //отправка целей в Я.Метрику и Google Analytics
                      ga('send', 'event', 'masterklass7', 'register');
          yaCounter27714603.reachGoal('lm17lead');
              });
          break;        
          case'popupResult':
            $.ajax({
                  type: 'POST',
                  url: $form.attr('action'),
                  data: $form.serialize(),
                })
                .always(function (response) {                    
                setTimeout(function (){
                 $('#loader').fadeOut();
                },800);
                setTimeout(function (){
                  $('#overlay').fadeIn();
                  // $('form').fadeOut();
                  $form.trigger('reset');
                  //строки для остлеживания целей в Я.Метрике и Google Analytics
                },1100);
                $('#overlay').on('click', function(e) {
        $('#overlay').fadeOut();
    });
                    
            });
        break;          
        }       
return false; 
    }                           
  })
        }                        
     
              $('.js-form').each(function() {
                valEl($(this)); 
              });
    $('[data-scroll]').on('click', function(){
      $('html, body').animate({
            scrollTop: $( $.attr(this, 'data-scroll') ).offset().top
        }, 2000);
        event.preventDefault();
    })             
   });

































// $(document).ready(function(){
//     $('section[data-type="background"]').each(function(){
//         var $bgobj = $(this); // создаем объект
//         $(window).scroll(function() {
//             var yPos = -($window.scrollTop() / $bgobj.data('speed')); // вычисляем коэффициент 
//             // Присваиваем значение background-position
//             var coords = 'center '+ yPos + 'px';
//             // Создаем эффект Parallax Scrolling
//             $bgobj.css({ backgroundPosition: coords });
//         });
//     });
// });

// $('.parallax-window').parallax({imageSrc: '../img/main-bg.jpg'});

// $(document).ready(function(){
// 	// Кешируем объект окна
// 	$window = $(window);
                
//    $('[data-type="background"]').each(function(){
//      var $bgobj = $(this); // Назначаем объект
                    
//       $(window).scroll(function() {
                    
// 		// Прокручиваем фон со скоростью var.
// 		// Значение yPos отрицательное, так как прокручивание осуществляется вверх!
// 		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		
// 		// Размещаем все вместе в конечной точке
// 		var coords = '50% '+ yPos + 'px';

// 		// Смещаем фон
// 		$bgobj.css({ backgroundPosition: coords });
		
// 	}); 

//  });	

// }); 

// плавная прокрутка



$('a[href^="#"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 2000, 'swing', function () {
 window.location.hash = target;
 });
 });



// слайдер

$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  // centerMode:true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1114,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// модальное окно

$(function(){
  $('.act').click(function (){
 
    $('#exampleModal').arcticmodal();
  });
});

//   $('button.popap').click(function() {
//     var parent = $(this).attr('data-parent');
//     var modal = $(this).attr('data-target')
//     $(modal).find('input[name=target]').val(parent);
//   })
// })

// mini сайдер
 $('.single-item').slick({
  dots: true,
 });



// гамбургер
$(document).ready(function(){
$(".menu_hidden").click(function(){
  $("#menu_hidden").toggleClass("visi");
    });
});
// $(document).ready(function(){
// $(".menu_hidden").click(function(){
//   $("#menu_hidden").toggleClass("muve");
//     });
// });



// прячет меню на больше 992


$(document).ready(function() {
 
  $(window).resize(function(){
    var windowWidth = $(window).width();
    if(windowWidth < 992) {
       $("#menu_hidden").removeClass("visi");
    }
  });
});

// меню

// форма
// $(document).ready(function(){
// $(".close-reveal-modal").click(function(){
//   $(".reveal-modal").addClass("closeer");
//     });
// });

// $(document).ready(function(){
// $(".big-link").click(function(){
//   $(".reveal-modal").removeClass("closeer");
//     });
// });
// $(document).ready(function(){
// $(".order").click(function(){
//   $(".reveal-modal").fadeIn();
//     });
// });



// $(function(){
//   $('.arct').click(function(){
//     $('#exampleModal').arcticmodal();
    
//   });
// });


$(".js-modal-btn").modalVideo();


fancybox





                    $(document).ready(function() {
                        $(".popup").fancybox();
                    });
            