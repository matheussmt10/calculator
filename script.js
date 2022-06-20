var estado;
var op1;
var op2;
var resultado;
var operacao;


let calculadora = {
    numeroArray : new Array(),
    
    inicializacao : function(){
        estado='inicializacao';
        this.display();
    },
    
    adicao : function () {
        operacao = 'adicao';
        estado='operando2';
        this.numeroArray=[]; /*Ao final de cada operacao eu tenho que limpar o numero array para o proximo operando*/
    },
    
    subtracao : function(){
        operacao = 'subtracao';
        estado='operando2';
        this.numeroArray=[]; 
    },
    
    divisao : function (){
        operacao = 'divisao';
        estado='operando2';
        this.numeroArray=[]; 
    },
    
    multiplicacao : function (){
        operacao = 'multiplicacao';
        estado='operando2';
        this.numeroArray=[]; 
    },
    raiz : function (){
        operacao = 'raiz';
        estado='operando2';
        this.numeroArray=[]; 
    },
    porcento : function (){
        operacao = 'porcento';
        estado='operando2';
        this.numeroArray=[];
    },

    ac : function(){
        calculadora.inicializacao();
        this.numeroArray=[];
    },
    
    off : function(){
        document.getElementById("screen").innerText = '';
    },
    
    igual : function(){
        switch (operacao){
            
            case 'adicao':
            resultado = op1+op2;
            estado ='resultado';
            this.display();
            break;

            case 'subtracao':
            resultado = op1-op2;
            estado ='resultado';
            this.display();
            break;

            case 'divisao':
            resultado = op1/op2;
            estado ='resultado'
            this.display();
            break;

            case 'multiplicacao':
            resultado = op1*op2;
            estado ='resultado'
            this.display();
            break;

            case 'raiz':
            resultado = Math.sqrt(op1) ;
            estado ='resultado'
            this.display();
            break;

            case 'porcento':
            resultado = (op1 * 100) / op2;
            estado ='resultado'
            this.display();
            break;
            
        }
            
    },
    display : function (){
        switch (estado){

            case'inicializacao':
                document.getElementById("screen").innerText = '0';
                estado='operando1';
                break;

            case 'operando1':
                document.getElementById("screen").innerText = op1;
                break;
            
            case 'operando2':
                document.getElementById("screen").innerText = op2;
                break;
            
            case 'resultado':
                document.getElementById("screen").innerText = resultado;
                estado='operando1';
                break;
        }

    },

    
    proximoNumero: function(digito){
                    switch (estado){
                        case'operando1':
                            this.numeroArray.push(digito);
                            op1=parseFloat(this.numeroArray.join(''));
                            this.display();
                            break
                        case 'operando2':
                            this.numeroArray.push(digito);
                            op2=parseFloat(this.numeroArray.join(''));
                            this.display();
                            break
                    }


    },

}































// funcionalidade dos botões


/* const button = document.querySelectorAll('#button')
const numbers = document.querySelector('#numbers')
const screen = document.querySelector('#screen')


function insert(value) {
    if(screen.innerHTML == 0) {
        screen.innerHTML = '';
    }
    screen.innerHTML += value;
    
}

function clean() {
    
    screen.innerHTML = '0';
    
}

const operator = document.getElementsByClassName('operator')
function confirmCal() {
    if (screen.innerHTML != 'Erro') {
        screen.innerHTML = eval(screen.innerHTML)
    }
}




function insertOp() {

}

function calculator(valueA, valueB, operation) {
    if(operation === '+'){
        return valueA + valueB
    }
}


*/