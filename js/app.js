function adicionarTarefa() {
  const input = document.getElementById("inputTarefa");
  const lista = document.getElementById("listaTarefas");

  if (input.value.trim() === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = input.value;

  const botao = document.createElement("button");
  botao.textContent = "❌";

  span.addEventListener("click", function () {
    li.classList.toggle("concluida");

    let tarefas = pegarTarefas();
    tarefas[tarefas.length - 1].concluida =
      !tarefas[tarefas.length - 1].concluida;
    salvarTarefas(tarefas);
  });

  botao.addEventListener("click", function () {
    li.remove();

    let tarefas = pegarTarefas();
    tarefas.pop();
    salvarTarefas(tarefas);
  });

  li.appendChild(span);
  li.appendChild(botao);
  lista.appendChild(li);

  let tarefas = pegarTarefas();
  tarefas.push({
    texto: input.value,
    concluida: false
  });
  salvarTarefas(tarefas);

  input.value = "";
}

function carregarTarefas() {
  const tarefas = pegarTarefas();
  const lista = document.getElementById("listaTarefas");

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = tarefa.texto;

    const botao = document.createElement("button");
    botao.textContent = "❌";

    if (tarefa.concluida) {
      li.classList.add("concluida");
    }

    span.addEventListener("click", function () {
      li.classList.toggle("concluida");

      let tarefasAtualizadas = pegarTarefas();
      tarefasAtualizadas[index].concluida =
        !tarefasAtualizadas[index].concluida;
      salvarTarefas(tarefasAtualizadas);
    });

    botao.addEventListener("click", function () {
      li.remove();

      let tarefasAtualizadas = pegarTarefas();
      tarefasAtualizadas.splice(index, 1);
      salvarTarefas(tarefasAtualizadas);
    });

    li.appendChild(span);
    li.appendChild(botao);
    lista.appendChild(li);
  });
}

carregarTarefas();

window.adicionarTarefa = adicionarTarefa;