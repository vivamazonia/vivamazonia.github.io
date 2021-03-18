var tela_atual = 'inicio';
function esconderTudo(){
    $("#home").hide();
    $("#main_div").removeClass("principal");
    $("#voltar").show();
    index = -1;
}

function mudarTela(tela){
    if(tela == 'principal'){
        sairJogos();
        esconderTudo();
        mostrarTudo();
    }
    $("#main_div").removeClass(tela_atual);
    $("#main_div").addClass(tela);
    tela_atual = tela;
}

function sairJogos(){
    sairQueimadas();
    sairDesmatamento();
    sairSujeita();
    sairTraficoAnimais();
}
function mostrarTudo(){
    $("#home").show();
    sairQueimadas();
    sairDesmatamento();
    $("#main_div").addClass("principal");
    $("#main_div").removeClass("floresta");
    $("#main_div").removeClass("animais");
    $("#main_div").removeClass("reflorestamento");
    $("#main_div").removeClass("lago");
    $("#main_div").removeClass("greenpeace");
    $("#voltar").hide();
}
$("#voltar").hide();
$("#info").click(function(){
    mudarTela('info');
    $("#voltar").show();
});
$("#como_jogar").click(function(){
    mudarTela('como_jogar');
    $("#voltar").show();
});
$("#jogar").click(function(){
    mudarTela('principal');
    proxima_fala();
});
$("#floresta").click(function(){
    mudarTela('queimada');
    esconderTudo();
    proxima_fala();
});
$("#lago").click(function(){
    mudarTela('poluicao');
    esconderTudo();
    proxima_fala();
});
$("#animais").click(function(){
    mudarTela('trafico');
    esconderTudo();
    proxima_fala();
});
$("#reflorestamento").click(function(){
    mudarTela('desmatamento');
    $("#main_div").addClass("reflorestamento");
    esconderTudo();
    proxima_fala();
});
$("#greenpeace").click(function(){
    mudarTela('greenpeace');
    proxima_fala();
    esconderTudo();
});
$("#voltar").click(function(){
    if(tela_atual == 'info' || tela_atual == 'como_jogar'){
        mudarTela('inicio');
    }else{
        mudarTela('principal');
    }
    $("#comunica").hide();
});