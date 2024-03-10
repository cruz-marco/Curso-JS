console.log('Quando eu era pequenino, eu tinha medo de urubu, cê tinha?');
let nome = 'Marco', idade = 35, altura = 176; 

console.log('Nome: ', nome,'\nAltura: ', altura,'\nIdade: ', idade);

// tipos primitivos
nome = 'Marco'; // String
idade = 35; // Numero Literal (podem ser decimais)
let aprovado = true; // Booleano (verdadeiro ou falso)
let sobrenome; // Undefined (sem valor) ou let sobrenome = undefined; (nada usual)
console.log(sobrenome);
let corSlecionada = null; //valor nulo. Usado para resetar valores.

// typeof() << Função que mostra o tipo de cada dado.
function printa_tipo(item){
    console.log('Tipo: ', typeof item);
};
let variaveis = [nome, idade, aprovado, sobrenome, corSlecionada];
variaveis.forEach(printa_tipo);


let pessoa = {
    nome: nome,
    idade: idade,
    status: aprovado,
    sobrenome: sobrenome,
    corSlecionada: corSlecionada
};

console.log(pessoa);
pessoa.sobrenome = 'Cruz';

console.log(pessoa);
console.log(pessoa.sobrenome);

function somaNumeros(num1, num2){
    return (num1 + num2);
};
let numero = somaNumeros(23,2);

console.log(numero);

// Operador Ternário
let pontos = 110;
let tipoCliente = pontos > 100 ? 'Vip' : 'Ralé';

console.log(tipoCliente);

/*
Op lógicos:

and => &&
or => ||
not => !
*/

/*
Switch Case
*/

let permissao; // comum, gerente e diretor

permissao = 'gerente';

switch (permissao){
    case 'comum':
        console.log('Você é um usuário comum');
        break;
    case 'gerente':
        console.log('Você é um gerente.');
        break;
    case 'diretor':
        console.log('Bem vindo P*** DAS GARÁXIAS!');
        break;
    default:
        console.log('Inválido')
};

/**
 * Loops
 * 
 * existem CINCO tipos de loop em javascript, sejam eles:
 * 
 * 1 - For
 *
 * 2 - While
 * 
 * 3 - Do While
 * 
 * 4 - For in
 * 
 * 5 - For of
 */

// FOR
for (let i =0; i < 5; i++){
    console.log('Boa Tarde!' + i);
};

for (let i =1; i <= 5; i += 2){
    console.log('Boa Tarde!' + i);
};

//WHILE
let j = 5 
while ( j >= 0 ){
    if (j % 2 !== 0){
        console.log('Printada bonita com while' + ' ' + j);
    };
    j -= 1
};

// Do While
let k = 0;
do {
    console.log('Printada com do While ' + k)
    k++;
} while (k <= 6);


//For In
let person = {
    nome: 'Marco',
    idade: 35
};

for (let chave in person){
    console.log(chave, ' ', pessoa[chave]);
};
console.log(pessoa['nome'])
pessoa['nome'] = 'Augusto';
console.log(pessoa['nome']);
console.log(pessoa.nome);

const cores = ['Azul', 'Vermelho', 'Verde'];

for (let indice in cores) {
    console.log(indice, ' ', cores[indice]);
};

//For of
for( let cor of cores){
    console.log(cor);
};

for(let data of Object.values(person)){
    console.log(data);
};


//miniproj 2
function retornaMaior (x, y){
    return (x > y ? x : y);
};

console.log(retornaMaior(200, 100), retornaMaior(5, 10), retornaMaior(0.1, 0.01));

// miniproj 3
function fizzBuzz(entrada){
    if (typeof entrada === 'number'){
        if (entrada % 3 === 0 && entrada % 5 === 0) {
            return 'FizzBuzz';
        } else if (entrada % 3 === 0){
            return 'Fizz';
        } else if (entrada % 5 === 0){
            return 'Buzz';
        };
        return entrada;
    };
    return 'NaN';
};

const testArray = [1, 3, 5, 15, 'xulamka'];

for (let item of testArray){
    console.log(fizzBuzz(item));
};


//miniproj 4
function medeVelocidade(entrada, max){
    if (entrada > max){
        let points = Math.floor((entrada - max) / 5);

        if (points > 12){
            return 'Carteira Suspensa.'
        };

        return points;
    };
    return 'ok';
};

const maxSpeed = 80;
//const speeds = [10, 45, 50.5, 80, 90, 95, 100, 150, 200];

for (let i = 75; i <= 150; i += 10){
    console.log(medeVelocidade(i, maxSpeed));
};

//exerc
function parImpar(num){
    let numbers = {};
    for (let i = num; i > 0; --i){
        numbers[i.toString()] = i % 2 === 0 ? 'PAR' : 'IMPAR';
    };
    return numbers;
};

