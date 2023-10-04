// Seleciona o elemento com a classe "mario" e o elemento com a classe "pipe"
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

// Define a função "jump" que será chamada quando uma tecla for pressionada
const jump = () => {
    // Adiciona a classe "jump" ao elemento "mario" para aplicar uma animação de pulo
    mario.classList.add('jump');

    // Remove a classe "jump" após 500 milissegundos (meio segundo) para encerrar a animação
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

// Configura um loop de intervalo que verifica a colisão entre "mario" e "pipe"
const loop = setInterval(() => {
    // Obtém a posição horizontal do elemento "pipe"
    const pipePosition = pipe.offsetLeft;

    // Obtém a posição vertical do elemento "mario" (remove "px" da string e converte para número)
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ' ');

    // Verifica se ocorreu uma colisão entre "mario" e "pipe"
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        // Desativa a animação e posicionamento de "pipe"
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        // Desativa a animação e posicionamento de "mario"
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        // Altera a imagem de "mario" para uma imagem de "game over" e ajusta seu tamanho e posição
        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        // Encerra o loop de intervalo
        clearInterval(loop);
    }
}, 10);

// Adiciona um ouvinte de eventos para a tecla pressionada, que chama a função "jump"
document.addEventListener('keydown', jump);
