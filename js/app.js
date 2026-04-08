function adicionarTarefa() {
  const input = document.getElementById("inputTarefa");
  const lista = document.getElementById("listaTarefas");

  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  li.addEventListener("click", function () {
    li.classList.toggle("concluida");
  });

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
    li.textContent = tarefa.texto;

    if (tarefa.concluida) {
      li.classList.add("concluida");
    }

    li.addEventListener("click", function () {
      li.classList.toggle("concluida");

      let tarefasAtualizadas = pegarTarefas();
      tarefasAtualizadas[index].concluida = !tarefasAtualizadas[index].concluida;
      salvarTarefas(tarefasAtualizadas);
    });

    lista.appendChild(li);
  });
}

carregarTarefas();

window.adicionarTarefa = adicionarTarefa;