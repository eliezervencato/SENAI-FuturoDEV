function calcular() {
    const container_input = document.querySelector('.container__input');
    const container_resposta = document.querySelector('.container__resposta');
    const resposta = document.getElementById('resposta');
    
    var n1 = document.getElementById('inp-1').value;
    var nota1 = Number(n1);
    var n2 = document.getElementById('inp-2').value;
    var nota2 = Number(n2);
    var n3 = document.getElementById('inp-3').value;
    var nota3 = Number(n3);
    
    var media = (nota1 + nota2 + nota3)/3;

    container_input.classList.toggle('open');
    container_resposta.classList.toggle('open');
    
    if(media < 7){
        resposta.textContent = "Em recuperação: " + media.toFixed(2);
    } else {
        resposta.classList.toggle('aprovado');
        resposta.textContent = "Aprovado: " + media.toFixed(2);
    }
}
