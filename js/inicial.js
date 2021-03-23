var animais_resgatados = false;
var fogo_apagado = false;
var info_animal = false;

$('html').css("cursor",'url("assets/tela/apontador_seta.png") 50 0, auto');

function esconderTudo(){
}


function sairJogos(){
    sairQueimadas();
    sairDesmatamento();
    sairSujeita();
    sairTraficoAnimais();
}
function mostrarTudo(){
}