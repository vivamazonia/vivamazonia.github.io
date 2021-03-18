var tela_atual = 'inicio';

function mudarTela(tela){
    $("#voltar_btn").show();
    $("#main_div").removeClass(tela_atual);
    $("#main_div").addClass(tela);
    $("#"+tela_atual).hide();
    $("#"+tela).show();    
    tela_atual = tela;
    index = -1;
    switch(tela){
        case 'home':
            sairJogos();
            $("#voltar_btn").hide();
            //proxima_fala();
        break;
        case 'inicio':
            $("#voltar_btn").hide();

        break;
        case 'queimada':
            proxima_fala();
        break;
        case 'poluicao':
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
    mudarTela('home');
});


$("#floresta_btn").click(function(){
    mudarTela('queimada');
});

$("#lago_btn").click(function(){
    mudarTela('poluicao');
});
$("#animais_btn").click(function(){
    mudarTela('trafico');
    esconderTudo();
    proxima_fala();
});
$("#reflorestamento_btn").click(function(){
    mudarTela('desmatamento');
    $("#main_div").addClass("reflorestamento");
    esconderTudo();
    proxima_fala();
});
$("#greenpeace_btn").click(function(){
    mudarTela('greenpeace');
    proxima_fala();
    esconderTudo();
});
$("#voltar_btn").click(function(){
    if(tela_atual == 'info' || tela_atual == 'como_jogar'){
        mudarTela('inicio');
    }else{
        mudarTela('home');
    }
    $("#comunica").hide();
});