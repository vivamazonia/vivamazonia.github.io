var nivel = 2;
var tempoGuarda;
var tempoEsperaGuarda;
var tempoInicioGuarda;
var velocidadeSalva;
var encontrado = false;
tempoInicioGuarda = 2000;
if(nivel == 1){
    tempoGuarda = 2000;
    tempoEsperaGuarda = 10000;
    velocidadeSalva = 7;
}else if(nivel == 2){
    tempoGuarda = 1700;
    tempoEsperaGuarda = 8000;
    velocidadeSalva = 12;
}else if(nivel == 3){
    tempoGuarda = 1300;
    tempoEsperaGuarda = 5000;
    velocidadeSalva = 15;
}
var animacao_guarda;
var andando = false;
var currentMousePos = { x: -1, y: -1 };
async function sleep(time) {
    await new Promise(resolve => setTimeout(resolve, time))
}
jogando = false;
salvo = false;
var jogo_trafico = false;
function iniciarTraficoAnimais(){
    $("#trafico_animais").show();
    jogo_trafico = true;
    carrega = 0;
    salvo = false;
    $("#trafico_animais_guarda").css('height','10%');
    guarda();
    jQuery(function($) {
        $(document).mousemove(function(event) {
                currentMousePos.x = event.pageX;
                currentMousePos.y = event.pageY;
            if(jogo_trafico){
                if(!jogando)
                    trabalhando();
            }
        });
    });
}
function sairTraficoAnimais(){
    $("#trafico_animais").hide();
    jogo_trafico = false;
    animacao_guarda.stop();
}
async function guarda() {
    await sleep(tempoInicioGuarda);
    while(!salvo){
        guardaAnda();
        await sleep(tempoEsperaGuarda)
    }
}
function dentro(){
    return (currentMousePos.x >= $("#trafico_animais_inicio_jaula").offset().left && currentMousePos.x <= $("#trafico_animais_fim_jaula").offset().left && currentMousePos.y >= $("#trafico_animais_inicio_jaula").offset().top && currentMousePos.y <= $("#trafico_animais_fim_jaula").offset().top);
}
async function trabalhando() {
    if(!encontrado){
        jogando = true;
        while(dentro() && Math.floor(carrega/10) < 100){
            carrega++;
            $("#trafico_animais_carregando").html(Math.floor(carrega/10)+'%');
            await sleep(velocidadeSalva)
        }
        jogando = false;
        if(carrega == 1000 && !salvo){
            alert('salvo!');
            guardaVolta();
            animacao_guarda.stop();
            salvo = true;
        }
    }
}

async function procura(){
    if(jogo_trafico){
        var carregando = 0;
        while(carregando++ < 10 && !encontrado){
            if(currentMousePos.x >= $("#trafico_animais_fim_salvando").offset().left || currentMousePos.y >=$("#trafico_animais_fim_salvando").offset().top){
                alert('encontrado');
                encontrado = true;
            }
            await sleep(tempoGuarda/10)
        }
        guardaVolta();
    }
}

function guardaVolta(){
    animacao_guarda = $("#trafico_animais_guarda").animate({height: '10%'}, tempoGuarda, function(){andando = false});
}

function guardaAnda(){
    if(!encontrado){
        andando = true;
        animacao_guarda = $("#trafico_animais_guarda").animate({height: '70%'}, tempoGuarda, procura);
    }
}