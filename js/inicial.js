var tela_atual = 'home';
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
    $("#main_div").addClass("queimada");
    tela_atual = 'queimada';
    esconderTudo();
    proxima_fala();
});
$("#lago").click(function(){
    tela_atual = 'sujeira';
    esconderTudo();
    $("#main_div").addClass("sujeira");
    proxima_fala();
});
$("#animais").click(function(){
    $("#main_div").addClass("animais");
    tela_atual = 'trafico';
    esconderTudo();
    proxima_fala();
});
$("#reflorestamento").click(function(){
    tela_atual = 'desmatamento';
    $("#main_div").addClass("reflorestamento");
    esconderTudo();
    proxima_fala();
});
$("#greenpeace").click(function(){
    $("#main_div").addClass("greenpeace");
    tela_atual = 'greenpeace';
    proxima_fala();
    esconderTudo();
});
$("#voltar").click(function(){
    tela_atual = 'home';
    $("#comunica").hide();
    sairJogos();
    esconderTudo();
    mostrarTudo();
});