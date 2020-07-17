/*jslint browser: true*/
/* Nav */
$(document).ready(function(){
    $("#desktop-hamburger, #mobile-hamburger").click(function(){
        $("body").toggleClass("open-nav");
    });
    $("#btn2-search, button[data-target='#voucherDetail']").click(function(){
        $("body").removeClass("open-nav");
    });
    $(".nav-back span").click(function(){
        $(".subMenu").removeClass("openSub");
    });
    $(".parent a[data-related='title_1']").click(function(){
        $("#categories").addClass("openSub");
         return false;
    });
});

$(function() {
 // $(".define-quantity").append('<span class="inc button">+</span><span class="dec button">-</span>');
  $(".button").on("click", function() {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
       // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
        } else {
        newVal = 0;
      }
      }
    $button.parent().find("input").val(newVal);
  });
});
    
function moveDiv() {
    if ($(window).width() < 991) {
        $(".topMenuLeft").appendTo("#mobileNav");
    } else {
        $(".topMenuLeft").appendTo("#desktopNav");
    }
}
moveDiv();
$(window).resize(moveDiv);

function moveDivSearch() {
    if ($(window).width() < 768) {
        $(".SearchBtnA").appendTo("#MobileSearch");
    } else {
        $(".SearchBtnA").appendTo("#desktopSearch");
    }
}
moveDivSearch();
$(window).resize(moveDivSearch);


if ($(window).width() < 768) {
$('.backToTop').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 500);
	return false;
});

$(".collepsMobileOne h4").click(function(){
    $(".collepsMobileOne").toggleClass("open");
    $(".collepsMobileTwo").removeClass("open");
    $(".collepsMobileThree").removeClass("open");
    $(".collepsMobileFour").removeClass("open");
    $(".collepsMobileFive").removeClass("open");
    $(".collepsMobileSix").removeClass("open");
    $(".collepsMobileOne ul").slideToggle();
    $(".collepsMobileTwo ul").slideUp();
    $(".collepsMobileThree ul").slideUp();
    $(".collepsMobileFour ul").slideUp();
    $(".collepsMobileFive ul").slideUp();
    $(".collepsMobileSix ul").slideUp();
});

$(".collepsMobileTwo h4").click(function(){
    $(".collepsMobileOne").removeClass("open");
    $(".collepsMobileTwo").toggleClass("open");
    $(".collepsMobileThree").removeClass("open");
    $(".collepsMobileFour").removeClass("open");
    $(".collepsMobileFive").removeClass("open");
    $(".collepsMobileSix").removeClass("open");
    $(".collepsMobileOne ul").slideUp();
    $(".collepsMobileTwo ul").slideToggle();
    $(".collepsMobileThree ul").slideUp();
    $(".collepsMobileFour ul").slideUp();
    $(".collepsMobileFive ul").slideUp();
    $(".collepsMobileSix ul").slideUp();
});

$(".collepsMobileThree h4").click(function(){
    $(".collepsMobileOne").removeClass("open");
    $(".collepsMobileTwo").removeClass("open");
    $(".collepsMobileThree").toggleClass("open");
    $(".collepsMobileFour").removeClass("open");
    $(".collepsMobileFive").removeClass("open");
    $(".collepsMobileSix").removeClass("open");
    $(".collepsMobileOne ul").slideUp();
    $(".collepsMobileTwo ul").slideUp();
    $(".collepsMobileThree ul").slideToggle();
    $(".collepsMobileFour ul").slideUp();
    $(".collepsMobileFive ul").slideUp();
    $(".collepsMobileSix ul").slideUp();
});

$(".collepsMobileFour h4").click(function(){
    $(".collepsMobileOne").removeClass("open");
    $(".collepsMobileTwo").removeClass("open");
    $(".collepsMobileThree").removeClass("open");
    $(".collepsMobileFour").toggleClass("open");
    $(".collepsMobileFive").removeClass("open");
    $(".collepsMobileSix").removeClass("open");
    $(".collepsMobileOne ul").slideUp();
    $(".collepsMobileTwo ul").slideUp();
    $(".collepsMobileThree ul").slideUp();
    $(".collepsMobileFour ul").slideToggle();
    $(".collepsMobileFive ul").slideUp();
    $(".collepsMobileSix ul").slideUp();
});

$(".collepsMobileFive h4").click(function(){
    $(".collepsMobileOne").removeClass("open");
    $(".collepsMobileTwo").removeClass("open");
    $(".collepsMobileThree").removeClass("open");
    $(".collepsMobileFour").removeClass("open");
    $(".collepsMobileFive").toggleClass("open");
    $(".collepsMobileSix").removeClass("open");
    $(".collepsMobileOne ul").slideUp();
    $(".collepsMobileTwo ul").slideUp();
    $(".collepsMobileThree ul").slideUp();
    $(".collepsMobileFour ul").slideUp();
    $(".collepsMobileFive ul").slideToggle();
    $(".collepsMobileSix ul").slideUp();
});

$(".collepsMobileSix h4").click(function(){
    $(".collepsMobileOne").removeClass("open");
    $(".collepsMobileTwo").removeClass("open");
    $(".collepsMobileThree").removeClass("open");
    $(".collepsMobileFour").removeClass("open");
    $(".collepsMobileFive").removeClass("open");
    $(".collepsMobileSix").toggleClass("open");
    $(".collepsMobileOne ul").slideUp();
    $(".collepsMobileTwo ul").slideUp();
    $(".collepsMobileThree ul").slideUp();
    $(".collepsMobileFour ul").slideUp();
    $(".collepsMobileFive ul").slideUp();
    $(".collepsMobileSix ul").slideToggle();
});
}