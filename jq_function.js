// // $(document).ready(function () {
// //   $("button").click(function () {
// //Tag Selector::::::::
// //   $("p").hide();
// //Id Selector:::::::::
// // $("#head").hide();
// //Class Selector::::::
// //   $(".head").hide();
// //universal Selector::::::
// //   $("*").hide();
// //this Selector referse to the button element
// //   $(this).hide();

// //to select the all same selector, we use the ":elementName"
// $(document).ready(function () {
//   $("button").click(function () {
//     $(":button").hide();
//   });
// });

// ATTACHING MULTIPLE EVENT TO SINGLE SELECTOR

// $(document).ready(function () {
//   $("p").on({
//     mouseenter: function () {
//       $(this).css("background-color", "yellow");
//     },
//     mouseleave: function () {
//       $(this).css("background-color", "blue");
//     },
//     mousedown: function () {
//       $(this).css("background-color", "red");
//     },
//   });
// });

// Hiding & Showing text with the mentioning speed

// $(document).ready(function () {
//   $("#hidden").click(function () {
//     $("p").hide(1000); // .hide(1000)--> giving duration to complete the action
//   });
//   $("#visible").click(function () {
//     $("p").show(1000);
//   });
// });

// Creating Toggle button the show & hide the text with every click

// $(document).ready(function () {
//   $("button").click(function () {
//     $("p").toggle(1000);
//   });
// });

// to create effect FadeIn

// $(document).ready(function () {
//   $("button").click(function () {
//     $("#div1").fadeIn();
//     $("#div2").fadeIn(1000);
//     $("#div3").fadeIn(2000);
//     $("#div4").fadeIn(3000);
//   });
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     $("#div4").fadeToggle(3000);
//     $("#div3").fadeToggle(2000);
//     $("#div2").fadeToggle(1000);
//     $("#div1").fadeToggle();
//   });
// });
