function calcular() {
    const container_input = document.querySelector('.container__input');
    const container_resposta = document.querySelector('.container__resposta');
    const resposta = document.getElementById('resposta');
    const resposta2 = document.getElementById('resposta2');
    
    var sal = document.getElementById('inp-1').value;
    var salario = Number(sal);
    
    var fgts = salario * 0.08;
    var anual = fgts * 12;
    
    container_input.classList.toggle('open');
    container_resposta.classList.toggle('open');
    
    resposta.textContent = "FGTS mensal: R$" + fgts.toFixed(2);
    resposta2.textContent = "FGTS anual: R$" + anual.toFixed(2);

    document.getElementById('inp-1').value = '';
}