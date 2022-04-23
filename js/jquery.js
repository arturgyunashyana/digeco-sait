$('.counter').counterUp({
    delay: 10,
    time: 2000
});

$(window).scroll(function(){
    let scrollTop = $(window).scrollTop()
    if(scrollTop > 200){
        $('nav').addClass('btnHover')
        $('nav').css({
            background: '#fff',
            boxShadow: '0 10px 15px -5px #ccc'
        })
        $('nav ul li a').css({
            color: '#282828',
            padding: '20px 0'
        })
        $('.logo img').attr('src', 'images/logo-dark.png')
        $('.nav-action-btn').css({
        	border:'1px solid blue',
        	color:'blue'
        })
        $('.search-icon i').css({
        	color:'#000'
        })
        $('#menuBar-icon').css({
            background:'#0000FF'
        })
        $('#menuBar-icon i').css({
            color:'#fFF'
        })
    }else{
        $('nav').removeClass('btnHover')
        $('nav').css({
            background: 'transparent',
            boxShadow: 'none'
        })
        $('nav ul li a').css({
            color: '#fff',
            padding: '50px 0'
        })
        $('.logo img').attr('src', 'images/logo-light.png')
        $('.nav-action-btn').css({
        	border:'1px solid #fff',
        	color:'#fff'
        })
        $('.search-icon i').css({
        	color:'#fff'
        })
        $('#menuBar-icon').css({
            background:'#fff'
        })
        $('#menuBar-icon i').css({
            color:'#000'
        })
    }
})



$(window).scroll(function(){
    let scrollTop = $(window).scrollTop()
    if(scrollTop > 600){
      $('#divscroll').css({
        visibility:'visible'
      })
    }else{
        $('#divscroll').css({
        visibility:'hidden'
      })
    }
})


$('#divscroll').on('click', function(){
    $("html, body").animate({scrollTop: 0}, 1000);
})


function ftop(){
$('html, body').animate({scrollTop:top},'30')}


let midle

$(document).ready(function(){
  midle = $('#h2').offset()  
})

$(".owl-carousel").owlCarousel({
    items: 2,
    autoplay: true,
    nav: true
});
