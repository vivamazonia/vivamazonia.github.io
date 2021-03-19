var intervalID;

function resgate_onça(){
    $("#main_div").addClass('queimadas_resgatar_onça');
    muda_comunicacao('onça');
    proxima_fala();
}
function resgate_aves(){
    $("#main_div").addClass('queimadas_resgatar_aves');
    muda_comunicacao('aves');
    proxima_fala();
}
function resgate_anta(){
    $("#main_div").addClass('queimadas_resgatar_anta');
    muda_comunicacao('anta');
    proxima_fala();
}

function vitoria_queimada(){
    muda_comunicacao('vitoria');
    fogo_apagado = true;
    clearInterval(intervalID);
    proxima_fala();
}

function derrota_queimada(){
    muda_comunicacao('derrota');
    clearInterval(intervalID);
    proxima_fala();
}

function iniciarQueimadas(){
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

$("#queimadas_resgatar_onça").click(function(){
    $("#main_div").removeClass('queimadas_resgatar_onça');
    $("#queimadas_resgatar_onça").hide();
    muda_comunicacao('encontrado_onça');
    proxima_fala();
});
var harpia_encontrada = false;
var tucano_encontrado = false;
$("#queimadas_resgatar_harpia").click(function(){
    harpia_encontrada = true;
    $("#queimadas_resgatar_harpia").hide();
    if(tucano_encontrado && harpia_encontrada){
        $("#main_div").removeClass('queimadas_resgatar_aves');
        muda_comunicacao('encontrado_aves');
        proxima_fala();
    }
});
$("#queimadas_resgatar_tucano").click(function(){
    tucano_encontrado = true;
    $("#queimadas_resgatar_tucano").hide();
    if(tucano_encontrado && harpia_encontrada){
        $("#main_div").removeClass('queimadas_resgatar_aves');
        muda_comunicacao('encontrado_aves');
        proxima_fala();
    }
});

$("#queimadas_resgatar_anta").click(function(){
    $("#main_div").removeClass('queimadas_resgatar_anta');
    $("#queimadas_resgatar_anta").hide();
    muda_comunicacao('encontrado_anta');
    proxima_fala();
});