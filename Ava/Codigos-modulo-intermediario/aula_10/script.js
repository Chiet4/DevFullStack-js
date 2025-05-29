// Promises
let buscaDados = new Promise((resolve, reject) => {
  let sucesso = true;
  setTimeout(() => {
    if (sucesso) {
      resolve("Dados carregados com sucesso!");
    } else {
      reject("Erro ao carregar dados.");
    }
  }, 2000);
});

buscaDados
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.log(erro);
  });

// Async/Await
async function carregarDados() {
  try {
    let resposta = await buscaDados;
    console.log(resposta);
  } catch (erro) {
    console.log(erro);
  }
}

carregarDados();

async function buscaUsuario() {
  try {
    let resposta = await fetch(
      "https://hp-api.onrender.com/api/characters/staff"
    );
    let user = await resposta.json();
    console.log(user);
  } catch (erro) {
    console.log("Erro: ", erro);
  }
}

buscaUsuario();