console.log(parImpar(20));

//miniprojeto 5
function exibeString(objeto){
    let strProps = new Object();
    for (let prop in objeto){
        if (typeof objeto[prop] === 'string'){
            strProps[prop] = objeto[prop];
        };
    };
    return strProps;
};


console.log(exibeString(pessoa));

//miniprojeto 6
function somaMult3e5(limite){
    let sum = 0;
    for (let i = limite; i > 0; i--){
        if (i % 3 === 0 || i % 5 === 0){
            sum += i;
        };
    };
    return sum;
};

const mp6 = [2, 3, 5, 6, 10];
for (let num of mp6){
    console.log(somaMult3e5(num));
};

//miniprojeto 7

function calculaMedia(notas){
    const qtd = notas.length;
    let sum = 0;
    let mean;
    for (let nota of notas){
        sum += nota;
    };
    mean = sum / qtd;
    if (mean >= 0 && mean <= 59){
        return 'E';
    } else if (mean > 59 && mean <= 69){
        return 'D';
    } else if (mean > 69 && mean <= 79){
        return 'C';
    } else if (mean > 79 && mean <= 89){
        return 'B';
    } else if (mean > 89 && mean <= 100){
        return 'A';
    } else {
        return 'NaN';
    };
};

const grades = [75, 55, 90, 100, 90];

console.log(calculaMedia(grades));

//miniprojeto 8
function imprimeAsteriscos(qtd){
    let aster = '*';
    for (let i = 1; i <= qtd; i++){
        if (i > 1){
            aster = aster + '*';
            console.log(aster);
        } else {
            console.log(aster);
        };
        
    };
};

imprimeAsteriscos(10);

// miniprojeto 9
//console.log(Array.from({length: 21}, (x, i) => i).slice(1));
function listaPrimos(limite){
    const numbers = Array.from({length: limite + 1}, (x, i) => i).slice(1);
    let primos = new Array();

    for (let number of numbers){
        const listNumbers = Array.from({length: number+1}, (x, i) => i).slice(1);
        let perfDivs = [];
        for (let num of listNumbers) {
            if (number % num === 0){
                perfDivs.push(num);
            };
        };
        if (perfDivs.length === 2) {
            primos.push(number);
        };
    };
    
    return primos;
};

console.log(listaPrimos(23));


//factory functions
function cadastraPessoa(nome, idade, sexo){
    return {
        nome,
        idade,
        sexo,
        andar(){
            console.log(this.nome + ' está caminhando...')
        }
    };
};

const person1 = cadastraPessoa('Marco', 35, 'M')

console.log(person1)
person1.andar();

//creator functions

class Pessoa {
    constructor(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.andar = function () {
            console.log(this.nome + ' está caminhando...');
        };
    }
}

const person2 = new Pessoa('Marcelo', 28, 'M');

console.log(person2);
person2.andar();

/**
 * é perfeitamente possível criar e apagar atributos e métodos dos objetos 
 * no javascript, visto que estes são TOTALMENTE dinâmicos.
 */

person2.altura = 176; // insere mais um atributo
console.log(person2);

person2.falar = function(){
    console.log(this.nome + ' está conversando com alguém.');
}; // cria um novo método

person2.falar()
console.log(person2);

delete person2.sexo; //apaga um atributo mesmo criado com o construtor.
console.log(person2);

//clonando objetos
const person3 = Object.assign({
    //adicione novos métodos e atributos aqui.
    correr: function(){
        console.log(this.nome + ' está correndo');
    },
    altura: 176
}, person1);

console.log(person3);
const person4 = {...person2}; //operador spread.

console.log(person4);

/**
 * BIBLIOTECA MATH
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 * 
 * METODOS ÚTEIS DE STRINGS
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods
 * 
 */

//CodeWars
/**
 * function descendingOrder(n){
    //...
    const strNum = String(n);
    let numArray = [];
    for (let num of strNum){
      numArray.push(Number(num));
    };
    numArray = Number(numArray.sort().reverse().toString().replace(/,/g, ''));
    return numArray;
    
  };
 */

function descendingOrder(n){
    //...
    return Number(String(n).split(separator='').sort().reverse().toString().replace(/,/g, ''));
  };

console.log(descendingOrder(1021));


/**
 * Template Literals:
 * Forma mais limpa de se escrever uma string sem o uso poluído dos caracteres de escape.
 * 
 * segundo modelo a seguir:
 */

const mensagem = `Com este 'método', nós podemos digitar a string
exatamente como queremos que ela apareça.`;

console.log(mensagem);

//É compatível com interpolação.

console.log(`Boa tarde, ${person3.nome}.`)

//tipo date
const date1 = new Date();
const date2 = new Date('January 04 2024 08:20');
const date3 = new Date(2024, 0, 4, 8, 20); //OBS: os meses começam pelo zero. (jan = 0)m não aceita 0 no início do número.

