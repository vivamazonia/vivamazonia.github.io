var tela_atual = 'inicio';
var comunicacao_parte = 'inicio';
var primeira_vez_floresta = true;

var tela_queimadas_resgate = false;
var tela_queimadas_apaga = false;
var tela_trafico_animais = false;
var tela_desmatamento = false;
var tela_poluicao = false;


var animal_onca = true;
var animal_harpia = true;
var animal_tucano = true;
var animal_anta = true;
var animal_boto = true;
var animal_jacaretinga = true;
var animal_peixe_boi = true;
var animal_pirarucu = true;

function mudaHumorJulia(humor){
    switch(humor){
        case 'normal':
            $("#comunica_personagem").css('background-image','url(assets/julia1.png)');
            $("#comunica_personagem").css('background-size','100%');
            break;
        case 'triste':
            $("#comunica_personagem").css('background-image','url(assets/julia2.png)');
            $("#comunica_personagem").css('background-size','94%');
        break;
        case 'feliz':
            $("#comunica_personagem").css('background-image','url(assets/julia3.png)');
            $("#comunica_personagem").css('background-size','100%');
            break;
    }
}

function mudarTela(tela){
    console.log(tela_atual);
    $("#voltar_btn").show();
    $("#main_div").removeClass(tela_atual);
    $("#main_div").addClass(tela);
    $("#"+tela_atual).hide();
    $("#"+tela).show();    
    $("#comunica").hide();
    $('#main_div').css("cursor",'url("assets/tela/apontador_seta.png"), auto');
    tela_atual = tela;
    muda_comunicacao('inicio');
    switch(tela){
        case 'floresta':
            if(primeira_vez_floresta){ proxima_fala(); primeira_vez_floresta = false};
            sairJogos();
        break;
        case 'inicio':
            $("#voltar_btn").hide();

        break;
        case 'trafico_animais':
            mudaHumorJulia('triste');
            proxima_fala();
        break;
        case 'queimadas_resgatar':
            mudaHumorJulia('triste');
            proxima_fala();
        break;
        case 'queimadas_apagar':
            mudaHumorJulia('normal');
            proxima_fala();
        break;
        case 'poluicao':
            mudaHumorJulia('triste');
            proxima_fala();
        break;
        case 'desmatamento':
            mudaHumorJulia('triste');
            muda_comunicacao('inicio_triste');
            proxima_fala();
        break;
        case 'sede':
            inicarSede();
            mudaHumorJulia('feliz');
            muda_comunicacao('inicio');
            proxima_fala();
        break;
        default:
    }
}


$("#info_btn").click(function(){
    mudarTela('info');
});
$("#como_jogar_btn").click(function(){
    mudarTela('como_jogar');
});
$("#jogar_btn").click(function(){
    mudarTela('floresta');
});


$("#floresta_btn").click(function(){
    if(!animais_resgatados)
        mudarTela('queimadas_resgatar');
    else if(!fogo_apagado)
        mudarTela('queimadas_apagar');
});

$("#lago_btn").click(function(){
    mudarTela('poluicao');
});
$("#animais_btn").click(function(){
    mudarTela('trafico_animais');
});
$("#reflorestamento_btn").click(function(){
    mudarTela('desmatamento');
});
$("#sede_btn").click(function(){
    mudarTela('sede');
});
$("#voltar_btn").click(function(){
    if(tela_atual == 'sede'){
        if(info_animal){
            $(".sede_info").hide();
            $("#sede_menu").show();
            info_animal = false;
        }else{
            mudarTela('floresta');
        }
    }else if(tela_atual == 'info' || tela_atual == 'como_jogar'){
        mudarTela('inicio');
    }else if(tela_atual == 'trafico_animais'){
        sair_trafico_animais();
        $("#main_div").attr('class','');
        mudarTela('floresta');
    }else if(tela_atual == 'trafico_animais'){
        sair_fase_poluicao();
    }else if(tela_atual == 'floresta'){
        $("#main_div").attr('class','');
        mudarTela('inicio');
    }else{
        $("#main_div").attr('class','');
        mudarTela('floresta');
    }
    $("#comunica").hide();
});