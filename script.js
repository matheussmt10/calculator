// funcionalidade dos botões


const button = document.querySelectorAll('#button')
const numbers = document.querySelector('#numbers')
const screen = document.querySelector('#screen')

/*button.forEach((number, index) => {
    number.addEventListener('click', () => {
        const screen = document.getElementById('screen');
        nt = number.textContent;
        n = Number(nt);
        
        screen.innerHTML += nt;
        console.log(typeof(nt))
    })
}); */

function insert(value) {
    
    screen.innerHTML += value;
}

function clean() {
    screen.innerHTML = '';
}

function confirmCal() {
    if (screen.innerHTML != 'Erro') {
        screen.innerHTML = eval(screen.innerHTML)
    }
}