function adicionarTarefa() {
  const input = document.getElementById("inputTarefa");
  const lista = document.getElementById("listaTarefas");

  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  lista.appendChild(li);

  input.value = "";
}

window.adicionarTarefa = adicionarTarefa;