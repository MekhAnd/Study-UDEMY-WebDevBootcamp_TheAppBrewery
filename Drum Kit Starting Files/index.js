let btn = document.querySelectorAll(".drum");

for(let i = 0; i<btn.length; i++ ){
    btn[i].addEventListener("click", function (e){
        playAudio(this.innerHTML);
        buttonAnimation(this.innerHTML)
    }
)}
    
document.addEventListener("keydown", (e)=>{
   playAudio(e.key)
   buttonAnimation(e.key)
   
})
function playAudio (key){
    let audio;
        switch (key) {
            case 'w':
                audio = new Audio("sounds/tom-1.mp3");
                audio.play()    ;
                break;
            case 'a':
                audio = new Audio("sounds/tom-2.mp3");
                audio.play()    ;
                break;
            case 's':
                audio = new Audio("sounds/tom-3.mp3");
                audio.play()    ;
                break;
            case 'd':
                audio = new Audio("sounds/tom-4.mp3");
                audio.play()    ;
                break;
            case 'j':
                audio = new Audio("sounds/crash.mp3");
                audio.play()    ;
                break;
            case 'k':
                audio = new Audio("sounds/kick-bass.mp3");
                audio.play()    ;
                break;
            case 'l':
                audio = new Audio("sounds/snare.mp3");
                audio.play()    ;
                break;
            
            default:
                break;
        }    
}

function buttonAnimation(key){
    let pressedButton = document.querySelector("."+key);
    pressedButton.classList.toggle("pressed");
    setTimeout(() => {
        pressedButton.classList.remove("pressed");
    }, 100);
}
