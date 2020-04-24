/*______________________________меню______________________________*/

$(document).ready(function () {
    $("body header .menu .item").click(function(){
        $("body header .menu .item").toggleClass("active");
        $("body header .menu .item").toggleClass("transit");
    });
});


/*________________________якорные ссылки____________________________*/

$(document).ready(function(){
    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});



/*______________________________слайдеры______________________________*/

$(document).ready(function(){
    $("#slider1").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 8000,
        smartSpeed: 700,
        autoplayHoverPause: true,
        navText : ["<img src='build/img/icons/arrow_white.png'>","<img src='build/img/icons/arrow_white.png'>"],
        touchDrag: false,
        mouseDrag: false
    });
});

$(document).ready(function(){
    $("#slider3").owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
        smartSpeed: 700,
        navText : ["<img src='build/img/icons/arrow_white.png'>","<img src='build/img/icons/arrow_white.png'>"],
        touchDrag: false,
        mouseDrag: false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:4
            },
            1200:{
                items:4
            },
            1650:{
                items:4
            }
        }
    });
});

$(document).ready(function(){
    $(".participants_slider").slick({
        infinite: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
        dots: false,
        swipe: false
    });
});

/*_________________________плеер___________________________*/
/*
$(document).ready(function(){

    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [
        {
            title:"Cro Magnon Man",
            mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
            oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
        },
        {
            title:"Your Face",
            mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
            oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg"
        },
        {
            title:"Cyber Sonnet",
            mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
            oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg"
        }
    ], {
        swfPath: "../../dist/jplayer",
        supplied: "oga, mp3",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true
    });
});

$(document).ready(function(){

    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_2",
        cssSelectorAncestor: "#jp_container_2"
    }, [
        {
            title:"Tempered Song",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg"
        },
        {
            title:"Hidden",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        },
        {
            title:"Lentement",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg"
        }
    ], {
        swfPath: "../../dist/jplayer",
        supplied: "oga, mp3",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true
    });
});

$(document).ready(function(){

    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_3",
        cssSelectorAncestor: "#jp_container_3"
    }, [
        {
            title:"Cro Magnon Man",
            mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
            oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
        },
        {
            title:"Your Face",
            mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
            oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg"
        },
        {
            title:"Cyber Sonnet",
            mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
            oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg"
        },
        {
            title:"Tempered Song",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg"
        },
        {
            title:"Hidden",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        },
        {
            title:"Lentement",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg"
        },
        {
            title:"Lismore",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg"
        },
        {
            title:"The Separation",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-05-The-separation.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-05-The-separation.ogg"
        },
        {
            title:"Beside Me",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-06-Beside-me.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-06-Beside-me.ogg"
        },
        {
            title:"Bubble",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
        },
        {
            title:"Stirring of a Fool",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-08-Stirring-of-a-fool.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg"
        },
        {
            title:"Partir",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-09-Partir.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-09-Partir.ogg"
        },
        {
            title:"Thin Ice",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-10-Thin-ice.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-10-Thin-ice.ogg"
        }
    ], {
        swfPath: "../../dist/jplayer",
        supplied: "oga, mp3",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true
    });
});

*/
/*
$(document).ready(function(){
    $(".jp-audio .jp-type-playlist .jp-gui .jp-controls .jp-play").click(function(){
        $('.jp-audio .jp-type-playlist .jp-gui .jp-controls .jp-play').toggleClass('stop');
    });
});
*/

$(document).ready(function(){

    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Stirring of a fool",
                m4a: "http://www.jplayer.org/audio/m4a/Miaow-08-Stirring-of-a-fool.m4a",
                oga: "http://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg"
            });
        },
        play: function() { // To avoid multiple jPlayers playing together.
            $(this).jPlayer("pauseOthers");
        },
        swfPath: "../../js",
        supplied: "m4a, oga",
        wmode: "window",
        globalVolume: true,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true
    });

    $("#jquery_jplayer_3").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Bubble",
                m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
                oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
            });
        },
        play: function() { // To avoid multiple jPlayers playing together.
            $(this).jPlayer("pauseOthers");
        },
        swfPath: "../../js",
        supplied: "m4a, oga",
        cssSelectorAncestor: "#jp_container_3",
        wmode: "window",
        globalVolume: true,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true
    });

    $("#jquery_jplayer_4").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Hidden",
                m4a: "http://www.jplayer.org/audio/m4a/Miaow-02-Hidden.m4a",
                oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
            });
        },
        play: function() { // To avoid multiple jPlayers playing together.
            $(this).jPlayer("pauseOthers");
        },
        swfPath: "../../js",
        supplied: "m4a, oga",
        cssSelectorAncestor: "#jp_container_4",
        wmode: "window",
        globalVolume: true,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true
    });
});




/*________________________________counter________________________________*/

for ( let i of document.querySelectorAll(".number_stat") ) {

    let numberTop = i.getBoundingClientRect().top,
        start = +i.innerHTML,
        end = +i.dataset.max;

    window.addEventListener('scroll', function onScroll() {
        if(window.pageYOffset > numberTop - window.innerHeight / 2) {
            this.removeEventListener('scroll', onScroll);
            let interval = this.setInterval(function() {
                i.innerHTML = ++start;
                if(start == end) {
                    clearInterval(interval);
                }
            }, 25);
        }
    });
}



/*__________________________________окна____________________________________*/


$(document).ready(function () {

    $('.w1').bind('click', function(){
        $('.modal').removeClass("op");
        $('#wind1').addClass("op");
    });

    $('.w3').bind('click', function(){
        $('.modal').removeClass("op");
        $('#wind3').addClass("op");
    });

    $('.w4').bind('click', function(){
        $('.modal').removeClass("op");
        $('#wind4').addClass("op");
    });

    $('.w5').bind('click', function(){
        $('.modal').removeClass("op");
        $('#wind5').addClass("op");
    });

    $('.w6').bind('click', function(){
        $('.modal').removeClass("op");
        $('#wind6').addClass("op");
    });

    $(function () {
        $(".close_modal").click(function(){
            $("body .modal").removeClass("op");
        });
    });

});



/*________________WOW______________*/

new WOW().init();


/*______________________________прелоадер______________________________*/

$(window).on('load', setTimeout(function () {
    $('.loader').fadeOut();
    $('.preloader').addClass('done');
    $('body').css({'overflow':'visible'});
}, 1000));
