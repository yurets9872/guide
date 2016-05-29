
$(document).ready(function(){
    $('.search-btn').click(function(){
        $('.search-box').animate({
            height: '+=455px'
        });
        $('#close').show();
        $('.search-field').show();
        
    });
    
    $('#close').click(function(){
        $('.search-box').animate({
            height: '-=455px'
        }, function () {
            $('#close').hide();
            $('.search-field').hide();
        });       
    });
    
//     $('.lang').click(function(){
//            $('.lang-box').toggle();
//            $('.lang').css('background-color','#fff');
//            $('.lang-text').css('color','#000');
//         
////     },function(){
////            $('.lang-box').hide();
////            $('.lang').css('background-color','none');
////            $('.lang-text').css('color','#fff');
//        }); 
//    
//    });
});





