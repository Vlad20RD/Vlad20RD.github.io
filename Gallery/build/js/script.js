$(function() {
    $("[data-fancybox]").fancybox({
        loop: true,
        infobar: false,
        thumbs: false,
        slideShow: false
    });
});



document.body.onload = function(){
    setTimeout(function () {
        var preloader = document.getElementById('page-preloader');
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    }, 0);
};
