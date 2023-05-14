const botaoAlterarTema = document.getElementById("botao-altera-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagen-botao")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro")

    if(modoEscuroEstaAtivo) {
   imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");  
  } else { 
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")

  } 
});