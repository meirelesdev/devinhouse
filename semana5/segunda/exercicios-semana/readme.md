

# Documentação JavaScript Básica.
---
## Direfenças entre ___let___, ___var___ e ___const___
---
> Na linguagem JavaScript temos como declarar Variaveis de tres formas distintas, utilizando as palavras reservadas `let, var, const`. Estas formas talves não pareca mas elas são bem direfentes.
>
> Vamos aos detalhes de cada uma.
>
> ## Iniciaremos pela declaração usando o ___var___

Presente desde o surgimento da linguagem esta presente nos sistemas mais antigos.
Uma grande caracterista de se utilizar o var é que seu escopo acabe sendo global no sentido de fora para dentro.

> Exemplo 1:
~~~JavaScript
1   function somarNumero(){
2        var n1 = 1
3        let n2 = 2
4        return n1 + n2
5   }
6
7 console.log(somarNumero())
8 console.log(n1)
~~~
Ao declarar a variavel n1 com a palavra var ela pode ser acessada fora da funcao somarNumero.
> Exemplo 2:
~~~JavaScript
1 var nome = 'Tester'
2 if(true){
3     var nome2 = 'Tester 2'
4     console.log(nome)
5     console.log(nome2)
6 }
7 console.log(nome2)
8 console.log(nome)
~~~
Neste segundo Exemplo vemos a declaração da variavel __nome__ e __nome2__ com a palavra var ela pode ser acessada fora do escopo do if, enquanto que se trocarmos o **var** na declaração do __nome2__ por **let** teremos um erro na linha 7.
Então vamos falar de **let**.

> ## Iniciaremos pela declaração usando o ___let___

O termo ___let___ surgiu recentemente na linguagem para corrigir alguns problemas que o ___var___ acabava calsando no JavaScript.
Variáveis declaradas com ___let___ são "içadas" para começo do bloco em que elas são definidas (isso é conhecido também pelo termo, hoisting).

> Exemplo 1:
~~~JavaScript
1   function somarNumero(){
2        let n1 = 1
3        let n2 = 2
4        return n1 + n2
5   }
6
7 console.log(somarNumero())
8 console.log(n1) // Esta linha retornará um erro.
~~~
Ao declarar a variavel n1 com a palavra ___let___ ela pode não pode ser acessada fora da funcão somarNumero ela passa a existir somente durante a execução da função.

> Exemplo 2:

~~~JavaScript
1 let nome = 'Tester'
2 if(true){
3     let nome2 = 'Tester 2'
4     console.log(nome)
5     console.log(nome2)
6 }
7 console.log(nome2)
8 console.log(nome)
~~~
Neste segundo Exemplo vemos a declaração da variavel __nome__ e __nome2__ com a palavra ___let___ e a variavel `nome2` não pode ser acessada fora do escopo do if, pois ela foi declara naquele escopo.
Para evitar erros seria aconcelhavel fazer a declaração da variavel fora e atribuit o valor caso entre no bloco do if.

> ## Iniciaremos pela declaração usando o ___const___
O termo ___const___ surgiu recentemente na linguagem para JavaScript para tornar uma variavel imutal apos sua declaração.
Constantes possuem escopo de bloco, semelhantes às variáveis declaradas usando o palavra-chave ___let___. O valor de uma constante não pode ser alterado por uma atribuição, e ela não pode ser redeclarada.

> Exemplo 1:

~~~JavaScript
1 const nome = 'Tester'
2 
3 nome = 'Tester 2'
~~~
O código do Exemplo 1 traria um erro.

> Exemplo 2:

~~~JavaScript
1 const nome = ['Joca', 'Juca', 'Jana']
2 
3 for(let i = 0 ; i < nome.length ; i++) {
4   const tamanho = nome[i].length
5   console.log(`O nome ${nome[i]} tem ${tamanho} letras.`)
6 }
7
~~~
O código do Exemplo 2 funciona sem erros pois como a variavel tem escopo de bloco a cada iteração é uma nova variavel tamanho.

---
## Classes e Atributos no JavaScript.
---
Classes em JavaScript são introduzidas no ECMAScript 2015 e são simplificações da linguagem para as heranças baseadas nos protótipos. A sintaxe para classes não introduz um novo modelo de herança de orientação a objetos em JavaScript. Classes em JavaScript provêm uma maneira mais simples e clara de criar objetos e lidar com herança.

> Exemplo 1:

~~~JavaScript
1  
2  class Retangulo {
3   constructor(altura, largura) {
4      this.altura = altura;
5      this.largura = largura;
6    }
7  }
~~~
Uma informação importante sobre as classes é que elas nao sofrem hoisting, ou seja, devemos declarar uma classe antes de utilizada.

> Exemplo 2:

~~~JavaScript
1  
2  class Retangulo {
3   constructor(altura, largura) {
4      this.altura = altura;
5      this.largura = largura;
6    }
7    get area() {
8      return this.altura * this.largura;
9    }
10  }
11  const retangulo1 = new Retangulo(10, 5)
12  console.log(retangulo1.area()) // a saida é 50
~~~

