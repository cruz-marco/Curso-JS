class Inviter {
    constructor(nome, convidados = []){
        this.nome = nome;
        this.convidados = convidados;
    };
};

const database = [
    new Inviter('marcelo', ['marco', 'ezio']),
    new Inviter('antonio', ['dulce', 'jacó'])
]

function verificaEntrada(){
    const convidado = String(document.getElementById('nome').value).toLowerCase();
    const inviter = String(document.getElementById('inviter').value).toLowerCase();
        
    const invSelected = database.filter((data) => data.nome == inviter)[0]
    if (invSelected.convidados.includes(convidado)){
        document.getElementById('permissao').innerText = 'Entrada liberada.';
    } else {
        document.getElementById('permissao').innerText = 'Entrada proibida.';
    };
    
}
