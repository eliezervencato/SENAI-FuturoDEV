const tarefa = document.getElementById('tarefa');
const btnAdd = document.getElementById('btnAdd');
const lista = document.getElementById('lista');

let listaControle = [];


function removerItem(itemRemover) {
    const confirmar = confirm('Tem certeza que deseja excluir?');

    if(confirmar){
        const novaListaControle = listaControle.filter((itemLista) => {
            return itemLista != itemRemover;
        });
    
        listaControle = novaListaControle;
        atualizaTela();
    }
}

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
    let contagem = 0;
    listaControle.forEach((item) => {
        const novoItem = criaElementoItem(item);
        lista.appendChild(novoItem);
        contagem++;        
});
    const contador = document.getElementById('contador');
    contador.innerHTML = contagem;
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