const tarefa = document.getElementById('tarefa');
const btnAdd = document.getElementById('btnAdd');
const lista = document.getElementById('lista');

let listaControle = [];

function criaElementoItem(item){
    const novoElemento = document.createElement('li');
    const status = item.status ? 'checked' : '';
    
    novoElemento.innerHTML = `
        <input type="checkbox" class="checkbox" ${status} />
        <span>${item.tarefa}</span>
        <button class="excluir">
        <span class="material-symbols-outlined"> delete </span>
        </button>
    `;
    novoElemento.className = 'item';

    lista.appendChild(novoElemento);

    const botaoRemover = novoElemento.querySelector('button');
    botaoRemover.addEventListener('click', () => {
        removerItem(item);
    });

    return novoElemento;
}

function atualizaTela(){
    lista.innerHTML = '';

    listaControle.forEach((item) => {
        const novoItem = criaElementoItem(item);
        lista.appendChild(novoItem);        
});
}

atualizaTela();

function adicionaItemTela() {
    if (tarefa.value) {
        const novaTarefa = {
            tarefa: tarefa.value,
            status: false,
        };
        listaControle.push(novaTarefa);
        tarefa.value = '';
        atualizaTela();
    }
}

btnAdd.addEventListener('click', adicionaItemTela);
tarefa.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionaItemTela();
    }
});