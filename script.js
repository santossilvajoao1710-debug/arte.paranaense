const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir.forEach(function(botaoCurtir){
    let curtiu = false;
    botaoCurtir.addEventlisnter("click", curtir);
    function curtir(){ 
    const contador = botaoCurtir.querySelector("span");
    if(curtiu === false){ 
            contador.textContent++;
            curtiu = true;
    } else {
        contador.textContent--;
        curtiu = false;
    }
}
   

}
)
;
  
  
  const btnTema = document.querySelector(".btn-tema");
  btnTema.addEventListener("click",mudarTema);
  function mudarTema{
    document.body.classList.toggle("tema-escuro");
  }
