function gerar() {
    const container_input = document.querySelector('.container__input');
    const container_resposta = document.querySelector('.container__resposta');
    const resposta = document.getElementById('resposta');

    var noivo = document.getElementById('noivo').value;
    var noiva = document.getElementById('noiva').value;
    var convidado = document.getElementById('convidado').value;
    var data = document.getElementById('data').value;
    var horario = document.getElementById('horario').value;

    container_input.classList.toggle('open');
    container_resposta.classList.toggle('open');


    resposta.innerHTML = "Caro(a) " + convidado + "!<br><br>Você está convidado(a) para o casamento de " + noivo + " e " + noiva + ", a ser realizado no dia " + data + ", às " + horario + " horas.<br><br>Contamos com a sua presença!<br><br>Atenciosamente,<br>os(as) noivos(as)";

    document.getElementById('noivo').value = '';
    document.getElementById('noiva').value = '';
    document.getElementById('convidado').value = '';
    document.getElementById('data').value = '';
    document.getElementById('horario').value = '';
}