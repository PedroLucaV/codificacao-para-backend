const paciente = document.getElementById("inPacientes");
const add = document.getElementById("btnAdicionar");
const urg = document.getElementById("btnUrgencia");
const aten = document.getElementById("btnAtender");
const atendido = document.getElementById("outAtendimento");
const lista = document.getElementById("outLista");
const listaAtual = [];

add.addEventListener("click", () => {
  let chamado = paciente;
  chamado = chamado.value;
  if (chamado === "") {
    alert("Informe o nome do paciente!");
  } else {
    let listar = "";
    listaAtual.push(chamado);
    listaAtual.map((paciente, index) => {
      return (listar += `${index + 1} - ${paciente} \n`);
    });
    lista.innerHTML = listar;
    paciente.value = "";
  }
});

urg.addEventListener("click", () => {
  let chamado = paciente;
  chamado = chamado.value;
  if (chamado === "") {
    alert("Informe o nome do paciente!");
  } else {
    let listar = "";
    listaAtual.unshift(chamado);
    listaAtual.map((paciente, index) => {
      return (listar += `${index + 1} - ${paciente}\n`);
    });
    lista.textContent = listar;
    paciente.value = "";
  }
});

aten.addEventListener("click", () => {
  if (listaAtual.length === 0) {
    alert("Não há pacientes na fila!");

    return (atendido.innerHTML = "");
  }
  let atender = listaAtual.shift();
  atendido.innerHTML = atender;
  let listar = "";
  listaAtual.map((paciente, index) => {
    return (listar += `${index + 1} - ${paciente}\n`);
  });
  lista.textContent = listar;
});
