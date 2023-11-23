function calcular() {
    var container = document.querySelector('.container__input');
    var resposta = document.querySelector('.container__resposta');
    
    var peso = document.getElementById('inp-peso').value;
    var distancia = document.getElementById('inp-distancia').value;
    
    var calculo = 6 * peso * distancia;

    var frete = calculo.toLocaleString('pt-br', {style: 'currency', currency:'BRL'});

    container.classList.toggle('open');
    resposta.classList.toggle('open');

    document.getElementById('resposta').textContent = "O valor do frete é " + frete;
}
