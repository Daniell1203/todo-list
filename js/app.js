function adicionarTarefa() {
  const input = document.getElementById("inputTarefa");
  const lista = document.getElementById("listaTarefas");

  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  li.addEventListener("click", function () {
    li.remove();

    let tarefas = pegarTarefas();
    tarefas = tarefas.filter(tarefa => tarefa !== li.textContent);
    salvarTarefas(tarefas);
  });

  lista.appendChild(li);

  let tarefas = pegarTarefas();
  tarefas.push(input.value);
  salvarTarefas(tarefas);

  input.value = "";
}

function carregarTarefas() {
  const tarefas = pegarTarefas();
  const lista = document.getElementById("listaTarefas");

  tarefas.forEach(tarefa => {
    const li = document.createElement("li");
    li.textContent = tarefa;

    li.addEventListener("click", function () {
      li.remove();

      let tarefasAtualizadas = pegarTarefas();
      tarefasAtualizadas = tarefasAtualizadas.filter(t => t !== tarefa);
      salvarTarefas(tarefasAtualizadas);
    });

    lista.appendChild(li);
  });
}

carregarTarefas();

window.adicionarTarefa = adicionarTarefa;