var cajaTarjeta = document.getElementById('tarjeta');
var tarjetaBack = document.getElementById('cardBack');
var tarjetaFront = document.getElementById('cardFront');

tarjetaBack.addEventListener('click', vueltaUno);
tarjetaFront.addEventListener('click', vueltaDos); 

function vueltaDos() {
    tarjeta.onclick = () => {
        tarjetaFront.style.transform = 'rotateX(180deg)';
        tarjetaBack.style.transform = 'rotateX(0deg)';
        tarjetaFront.style.backfaceVisibility = 'hidden';
        
}
}

function vueltaUno() {
    tarjeta.onclick = () => {
        tarjetaBack.style.transform = 'rotateX(180deg)';
        tarjetaFront.style.transform = 'rotateX(0deg)';
        
    }
}




