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
  
  {
    const btntema=document.querySelector(".btnt-tema")
  }btntema>addEventlisnter("click",mudartema);
  function () mudartema{
    document.bodyclasslist.togle("tema-escuro");
  }
