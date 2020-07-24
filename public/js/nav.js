export function nav() {
  $("#desktop-hamburger, #mobile-hamburger").click(function () {
    $("body").toggleClass("open-nav");
  });
  $("#btn2-search, button[data-target='#voucherDetail']").click(function () {
    $("body").removeClass("open-nav");
  });
  $(".nav-back span").click(function () {
    $(".subMenu").removeClass("openSub");
  });
  $(".parent a[data-related='title_1']").click(function () {
    $("#categories").addClass("openSub");
    return false;
  });
}
