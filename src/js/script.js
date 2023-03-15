const button = document.querySelector('.submit-button');
const input = document.querySelector('.input');
const text = document.querySelector('p');

function GetRandomCoinFlip(){
    let Choice = Math.floor(Math.random() * 2);

    return Choice;
}


button.addEventListener('click', () => {
    let value = input.value;
    let random = GetRandomCoinFlip();
    
    
    text.innerHTML = random == 1 ? `O destino decidiu. <span>${value}</span> foi escolhido pela seleção natural e está morto.` 
    : `O destino decidiu. <span>${value}</span> foi poupado pela seleção natural. `;
    text.style.color = random == 0 ? '#17A1DC' : null;
})


