var ferramenta_atual = 'none';
var fase_planta_desmatamento = 'tronco';
var pa_usada = false;
var enxada_usada = false;
var muda_usada = false;
var regador_usado = false;

function sairDesmatamento(){
    $("#desmatamento").hide();
}
function iniciarDesmatamento(){
    $("#desmatamento").show();
}
function mudar(tipo){
    ferramenta_atual = tipo;
    switch(tipo){
        case 'pa':
            if(!pa_usada){
                muda_comunicacao('pa');
                proxima_fala();
                pa_usada = true;
            }
        break;
        case 'enxada':
            if(!enxada_usada){
                muda_comunicacao('enxada');
                proxima_fala();
                enxada_usada = true;
            }
        break;
        case 'muda':
            if(!muda_usada){
                muda_comunicacao('muda');
                proxima_fala();
                muda_usada = true;
            }
        break;
        case 'regador':
            if(!regador_usado){
                muda_comunicacao('regador');
                proxima_fala();
                regador_usado = true;
            }
        break;
    }
    $('html').css("cursor",'url("assets/desmatamento/'+tipo+'_mouse.png") 25 200, auto');
}
$(".planta_desmatamento").click(function(){
    console.log($(this).attr('class'));
    usarFerramenta($(this),ferramenta_atual);
});

function deParaFerramentasUsar(ferramenta){
    switch(ferramenta){
        case 'pa':
            return "tronco";
        break;
        case 'enxada':
            return 'buraco';
        break;
        case 'muda':
            return 'buraco_arrado';
        break;
        case 'regador':
            return 'buraco_muda';
        break;
    }
}
function usarFerramenta(atual, ferramenta){
    var atual_fase = $(atual).attr('class').split(' ')[1];
    console.log(atual_fase);
    switch(ferramenta){
        case 'pa':
            if(atual_fase == 'tronco') {
                $(atual).removeClass('tronco');
                $(atual).addClass('buraco');
            }else{
                mudaHumorJulia('normal');
                muda_comunicacao('errado');
                proxima_fala();
            }
        break;
        case 'enxada':
            if(atual_fase == 'buraco') {
                $(atual).removeClass('buraco');
                $(atual).addClass('buraco_arrado');
            }else{
                mudaHumorJulia('normal');
                muda_comunicacao('errado');
                proxima_fala();
            }
        break;
        case 'muda':
            if(atual_fase == 'buraco_arrado') {
                $(atual).removeClass('buraco_arrado');
                $(atual).addClass('buraco_muda');
            }else{
                mudaHumorJulia('normal');
                muda_comunicacao('errado');
                proxima_fala();
            }
        break;
        case 'regador':
            if(atual_fase == 'buraco_muda') {
                $(atual).removeClass('buraco_muda');
                $(atual).addClass('muda_agoada');
                var planta = document.getElementsByClassName("planta_desmatamento");
                var finalizou = true;
                for (var i = 0; i < planta.length; i++) {
                    if(!planta[i].className.includes('muda_agoada')){
                        finalizou = false;
                    }
                } 
                if(finalizou){
                    mudaHumorJulia('feliz');
                    muda_comunicacao('fim');
                    proxima_fala();
                }
            }else{
                mudaHumorJulia('normal');
                muda_comunicacao('errado');
                proxima_fala();
            }
        break;
    }
}