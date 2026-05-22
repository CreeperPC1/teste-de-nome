function guardarNome() {
  //captura o nome utilizado
  var nome = document.getElementById("seuNome").value;

  var nomeLimpo = nome.trim();

  if (nomeLimpo === "") {
    alert("Por favor, digite um nome!");
    return;
  }

  var nomeFinal = nomeLimpo
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  //armazena os valores em localStorage
  localStorage.setItem("seuNome", nomeFinal);

  if (nomeFinal === "ANDRE") {
    window.location.href = "teste2.html";
  } else {
    alert("Seu nome é " + nome + ". Ok, obrigado por testar!");
  }
}
