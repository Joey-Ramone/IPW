
const c = document.getElementById('calcular');


function imc(){

    const n = document.getElementById('nome').value;
    const p = document.getElementById('peso').value;
    const a = document.getElementById('altura').value;
    const r = document.getElementById('resultado');

    const rimc =  (p / (a * a)).toFixed(1);// Menos casas decimais.

    if(rimc < 18.5){
        r.textContent =`${n} seu IMC é ${rimc}, você está abaixo do peso.`;
    }
    else if(rimc  >= 18.5 ){
        r.textContent = `${n} seu IMC é ${rimc}, você está no peso ideal.`;
    }
    else if(rimc  >= 25.9 ){
        r.textContent = `${n} seu IMC é ${rimc}, está acima do peso.`;
    }
    else if(rimc >= 30.0){
        r.textContent = `${n} seu IMC é ${rimc}, você está obeso.`;
    }
}

c.addEventListener('click', imc);