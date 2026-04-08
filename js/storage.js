function salvarTarefas(tarefas) {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function pegarTarefas() {
    return JSON.parse(localStorage.getItem("tarefas")) || [];
}