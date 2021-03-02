var intervalID;
function sairQueimadas(){
    $("#queimadas").hide();
    $("#queimadas").hide();
    $(".local-queimada").hide();
    clearInterval(intervalID);
}

function vitoria_queimada(){
    alert("Você ganhou!");
    mostrarTudo();
}

function derrota_queimada(){
    alert("Você perdeu!");
    mostrarTudo();

}

function inicarQueimadas(){
    $(".local-queimada").addClass('floresta-verde-queimada');
    for(var i = 0; i < 5;i++)
        pintarAleatorio(true);
    $("#queimadas").show();
    $(".local-queimada").show();
    intervalID = window.setInterval(pintarAleatorio, 2000, false);
}

$(".local-queimada").click(function(){
    let vermelho = $(this).hasClass("floresta-fogo-queimada");
    if(vermelho){
        $(this).removeClass('floresta-fogo-queimada');
        $(this).addClass('floresta-verde-queimada');
    }
});

function temVerde(){
    for(let i = 1; i <=6; i++){
        for(let j = 1; j <= 10; j++){
            if($(".linha"+i+" .local-queimada:nth-child("+j+")").hasClass('floresta-verde-queimada') == true){
                return true;
            }
        }
    }
    return false;
}
function temVermelho(){
    for(let i = 1; i <=6; i++){
        for(let j = 1; j <= 10; j++){
            if($(".linha"+i+" .local-queimada:nth-child("+j+")").hasClass('floresta-fogo-queimada') == true){
                return true;
            }
        }
    }
    return false;
}


function pintarAleatorio(inicio){
    if(!inicio && !temVermelho()){
        vitoria_queimada();
    }else{
        let vermelho = false;
        do{
            let linha = Math.floor(Math.random() * Math.floor(6))+1;
            let coluna = Math.floor(Math.random() * Math.floor(10))+1;
            if($(".linha"+linha+" .local-queimada:nth-child("+coluna+")").hasClass('floresta-verde-queimada')){
                $(".linha"+linha+" .local-queimada:nth-child("+coluna+")").removeClass('floresta-verde-queimada');
                $(".linha"+linha+" .local-queimada:nth-child("+coluna+")").addClass('floresta-fogo-queimada');
                vermelho = false;
            }else if(temVerde()){
                vermelho = true;
            }else{
                derrota_queimada();
                vermelho = false;
            }
        }while(vermelho);

    }
}