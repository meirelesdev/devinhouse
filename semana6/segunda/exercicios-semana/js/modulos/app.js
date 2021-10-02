import usuario from './usuario.js'
import { registraElemento, montaConteudo } from './funcoes.js'

let elementoRaiz = document.getElementById("root")
const conteudo = montaConteudo(usuario)
registraElemento(elementoRaiz, conteudo)