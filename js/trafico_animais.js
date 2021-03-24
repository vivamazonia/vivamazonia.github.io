var animais_resgatados = false;
var mouse_jaula = false;
var animal_atual_salvo = false;
var posicao_atual = {
    x: 0,
    y: 0
}
var contador_carregamento = 0;
var id_lanterna;
var id_abrindo_jaula;
var controlador_lanterna = true;
var animal_atual = '';

/* Função para inciar fase do tráfico de animais */
//Ativa contador da lanterna, altera dificuldade de acordo com o animal
function iniciar_fase_trafico_animais(animal) {
    animal_atual = animal;
    $("#trafico_animais_carregando").html('0%');
    $("#trafico_animais").show();
    animal_atual_salvo = false;
    contador_carregamento = 0;
    var aproximando = 0;
    var tempo = 1;
    if(animal == 'jacaretinga'){
        tempo = 2.5;
    }else if(animal == 'boto'){
        tempo = 2;
    }else if(animal == 'pirarucu'){
        tempo = 1.5;
    }
    mouse_jaula = false;
    id_lanterna = setInterval(frame, tempo*25);
    function frame() {
        if(controlador_lanterna) 
            aproximando++;
        else
            aproximando--;
        carregamento_resgate_animal(tempo);
        if(aproximando>= 80){
            var ident1 = $("#ident1").css("display") == 'block';
            var ident2 = $("#ident2").css("display") == 'block';
            if(ident1 || ident2){
                jogador_localizado();
            }
        }
        if(aproximando == 50){
            if(controlador_lanterna)
            $("#main_div").addClass('trafico_'+animal+'_aproximando');
            else
            $("#main_div").removeClass('trafico_'+animal+'_aproximando');
        }
        if(aproximando == 80){
            if(controlador_lanterna)
                $("#main_div").addClass('trafico_'+animal+'_perigo');
                else
                $("#main_div").removeClass('trafico_'+animal+'_perigo');
            }
            if (aproximando == -1 || aproximando == 100) {
                controlador_lanterna = !controlador_lanterna;
            }
    }
}

/* Função para finalizar a fase ou voltar */
function sair_fase_trafico_animais(){
    if(id_abrindo_jaula != null && id_abrindo_jaula != undefined)
    clearInterval(id_abrindo_jaula);
    if(id_lanterna != null && id_lanterna != undefined)
    clearInterval(id_lanterna);
    posicao_atual = {x:0, y:0};
}

// Função para reuniciar fase resgate de animais
function reiniciar_fase_trafico_animais(){
    posicao_atual = {x:0, y:0};
    $("#main_div").removeClass('trafico_'+animal_atual+'_seguro');
    $("#main_div").removeClass('trafico_'+animal_atual+'_aproximando');
    $("#main_div").removeClass('trafico_'+animal_atual+'_perigo');
    $("#main_div").addClass('trafico_'+animal_atual+'_seguro');
    $("#trafico_animais_carregando").html('0%');
    iniciar_fase_trafico_animais(animal_atual);
}

//Função para verificação da posição do mouse dentro dos limites da jaula
function mouse_dentro_area_jaula(){
    return (posicao_atual.x >= $("#trafico_animais_inicio_jaula").offset().left && 
    posicao_atual.x <= $("#trafico_animais_fim_jaula").offset().left && 
    posicao_atual.y >= $("#trafico_animais_inicio_jaula").offset().top && 
    posicao_atual.y <= $("#trafico_animais_fim_jaula").offset().top);
}

/* Função para carregamento do andamento do resgate dependendo da posição do mouse */
function carregamento_resgate_animal(tempo) {
    if(!mouse_jaula)
        id_abrindo_jaula = setInterval(frame, tempo);
    function frame() {
        mouse_jaula = true;
        if(mouse_dentro_area_jaula() && contador_carregamento < 1000){
            contador_carregamento += tempo;
            $("#trafico_animais_carregando").html(Math.floor(contador_carregamento/10)+'%');
            if(contador_carregamento >= 1000 && !animal_atual_salvo){
                resgata_animal();
            }
        }else{
            clearInterval(id_abrindo_jaula);
            mouse_jaula = false;
        }
    }
}
/* Função para mecânica de resgate do animal atual, marca flag para sede e limpa repetições */
function resgata_animal(){
    altera_emocao_julia('feliz');
    muda_comunicacao('resgatado_'+animal_atual);
    if(animal_atual == 'boto'){
        animal_boto = true;
    }
    if(animal_atual == 'jacaretinga'){
        animal_jacaretinga = true;
    }
    if(animal_atual == 'pirarucu'){
        animal_pirarucu = true;
    }
    if(animal_atual == 'peixe_boi'){
        animal_peixe_boi = true;
    }
    clearInterval(id_abrindo_jaula);
    clearInterval(id_lanterna);
    proxima_fala();
}

// Função para ações quando jogador encontrando
function jogador_localizado(){
    muda_comunicacao('encontrado');
    altera_emocao_julia('triste');
    mouse_jaula = false;
    clearInterval(id_abrindo_jaula);
    clearInterval(id_lanterna);
    proxima_fala();
}

//Ações da lanterna
//Dependendo da posição do mouse estar dentro da área da lanterna é guardado as posições x e y
$("#lanterna1").mousemove(function(e){
    $(this).find("#ident1").show();
    posicao_atual.x = e.pageX;
    posicao_atual.y = e.pageY;
    $(this).find("#ident1").offset({top: e.pageY, left: e.pageX});
});
$("#lanterna1").mouseout(function(e){
    $(this).find("#ident1").hide();
    posicao_atual.x = e.pageX;
    posicao_atual.y = e.pageY;
});
$("#lanterna2").mousemove(function(e){
    $(this).find("#ident2").show();
    posicao_atual.x = e.pageX;
    posicao_atual.y = e.pageY;
    $(this).find("#ident2").offset({top: e.pageY, left: e.pageX});
});
$("#lanterna2").mouseout(function(e){
    $(this).find("#ident2").hide();
    posicao_atual.x = e.pageX;
    posicao_atual.y = e.pageY;
});

/* Função altera fundo e porcentagem para jacaretinga */
function prepara_fase_resgate_jacaretinga(){
    $("#main_div").addClass('trafico_jacaretinga_seguro');
    $("#trafico_animais_carregando").html('0%');
    muda_comunicacao('resgate_jacaretinga');
    proxima_fala();
}
/* Função altera fundo e porcentagem para boto */
function prepara_fase_resgate_boto(){
    $("#main_div").addClass('trafico_boto_seguro');
    $("#trafico_animais_carregando").html('0%');
    muda_comunicacao('resgate_boto');
    proxima_fala();
}
/* Função altera fundo e porcentagem para pirarucu */
function prepara_fase_resgate_pirarucu(){
    $("#main_div").addClass('trafico_pirarucu_seguro');
    $("#trafico_animais_carregando").html('0%');
    muda_comunicacao('resgate_pirarucu');
    proxima_fala();
}
/* Função altera fundo e porcentagem para peixe_boi */
function prepara_fase_resgate_peixe_boi(){
    $("#main_div").addClass('trafico_peixe_boi_seguro');
    $("#trafico_animais_carregando").html('0%');
    muda_comunicacao('resgate_peixe_boi');
    proxima_fala();
}