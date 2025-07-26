const usuarioValido = "admin";
const senhaValida = "123";

function login() {
  const usuario = document.getElementById("username").value;
  const senha = document.getElementById("password").value;

  if (usuario === usuarioValido && senha === senhaValida) {
    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("app-container").classList.remove("hidden");
  } else {
    alert("Usuário ou senha incorretos!");
  }
}

let registros = [];

function salvar() {
  const nome = document.getElementById("nome").value;
  const quantidade = document.getElementById("quantidade").value;
  const data = document.getElementById("data").value;

  if (!nome || !quantidade || !data) {
    alert("Preencha todos os campos.");
    return;
  }

  registros.push({ nome, quantidade, data });
  alert("Registro salvo com sucesso!");

  document.getElementById("nome").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("data").value = "";
}

function exibir() {
  const container = document.getElementById("registros");
  container.innerHTML = "";

  if (registros.length === 0) {
    container.innerHTML = "<p>Nenhum registro cadastrado.</p>";
    return;
  }

  registros.forEach((r, i) => {
    const div = document.createElement("div");
    div.className = "registro";
    div.innerHTML = `
      <strong>Material:</strong> ${r.nome}<br>
      <strong>Quantidade:</strong> ${r.quantidade}<br>
      <strong>Data:</strong> ${r.data}
      <button onclick="excluir(${i})">X</button>
    `;
    container.appendChild(div);
  });
}

function excluir(index) {
  registros.splice(index, 1);
  exibir();
}
