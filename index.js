var nosofbuttons = document.querySelectorAll(".drum").length;
console.log(nosofbuttons);

//LOOP FOR TO APPLY "HELLO FOR ALL BUTTONS"/ NOW TO GET SOUND
for(var i=0 ; i<nosofbuttons ; i++){
document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
   
    var buttonInnerhtml =this.innerHTML;
    // console.log(buttonInnerhtml);

    makeSound(buttonInnerhtml);

    buttonAnimation(buttonInnerhtml);
 });
}

document.addEventListener("keypress",function(event){
    console.log(event.key);
    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {

        case "w":
            var tom1 =new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        
        case "a":
            var tom2 =new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;  
            
        case "s":
            var tom3 =new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;    
         
        case "d":
            var tom4 =new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
            
        case "j":
            var snare =new Audio('sounds/snare.mp3');
            snare.play();
            break;  
                
        case "k":
            var crash =new Audio('sounds/crash.mp3');
            crash.play();
            break;   
         
        case "l":
            var kickbass =new Audio('sounds/kick-bass.mp3');
            kickbass.play();
            break;     
    
        default: console.log(buttoninnerhtml);
            break;
    }
}

function buttonAnimation(currentkey){
   
  var activeButton= document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
      activeButton.classList.remove("pressed");
  },100 );
}


//FUNCTION TO SAY HELLO WHEN CLICK
// function handleClick(){
//    var audio =new audio('sounds/tom-1.mp3');
//    audio.play();
// };


