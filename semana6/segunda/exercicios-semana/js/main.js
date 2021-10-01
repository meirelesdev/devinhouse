import Biografia from "./classes/abstratos/Biografia.js";
import Clima from "./classes/abstratos/Clima.js";
import Bola from "./classes/reais/Bola.js";
import Veiculo  from "./classes/reais/Veiculo.js";
const btnStart = document.querySelector('#start')

btnStart.addEventListener('click', ()=>{
    const veiculo1 = new Veiculo('Fusca', 'preto')
    const bola1 = new Bola('Preta e Branca', 'Futebol')
    console.log(veiculo1)
    console.log(bola1)
    const divResultado = document.querySelector('.resultado')
    
    divResultado.innerHTML = 'Carregando...'
    const p = document.createElement('p')
    setTimeout(()=>{
        divResultado.innerHTML = ''
        p.innerHTML = `${veiculo1.toString()}<br>`
        p.innerHTML += `${bola1.toString()}`
        divResultado.append(p)
    }, 300)

    const clima = new Clima('35º', true)
    const biobrafia1 = new Biografia('Daniel Meireles', 'Iniciou sua carreira em Desenvolvimento de Software em 2016.')
    const divResultado2 = document.querySelector('.resultado2')
    const p2 = document.createElement('p')

    console.log(clima)
    console.log(biobrafia1)
    divResultado2.innerHTML = 'Carregando...'
    setTimeout(()=>{
        divResultado2.innerHTML = ''
        p2.innerHTML = `${clima.toString()}<br>`
        p2.innerHTML += `${biobrafia1.toString()}`
        divResultado2.append(p2)
    }, 300)
})