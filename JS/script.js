const mario = document.querySelector('.mario')
const jump = () => {
    // add class jump
    mario.classList.add('jump');

    setTimeout(()=>{
        // remove class jump
        mario.classList.remove('jump');
        
    }, 500);
}


document.addEventListener('keydown',jump)