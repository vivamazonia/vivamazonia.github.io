var id_aumento_fogo;
var harpia_encontrada = false;
var tucano_encontrado = false;
var fogo_apagado = false;

/* Função para iniciar jogo queimadas */
function comeca_fase_queimadas(){
    $(".local-queimada").addClass('floresta-verde-queimada');
    for(var i = 0; i < 5;i++)
        inicia_incendio_area_aleatoria(true);
    $("#queimadas").show();
    $(".local-queimada").show();
    id_aumento_fogo = window.setInterval(inicia_incendio_area_aleatoria, 2000, false);
}

/* Função altera fundo para onça */
function prepara_fase_resgate_onça(){
    $("#main_div").addClass('queimadas_resgatar_onça');
    muda_comunicacao('onça');
    proxima_fala();
}

/* Função altera fundo para aves */
function prepara_fase_resgate_aves(){
    altera_emocao_julia('triste');
    $("#main_div").addClass('queimadas_resgatar_aves');
    muda_comunicacao('aves');
    proxima_fala();
}

/* Função altera fundo para anta */
function prepara_fase_resgate_anta(){
    altera_emocao_julia('triste');
    $("#main_div").addClass('queimadas_resgatar_anta');
    muda_comunicacao('anta');
    proxima_fala();
}

 // Função para quando toda a floresta estiver livre, vitória
function todos_fogos_apagados(){
    altera_emocao_julia('feliz');
    muda_comunicacao('vitoria');
    fogo_apagado = true;
    clearInterval(id_aumento_fogo);
    proxima_fala();
}

// Função para quando toda a floresta estiver queimada, derrota
function toda_floresta_queimada(){
    altera_emocao_julia('triste');
    muda_comunicacao('derrota');
    clearInterval(id_aumento_fogo);
    proxima_fala();
}

// Função para clique no local da queimada, se estiver pegando fogo, apaga    
$(".local-queimada").click(function(){
    let vermelho = $(this).hasClass("floresta-fogo-queimada");
    if(vermelho){
        $(this).removeClass('floresta-fogo-queimada');
        $(this).addClass('floresta-verde-queimada');
    }
});

// Verifica se possui área não queimada
function possui_area_nao_queimada(){
    for(let i = 1; i <=6; i++){
        for(let j = 1; j <= 10; j++){
            if($(".linha"+i+" .local-queimada:nth-child("+j+")").hasClass('floresta-verde-queimada') == true){
                return true;
            }
        }
    }
    return false;
}

// Verifica se possui área queimadas
function possui_area_queimada(){
    for(let i = 1; i <=6; i++){
        for(let j = 1; j <= 10; j++){
            if($(".linha"+i+" .local-queimada:nth-child("+j+")").hasClass('floresta-fogo-queimada') == true){
                return true;
            }
        }
    }
    return false;
}

// Inicia um incendio numa área aleatorio
function inicia_incendio_area_aleatoria(inicio){
    if(!inicio && !possui_area_queimada()){
        todos_fogos_apagados();
    }else{
        let vermelho = false;
        do{
            let linha = Math.floor(Math.random() * Math.floor(6))+1;
            let coluna = Math.floor(Math.random() * Math.floor(10))+1;
            if($(".linha"+linha+" .local-queimada:nth-child("+coluna+")").hasClass('floresta-verde-queimada')){
                $(".linha"+linha+" .local-queimada:nth-child("+coluna+")").removeClass('floresta-verde-queimada');
                $(".linha"+linha+" .local-queimada:nth-child("+coluna+")").addClass('floresta-fogo-queimada');
                vermelho = false;
            }else if(possui_area_nao_queimada()){
                vermelho = true;
            }else{
                toda_floresta_queimada();
                vermelho = false;
            }
        }while(vermelho);

    }
}

/* Função para mecânica de resgate da onça, marca flag para sede */
$("#queimadas_resgatar_onça").click(function(){
    animal_onca = true;
    altera_emocao_julia('feliz');
    $("#main_div").removeClass('queimadas_resgatar_onça');
    $("#queimadas_resgatar_onça").hide();
    muda_comunicacao('encontrado_onça');
    proxima_fala();
});

/* Função para mecânica de resgate da harpia, marca flag para sede */
$("#queimadas_resgatar_harpia").click(function(){
    harpia_encontrada = true;
    animal_harpia = true;
    $("#queimadas_resgatar_harpia").hide();
    if(tucano_encontrado && harpia_encontrada){
        $("#main_div").removeClass('queimadas_resgatar_aves');
        altera_emocao_julia('feliz');
        muda_comunicacao('encontrado_aves');
        proxima_fala();
    }
});

/* Função para mecânica de resgate da tucano, marca flag para sede */
$("#queimadas_resgatar_tucano").click(function(){
    tucano_encontrado = true;
    animal_tucano = true;
    $("#queimadas_resgatar_tucano").hide();
    if(tucano_encontrado && harpia_encontrada){
        altera_emocao_julia('feliz');
        $("#main_div").removeClass('queimadas_resgatar_aves');
        muda_comunicacao('encontrado_aves');
        proxima_fala();
    }
});

/* Função para mecânica de resgate da anta, marca flag para sede */
$("#queimadas_resgatar_anta").click(function(){
    animal_anta = true;
    altera_emocao_julia('feliz');
    $("#main_div").removeClass('queimadas_resgatar_anta');
    $("#queimadas_resgatar_anta").hide();
    muda_comunicacao('encontrado_anta');
    proxima_fala();
});