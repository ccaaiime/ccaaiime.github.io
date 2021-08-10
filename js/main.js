$(window).on('scroll',function(){
    // console.log($('html').scrollTop())
    var top = $('html').scrollTop()
    if(top>50){
        $('.header-outer').addClass('scroll')
    } else{
        $('.header-outer').removeClass('scroll')
    }
})
$('.icon-menu').on('click',function(){
    $('.mobile-nav').toggleClass('d-none')
})