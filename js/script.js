$(window).scroll(function(){

    var wscroll = $(this).scrollTop();
  
      
    $('.jumbotron img').css({
        'transform': 'translate(0px, '+wscroll/4 +'%)'
    });
    
    $('.jumbotron h1').css({
        'transform': 'translate(0px, '+wscroll/2+'%)'
    });
  
    $('.jumbotron p').css({
        'transform': 'translate(0px, '+wscroll/1.5+'%)'
    });


    // PORTOVOLIO

//if (wscroll > $ ('.projects').offset().top -200){
    
//     $('.projects .kartu ').each(function(i){
//         setTimeout(function(){
//             $('.projects .kartu' ).eq(i).addClass('muncul');
//         },300 * (i+1));
//     })
// }


if(wscroll > $('.projects').offset().top -250){
    $('.projects .card').each(function(i){
        setTimeout(function(){
           $('.projects .card').eq(i).addClass('muncul');
        },300 * (i+1));
    });
}


});

// about    
$(window).on('load', function(){
    $('.pkiri').addClass('pmuncul');
    $('.pkanan').addClass('pmuncul');
});