console.log(`${date1}

${date2}

${date3}`)

//diversos getters e setters
console.log(`${date1.toString()}

${date1.toLocaleDateString()}
${date1.toISOString()}`);

//miniprojeto 10

class Endereco {
    constructor(logradouro, numero, cidade, cep){
        this.logradouro = logradouro;
        this.numero = numero;
        this.cidade = cidade;
        this.cep = cep;
        this.exibirEndereco = function(endereco = this){
            return `Rua ${endereco.logradouro}, Número ${endereco.numero},
            ${endereco.cidade} - ${endereco.cep}.`;
        };
    };
};

const address = new Endereco('Ubaldino do Amaral', 90, 'Rio de Janeiro', '20231-016');
const address2 = new Endereco('Ana Neri', 783, 'Rio de Janeiro', '00000-000');
const address3 = new Endereco('Ubaldino do Amaral', 90, 'Rio de Janeiro', '20231-016');

console.log(address.exibirEndereco());
console.log(address.exibirEndereco(address2));
console.log(Object.values(address3));

/**
 * Verifica se dois objetos quais sejam têm propriedades iguais.
 * @param {*} object1 
 * @param {*} object2 
 * @returns true/false
 */
function samePropertyObject(object1, object2){
    const keys1 = Object.keys(object1), keys2 = Object.keys(object2);
    const values1 = Object.values(object1), values2 = Object.values(object2);
    if (keys1.length === keys2.length){
        for (key in keys1) {
            if (keys1[key] !== keys2[key]){
                return false;
            };
            if (typeof values1[key] !== 'function'){
                if (values1[key] !== values2[key]){
                    console.log(values2[key], values1[key])
                    return false;                
                };
            };
        }
        return true;
    }
    
};

console.log(samePropertyObject(address, address3));

/**
 * Retorna se dois objetos quais sejam têm o mesmo endereço de memória
 * @param {*} object1 
 * @param {*} object2 
 * @returns true/false
 */
function sameLiteralObject(object1, object2){
    return object1 === object2;
}

console.log(sameLiteralObject(address, address),
sameLiteralObject(address, address3));
console.log(typeof Endereco)


function postagem(titulo, mensagem, autor, visualizacoes = 0,
     comentarios = [], live = true){
    return {
        titulo,
        mensagem,
        autor,
        visualizacoes,
        comentarios,
        live,
        comentar(autor, mensagem){
            comentarios.push({
                autor,
                mensagem
            })
        }
    }
}


//miniprojeto cansei de contar

class Cadeira{
    constructor(titulo, valor){
        this.titulo = titulo;
        this.valor = valor;
        this.toString = function(){
            return `${this.titulo} - ${this.valor}`
        }
    }
}

const databaseCadeiras = [
    new Cadeira('Ralé', 50),
    new Cadeira('Melhorzinha', 100),
    new Cadeira('Intermediária', 180),
    new Cadeira('Confortável', 230),
    new Cadeira('Confort Premium', 300),
    new Cadeira('Premium 1', 500),
    new Cadeira('Premium 2', 800),
    new Cadeira('MegaBlaster', 1200),
    new Cadeira('Topíssima da Balada', 2500)
]

function pesquisaValorCadeira(database, minVal, maxVal){
    let result = [];
    for (let cadeira of database){
        if (cadeira.valor >= minVal && cadeira.valor <= maxVal){
            result.push(cadeira.toString());
        };
    };
    return result;
};


console.log(pesquisaValorCadeira(databaseCadeiras, 200, 800));

console.log(databaseCadeiras.find(function(cadeira){
    return cadeira.valor > 500;
})) // retorna apenas a primeira que satisfaz este requisito.

// ARROW FUNCTION
/**
 * Forma abreviada de criar uma função aninhada a outra:
 */

console.log(databaseCadeiras.find(marca => marca.valor>1500)); // mesma lógica da função acima usando arrow function.

/**
 * Operador spread
 * permite criar cópias e concatenar objetos facilmente
 */

let arr1 = [1,2,3];
let arr2 = [4,5,6];

//combinando com o spread:
let arrCombinado = [...arr1, ...arr2, 7];
console.log(arrCombinado);

//usando o foreach
arrCombinado.forEach((valor, indice) => console.log(valor, indice));

/**
 * prompt() 
 * Recebe dados do usuário.
 */

//callbacks


function funcao(mensagem, callback){
    if (callback) callback();
    setTimeout(function(){
        console.log(mensagem)
    }, 1500);
};

function funcao2(mensagem, callback){
    setTimeout(function(){
        console.log(`Segunda Mensagem:
         ${mensagem}.`)
    }, 2500);
    if (callback) callback();
};

funcao2("Minha mensagem", function(){funcao('Minha mensagem da função 1')});