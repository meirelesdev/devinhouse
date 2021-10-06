/**
 * Olá!
 *
 * Fiz algumas modificações nas funções abaixo para que você
 * possa brincar com os erros e ver as falhas no callback hell
 * (e sentir como era difícil diagnosticar este tipo de problema).
 *
 * Cada uma das funções abaixo possuem dois pontos de falha:
 * 1) A função pode ter sucesso ou falha no carregamento (variavel "loaded")
 * 2) A função pode chamar a próxima função da cadeia passando uma condição
 *    de execução diferente de "ok" (dentro do onSuccess)
 *
 * Altere estes parâmetros a vontade e, antes de rodar o código, tente prever
 * qual vai ser a falha olhando para o callback hell na linha 109 em diante!
 *
 * No fim do arquivo, tem algumas funções utilitárias que não precisam ser
 * alteradas - servem apenas pra facilitar a escrita do código.
 *
 * Qualquer dúvida é só me chamar!
 *
 * @author Michael Nascimento
 *  *
 */

// Inicializar sistema
function systemInit(onSuccess, onError) {
  // simular sucesso no carregamento do sistema
  let loaded = true;

  // lançar callback
  if (loaded) {
    processoLento(() => {
      onSuccess("ok");
    });
  } else {
    onError("Erro no módulo de inicialização");
  }
}

// Carregar configuração
function loadConfig(result, onSuccess, onError) {
  // verificar se o callback anterior foi resolvido com OK
  if (result === "ok") {
    // Simular lógica interna da função
    let loaded = true;
    // condicional do carregamento do sistema
    if (loaded) {
      console.log("Carregando configurações...");
      processoLento(() => {
        onSuccess("ok");
      });
    } else {
      // erro em caso de problemas no carregamento do sistema
      onError("Erro no carregamento das configurações");
    }
  } else {
    // erro se o sistema anterior não retornou OK
    onError("O sistema está em condição de falha");
  }
}

// Carregar dados do banco
function loadDatabase(result, onSuccess, onError) {
  // verificar se o callback anterior foi resolvido com OK
  if (result === "ok") {
    // Simular lógica interna da função
    let loaded = true;
    // condicional do carregamento do sistema
    if (loaded) {
      console.log("Carregando banco de dados...");
      processoLento(() => {
        onSuccess("ok");
      });
    } else {
      // erro em caso de problemas no carregamento do sistema
      onError("Erro no carregamento do banco de dados");
    }
  } else {
    onError("O sistema está em condição de falha");
  }
}

// Executar testes de integridade do sistema
function systemTesting(result, onSuccess, onError) {
  // verificar se o callback anterior foi resolvido com OK
  if (result === "ok") {
    // Simular lógica interna da função
    let loaded = true;
    // condicional do carregamento do sistema
    if (loaded) {
      console.log("Verificando integridade...");
      processoLento(() => {
        onSuccess("ok");
      });
    } else {
      // erro em caso de problemas no carregamento do sistema
      onError("Erro nos testes de integridade");
    }
  } else {
    onError("O sistema está em condição de falha");
  }
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// =========== CALLBACK HELL =============
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Sistema online
function iniciar() {
  console.log("============= Sistema do Michael ============");
  console.log("Iniciando sistema...");

  systemInit((result) => {
    loadConfig(
      result,
      (result) => {
        loadDatabase(
          result,
          (result) => {
            systemTesting(
              result,
              (result) => {
                if (result === "ok") {
                  console.log("Integridade ok");
                  console.log("Sistema online!");
                }
              },
              executeSeErro
            );
          },
          executeSeErro
        );
      },
      executeSeErro
    );
  }, executeSeErro);
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
