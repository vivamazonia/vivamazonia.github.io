var tela_atual = 'inicio';
var comunicacao_parte = 'inicio';
function mudarTela(tela){
    console.log(tela_atual);
    $("#voltar_btn").show();
    $("#main_div").removeClass(tela_atual);
    $("#main_div").addClass(tela);
    $("#"+tela_atual).hide();
    $("#"+tela).show();    
    $("#comunica").hide();
    $("html").css("cursor","default");
    tela_atual = tela;
    muda_comunicacao('inicio');
    switch(tela){
        case 'home':
            $("#voltar_btn").hide();
            sairJogos();
            //proxima_fala();
        break;
        case 'inicio':
            $("#voltar_btn").hide();

        break;
        case 'trafico_animais':
            proxima_fala();
        break;
        case 'queimadas_resgatar':
            proxima_fala();
        break;
        case 'queimadas_apagar':
            proxima_fala();
        break;
        case 'poluicao':
            proxima_fala();
        break;
        case 'sede':
            $("#sede").show();
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
    mudarTela('home');
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
            mudarTela('home');
        }
    }else if(tela_atual == 'info' || tela_atual == 'como_jogar'){
        mudarTela('inicio');
    }else{
        $("#main_div").attr('class','');
        mudarTela('home');
    }
    $("#comunica").hide();
});