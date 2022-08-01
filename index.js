// CUSTOM CODE

document.querySelector("h1").addEventListener("click", function () {
  var drumTitle=this.textContent;
  makeSound(drumTitle);

})


// MOUSE KEYS
$("button").click(function() {
  var mouseClick=$(this).text();
  makeSound(mouseClick);
  animationKey(mouseClick);

})


// for (var i=0;i<document.querySelectorAll(".drum").length;i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     var buttonClick=this.innerHTML;
//
//     makeSound(buttonClick);
//     animationKey(buttonClick);
//   })};

// KEYBOARD KEYS

$(document).on("keypress",function(event){
  // document.addEventListener("keypress" , function (event) {
    makeSound(event.key);
    animationKey(event.key);

  })


function makeSound(key) {

      switch (key) {
        case "w":
        var tom1= new Audio("sounds/tom-1.mp3");
        tom1.play();
          break;

        case"a":
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case"s":
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case"d":
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

        case"j":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;

        case"k":
        var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

        case"l":
        var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;

        case "Drum 🥁 Kit":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;

        default:
        console.log(key);

      }};


// KEY ANIMATION
      function animationKey (currentKey) {
        var activeKey=$("."+currentKey);
        activeKey.addClass("pressed");

        setTimeout( function() {
          activeKey.removeClass("pressed");
        },100)
      }



//     switch (buttonClick) {
//       case "w":
//       var tom1= new Audio("sounds/tom-1.mp3");
//       tom1.play();
//         break;
//
//       case"a":
//       var tom2=new Audio("sounds/tom-2.mp3");
//       tom2.play();
//       break;
//
//       case"s":
//       var tom3=new Audio("sounds/tom-3.mp3");
//       tom3.play();
//       break;
//
//       case"d":
//       var tom4=new Audio("sounds/tom-4.mp3");
//       tom4.play();
//       break;
//
//       case"j":
//       var snare=new Audio("sounds/snare.mp3");
//       snare.play();
//       break;
//
//       case"k":
//       var kick=new Audio("sounds/kick-bass.mp3");
//       kick.play();
//       break;
//
//       case"l":
//       var crash=new Audio("sounds/crash.mp3");
//       crash.play();
//       break;
//
//       default:
//       console.log(buttonClick);
//
//     }
//
//   });
// }
//
// // KEYBOARD CLICKS
//
// document.addEventListener("keypress", function(event) {
// switch (event.key) {
//   case "w":
//   var tom1= new Audio("sounds/tom-1.mp3");
//   tom1.play();
//   break;
//
//   case"a":
//   var tom2=new Audio("sounds/tom-2.mp3");
//   tom2.play();
//   break;
//
//   case"s":
//   var tom3=new Audio("sounds/tom-3.mp3");
//   tom3.play();
//   break;
//
//   case"d":
//   var tom4=new Audio("sounds/tom-4.mp3");
//   tom4.play();
//   break;
//
//   case"j":
//   var snare=new Audio("sounds/snare.mp3");
//   snare.play();
//   break;
//
//   case"k":
//   var kick=new Audio("sounds/kick-bass.mp3");
//   kick.play();
//   break;
//
//   case"l":
//   var crash=new Audio("sounds/crash.mp3");
//   crash.play();
//   break;
//
//   default:
//   console.log(event.key);
//
//
// }






// function handleClick() {
//   var audioTom1= new Audio("sounds/tom-1.mp3");
//   audioTom1.play();
