var ferramenta_atual = 'none';
var fase_planta_desmatamento = 'tronco';
function sairDesmatamento(){
    $("#desmatamento").hide();
}
function iniciarDesmatamento(){
    $("#desmatamento").show();
}
function mudar(tipo){
    ferramenta_atual = tipo;
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
            }
        break;
        case 'enxada':
            if(atual_fase == 'buraco') {
                $(atual).removeClass('buraco');
                $(atual).addClass('buraco_arrado');
            }
        break;
        case 'muda':
            if(atual_fase == 'buraco_arrado') {
                $(atual).removeClass('buraco_arrado');
                $(atual).addClass('buraco_muda');
            }
        break;
        case 'regador':
            if(atual_fase == 'buraco_muda') {
                $(atual).removeClass('buraco_muda');
                $(atual).addClass('muda_agoada');
            }
        break;
    }
}