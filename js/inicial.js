var tela_atual = 'principal';
function esconderTudo(){
    $("#floresta").hide();   
    $("#animais").hide();
    $("#reflorestamento").hide();
    $("#lago").hide();
    $("#greenpeace").hide();
    $("#main_div").removeClass("principal");
    $("#voltar").show();
    index = -1;
}

function mudarTela(tela){
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
    $("#floresta").show();
    sairQueimadas();
    sairDesmatamento();
    $("#animais").show();
    $("#reflorestamento").show();
    $("#lago").show();
    $("#greenpeace").show();
    $("#main_div").addClass("principal");
    $("#main_div").removeClass("floresta");
    $("#main_div").removeClass("animais");
    $("#main_div").removeClass("reflorestamento");
    $("#main_div").removeClass("lago");
    $("#main_div").removeClass("greenpeace");
    $("#voltar").hide();
}
$("#voltar").hide();
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
    mudarTela('principal');
    $("#comunica").hide();
    sairJogos();
    esconderTudo();
    mostrarTudo();
});