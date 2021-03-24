var ferramenta_atual = 'none';
var fase_planta_desmatamento = 'tronco';
var pa_usada = false;
var enxada_usada = false;
var muda_usada = false;
var regador_usado = false;

/* Função para iniciar o jogo */
function comeca_fase_desmatamento(){
    $("#desmatamento").show();
}

/* Função para finalizar a fase ou voltar */
function sair_fase_desmatamento(){
    $("#desmatamento").hide();
}

/* Função para troca da ferramenta, mudando o design da imagem do mouse */
function mudar_ferramenta(tipo){
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
    $('#main_div').css("cursor",'url("assets/desmatamento/'+tipo+'_mouse.png") 25 200, auto');
}

/* Prepara para toda planta no clique executar a função usa_ferramenta */
$(".planta_desmatamento").click(function(){
    usa_ferramenta($(this),ferramenta_atual);
});

/* Função para troca da ferramenta, com a fala da Julia com reação e mudando o status das árvore */
function usa_ferramenta(atual, ferramenta){
    var atual_fase = $(atual).attr('class').split(' ')[1];
    switch(ferramenta){
        case 'pa':
            if(atual_fase == 'tronco') {
                $(atual).removeClass('tronco');
                $(atual).addClass('buraco');
            }else{
                altera_emocao_julia('normal');
                muda_comunicacao('errado');
                proxima_fala();
            }
        break;
        case 'enxada':
            if(atual_fase == 'buraco') {
                $(atual).removeClass('buraco');
                $(atual).addClass('buraco_arrado');
            }else{
                altera_emocao_julia('normal');
                muda_comunicacao('errado');
                proxima_fala();
            }
        break;
        case 'muda':
            if(atual_fase == 'buraco_arrado') {
                $(atual).removeClass('buraco_arrado');
                $(atual).addClass('buraco_muda');
            }else{
                altera_emocao_julia('normal');
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
                    altera_emocao_julia('feliz');
                    muda_comunicacao('fim');
                    proxima_fala();
                }
            }else{
                altera_emocao_julia('normal');
                muda_comunicacao('errado');
                proxima_fala();
            }
        break;
    }
}