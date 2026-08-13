// pegar o elemento e clonar 
const cloneSlide = document.querySelector('.logos-slide').cloneNode(true);

// colocar o elemento clonado dentro do container 
document.querySelector('.logos').appendChild(cloneSlide);


