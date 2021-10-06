/**
 * Olá!
 *
 * Este arquivo possui uma ideia parecida com o anterior, mas usamos promises
 * para facilitar o código.
 *
 * Tentem implementar por conta própria a cadeia de chamadas (linha 114). Ao final do arquivo
 * deixei o código comentado (linha 139).
 *
 * A sequencia dos logs deve ser a mesma do arquivo 01-callback-hell.js!
 *
 * Bons estudos!
 *
 * @author Michael Nascimento
 *  *
 */

// Inicializar sistema
function systemInit() {
  return new Promise((resolve, reject) => {
    // simular sucesso no carregamento do sistema
    let loaded = true;

    // lançar callback
    if (loaded) {
      processoLento(() => {
        resolve("ok");
      });
    } else {
      reject("Erro no módulo de inicialização");
    }
  });
}

// Carregar configuração
function loadConfig(result) {
  return new Promise((resolve, reject) => {
    // verificar se o callback anterior foi resolvido com OK
    if (result === "ok") {
      // Simular lógica interna da função
      let loaded = true;
      // condicional do carregamento do sistema
      if (loaded) {
        console.log("Carregando configurações...");
        processoLento(() => {
          resolve("ok");
        });
      } else {
        // erro em caso de problemas no carregamento do sistema
        reject("Erro no carregamento das configurações");
      }
    } else {
      // erro se o sistema anterior não retornou OK
      reject("O sistema está em condição de falha");
    }
  });
}

// Carregar dados do banco
function loadDatabase(result) {
  return new Promise((resolve, reject) => {
    // verificar se o callback anterior foi resolvido com OK
    if (result === "ok") {
      // Simular lógica interna da função
      let loaded = true;
      // condicional do carregamento do sistema
      if (loaded) {
        console.log("Carregando banco de dados...");
        processoLento(() => {
          resolve("ok");
        });
      } else {
        // erro em caso de problemas no carregamento do sistema
        reject("Erro no carregamento do banco de dados");
      }
    } else {
      reject("O sistema está em condição de falha");
    }
  });
}

// Executar testes de integridade do sistema
function systemTesting(result) {
  return new Promise((resolve, reject) => {
    // verificar se o callback anterior foi resolvido com OK
    if (result === "ok") {
      // Simular lógica interna da função
      let loaded = true;
      // condicional do carregamento do sistema
      if (loaded) {
        console.log("Verificando integridade...");
        processoLento(() => {
          resolve("ok");
        });
      } else {
        // erro em caso de problemas no carregamento do sistema
        reject("Erro nos testes de integridade");
      }
    } else {
      reject("O sistema está em condição de falha");
    }
  });
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// =========== CALLBACK HEAVEN =============
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Sistema online
function iniciar() {
  console.log("============= Sistema do Michael ============");
  console.log("Iniciando sistema...");

  // implementem aqui
  systemInit().then(/*...*/);
}

iniciar();

// ---------------------------------------------
// --------------Funções utilitárias------------
// ---------------------------------------------

function processoLento(onSuccess) {
  setTimeout(() => {
    onSuccess();
  }, 1500);
}

// retorna uma mensagem de erro
function executeSeErro(erro) {
  return console.log("Falha na execução! Erro: " + erro);
}

// ---------------------------------------------
// -------------- Colinha! ------------
// ---------------------------------------------

// systemInit()
//     .then(loadConfig, executeSeErro)
//     .then(loadDatabase, executeSeErro)
//     .then(systemTesting, executeSeErro)
//     .then((result) => {
//       if (result === "ok") {
//         console.log("Integridade ok");
//         console.log("Sistema online!");
//       }
//     });
