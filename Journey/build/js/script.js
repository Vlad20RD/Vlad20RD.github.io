$(".burg").click(function(){$(".burg div span").toggleClass("close"),$(".menu").toggleClass("act")}),$(".burg").click(function(){$(".menu").addClass("sdvig")}),$(".burg_close").click(function(){$(".menu").removeClass("sdvig")}),$(document).ready(function(){$(window).on("scroll",function(){0<$(window).scrollTop()?$("header").addClass("add_fon"):$("header").removeClass("add_fon")}),0<$(window).scrollTop()&&$("header").addClass("add_fon")}),$(function(){$(".menu ul li a").each(function(){window.location.href==this.href&&$(this).addClass("active")})}),document.body.onload=function(){setTimeout(function(){var e=document.getElementById("page-preloader");e.classList.contains("done")||e.classList.add("done")},0)},$(document).ready(function(){$(".client_slider").slick({infinite:!0,pauseOnFocus:!1,pauseOnHover:!1,slidesToShow:1,slidesToScroll:1,arrow:!1,dots:!0,swipe:!0})}),$(document).ready(function(){$(".section2_input_select").click(function(){$(".list").toggleClass("active"),$(".section2_input_select").not(this).next().removeClass("active")}),$(document).mouseup(function(e){var o=$(".section2_input_select"),n=$(".section2_input_select div"),s=$(".section2_input_select div i");o.is(e.target)||n.is(e.target)||s.is(e.target)||$(".list").removeClass("active")})}),$(window).scroll(function(){var e=$(window).scrollTop();$(".blog_first").css({"background-position-y":e/2+"px"})});