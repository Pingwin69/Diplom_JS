$(document).ready(function() {

$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    nav : true,
    pagination : true,
    dots: true
});
$(".fancybox").fancybox();

});

var owl = $('.owl-carousel1');
owl.owlCarousel({
    loop:true,
    nav: false,
    margin:10,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },            
        960:{
            items:4
        },
        1200:{
            items:4
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

// кнопка для галереи
i = 0;
let viewBtn = document.querySelector('.viewBtn');
viewBtn.addEventListener('click', function(){
    if(i === 0){
    let hid = document.querySelectorAll('.hid');
    for(let f of hid){
        f.style.display = 'flex';
    }
    viewBtn.innerHTML = 'Hide All'
    i = i + 1;
}else if( i === 1){
    let hid = document.querySelectorAll('.hid');
    for(let f of hid){
        f.style.display = 'none';
    }
    viewBtn.innerHTML = 'View All';
    i = 0;
}    
})









