"use strict"

$(".fa-bars, .fa-times").click(()=>{
    $(".fa-bars, .fa-times").toggleClass("fa-bars fa-times");
    $(".slide-menu, .show-menu").toggleClass("show-menu slide-menu");

})

$(".btn02").click(()=>{
    $(".ul-list02, .ul-list002").toggleClass("ul-list02 ul-list002");
    $(".fas02").toggleClass("fa-chevron-up fa-chevron-down");

})

$(".btn01").click(()=>{
    $(".ul-list01, .ul-list001").toggleClass("ul-list01 ul-list001");
    $(".fas01").toggleClass("fa-chevron-up fa-chevron-down");
    
})

$(".btn03").click(()=>{
    $(".ul-list03, .ul-list003").toggleClass("ul-list03 ul-list003");
    $(".fas03").toggleClass("fa-chevron-up fa-chevron-down");
    

})

$(".pro-btn").click(()=>{
    $(".sub-menu-1").toggle();
    $(".pro-down").toggleClass("fa-angle-down  fa-angle-up")
})

$(".com-btn").click(()=>{
    $(".sub-menu-2").toggle();
    $(".com-down").toggleClass("fa-angle-down  fa-angle-up")
})
$(".con-btn").click(()=>{
    $(".sub-menu-3").toggle();
    $(".con-down").toggleClass("fa-angle-down  fa-angle-up")
})
// <i class="fas fa-chevron-up"></i>
// <i class="fas fa-times"></i>
{/* <i class="fas fa-angle-up"></i> */}