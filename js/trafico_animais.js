var trabalhando = false;
var salvo = false;
var posicaoAtual = {
    x: 0,
    y: 0
}
var carrega = 0;
var id_luz;
var id_trabalha;
var controle_luz = true;
var animal_resgate = '';

function salvar_animal(){
    muda_comunicacao('resgatado_'+animal_resgate);
    clearInterval(id_trabalha);
    clearInterval(id_luz);
    proxima_fala();
}

function encontrado(){
    muda_comunicacao('encontrado');
    trabalhando = false;
    clearInterval(id_trabalha);
    clearInterval(id_luz);
    proxima_fala();
}

function reiniciarTraficoAnimais(){
    iniciarTraficoAnimais(animal_resgate);
}

function iniciarTraficoAnimais(animal) {
    animal_resgate = animal;
    $("#trafico_animais").show();
    carrega = 0;
    var aproximando = 0;
    var tempo = 1;
    if(animal == 'boto'){
        tempo = 2.5;
    }else if(animal == 'pirarucu'){
        tempo = 2;
    }
    trabalhando = false;
    id_luz = setInterval(frame, tempo*25);
    function frame() {
        if(controle_luz) 
            aproximando++;
        else
            aproximando--;
        trabalha(tempo);
        if(aproximando>= 80){
            var ident1 = $("#ident1").css("display") == 'block';
            var ident2 = $("#ident2").css("display") == 'block';
            if(ident1 || ident2){
                encontrado();
            }
        }
        if(aproximando == 50){
            if(controle_luz)
                $("#main_div").addClass('trafico_'+animal+'_aproximando');
            else
                $("#main_div").removeClass('trafico_'+animal+'_aproximando');
        }
        if(aproximando == 80){
            if(controle_luz)
                $("#main_div").addClass('trafico_'+animal+'_perigo');
            else
                $("#main_div").removeClass('trafico_'+animal+'_perigo');
        }
        if (aproximando == -1 || aproximando == 100) {
            controle_luz = !controle_luz;
        }
    }
}

function mexendo_jaula(){
    return (posicaoAtual.x >= $("#trafico_animais_inicio_jaula").offset().left && 
            posicaoAtual.x <= $("#trafico_animais_fim_jaula").offset().left && 
            posicaoAtual.y >= $("#trafico_animais_inicio_jaula").offset().top && 
            posicaoAtual.y <= $("#trafico_animais_fim_jaula").offset().top);
}

function trabalha(tempo) {
    if(!trabalhando)
        id_trabalha = setInterval(frame, tempo);
    function frame() {
        trabalhando = true;
        if(mexendo_jaula() && carrega < 1000){
            carrega+= tempo;
            $("#trafico_animais_carregando").html(Math.floor(carrega/10)+'%');
            if(carrega == 1000 && !salvo){
                salvar_animal();
            }
        }else{
            clearInterval(id_trabalha);
            trabalhando = false;
        }
    }
}


//Ações da luz
$("#luz1").mousemove(function(e){
    $(this).find("#ident1").show();
    posicaoAtual.x = e.pageX;
    posicaoAtual.y = e.pageY;
    $(this).find("#ident1").offset({top: e.pageY, left: e.pageX});
});
$("#luz1").mouseout(function(e){
    $(this).find("#ident1").hide();
});
$("#luz2").mousemove(function(e){
    $(this).find("#ident2").show();
    posicaoAtual.x = e.pageX;
    posicaoAtual.y = e.pageY;
    $(this).find("#ident2").offset({top: e.pageY, left: e.pageX});
});
$("#luz2").mouseout(function(e){
    $(this).find("#ident2").hide();
});

function resgate_boto(){
    $("#main_div").addClass('trafico_boto_seguro');
    muda_comunicacao('resgate_boto');
    proxima_fala();
}
function resgate_pirarucu(){
    $("#main_div").addClass('trafico_pirarucu_seguro');
    muda_comunicacao('resgate_pirarucu');
    proxima_fala();
}
function resgate_peixe_boi(){
    $("#main_div").addClass('trafico_peixe_boi_seguro');
    muda_comunicacao('resgate_peixe_boi');
    proxima_fala();
}