function gerar() {
    const container_input = document.querySelector('.container__input');
    const container_resposta = document.querySelector('.container__resposta');
    const resposta = document.getElementById('resposta');

    var nome = document.getElementById('nome').value;
    var inicio = document.getElementById('inicio').value;
    var termino = document.getElementById('termino').value;

    container_input.classList.toggle('open');
    container_resposta.classList.toggle('open');


    resposta.innerHTML= "Caro(a) responsável,<br><br> Gostaria de solicitar minhas férias.<br><br>Funcionário(a): "+nome+"<br>Data de início: "+inicio+"<br>Data de término: "+termino+"<br><br>Agradeço a atenção.<br><br>Atenciosamente, " + nome +".";

    document.getElementById('nome').value = '';
    document.getElementById('inicio').value = '';
    document.getElementById('termino').value = '';
}