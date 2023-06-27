var numberOfButtons = document.querySelectorAll(".drum").length;

// this code is for pressing over mouse(clicking)
for (var i=0; i< numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

// this code is for pressing button over keyboard
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


// this function is common to both mouse click and keyboard press to make sound
function makeSound(key){
    switch(key){
        case 'w':
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
             break;
        case 'j':
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        }
}

// this function is common to both mouse click and keyboard press to make button animation
function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey); // querySelector(".w"); if w key is pressed
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

    
}