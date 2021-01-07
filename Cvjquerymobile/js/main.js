$(document).ready(function (){
    var marginLeft = 0;

    setInterval( function (){
        marginLeft += 1;
        $("imganim").css({"margin-left": marginLeft + "px"});

    });

    setInterval(function (){
    $("#imganim").animate({
        marginLeft : '+=360px'

    });
},3000);

});


