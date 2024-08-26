export const PlaySound  = (type) =>{
    const sounds = {
        success: new Audio('assets/sounds/success.mp3'),
        error: new Audio('assets/sounds/error.mp3'),
        warning: new Audio('assets/sounds/warning.mp3')
    }

    if(sounds[type]){
        sounds[type].play();
    }
}