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
$('.more-info').on('click',function(){
    var curbd = $(this).parent().next('.vip-item-bd')
    console.log(curbd)
    curbd.toggleClass('show')
})