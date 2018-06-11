$('.gradient-animation').mousemove(function (event) {

    var msg = event.pageX + ', ' + event.pageY;

    var yPer = event.pageY / $(this).height();

    if (event.pageX < $(this).width() / 3) {
        var y1 = 81 + yPer * 30,
            y2 = 75 + yPer * 30,
            y3 = 72 + yPer * 30,
            y4 = 67 + yPer * 30,
            y5 = 64 + yPer * 30,
            y6 = 61 + yPer * 30,
            y7 = 45 + yPer * 30;
        if (yPer > 0.5) {
            if(y1<100){
                $('.img-container').css({ 'clip-path': 'polygon(47% 3%, 59% 15%, 70% 15%, 94% 0, 94% 33%, 91% 39%, 98% 45%, 98% 65%, 80% 73%, 69% 100%, 40% 100%, ' + 7 + '%' + y1 + '%,' + 5 + '%' + y2 + '%,' + 0 + '% ' + y3 + '%,' + 0 + '% ' + y4 + '%,' + 2 + '% ' + y5 + '%,' + 1 + '% ' + y6 + '%,' + 1 + '% ' + y7 + '%' + ')' })
            }
            console.log("yPer>0.5" + yPer);
        } else {
            var y1 = 81 - 6/yPer,
                y2 = 75 - 6/yPer,
                y3 = 72 - 6/yPer,
                y4 = 67 - 6/yPer,
                y5 = 64 - 6/yPer,
                y6 = 61 - 6/yPer,
                y7 = 45 - 6/yPer;
                if(y7>0){
                    $('.img-container').css({ 'clip-path': 'polygon(47% 3%, 59% 15%, 70% 15%, 94% 0, 94% 33%, 91% 39%, 98% 45%, 98% 65%, 80% 73%, 69% 100%, 40% 100%, ' + 7 + '%' + y1 + '%,' + 5 + '%' + y2 + '%,' + 0 + '% ' + y3 + '%,' + 0 + '% ' + y4 + '%,' + 2 + '% ' + y5 + '%,' + 1 + '% ' + y6 + '%,' + 1 + '% ' + y7 + '%' + ')' })
                }
            console.log("else" + y1+" "+ y2+" "+ y3+" "+ y4+" "+ y5+" "+ y6+" "+ y7+" ");
        }
        // $('.img-container').css('clip-path', 'polygon(47% 3%, 59% 15%, 70% 15%, 94% 0, 94% 33%, 91% 39%, 98% 45%, 98% 65%, 80% 73%, 69% 100%, 40% 100%,'+7+'% '+81+yPer+'%,'+5+'% '+75+yPer+'%,'+')');
        // $('.img-container').css({'clip-path':'polygon( '+5+'%'+75+yPer+'%,'+0+'%'+72+yPer+'%,'+0+'%'+67+yPer+'%,'+2+'%'+64+yPer+'%,'+1+'%'+61+yPer+'%,'+1+'%'+45+yPer+'%,'+')'})
    }

});