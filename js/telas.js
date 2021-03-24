var tela_atual = 'inicio';
var comunicacao_parte = 'inicio';
var primeira_vez_floresta = true;

var tela_queimadas_resgate = false;
var tela_queimadas_apaga = false;
var tela_trafico_animais = false;
var tela_desmatamento = false;
var tela_poluicao = false;


var animal_onca = false;
var animal_harpia = false;
var animal_tucano = false;
var animal_anta = false;
var animal_boto = false;
var animal_jacaretinga = false;
var animal_peixe_boi = false;
var animal_pirarucu = false;


// Função para troca de tela, trocando fundo, escondendo a tela antiga e mostrando a nova tela
function altera_tela(tela){
    $("#voltar_btn").show();
    $("#main_div").removeClass(tela_atual);
    $("#main_div").addClass(tela);
    $("#"+tela_atual).hide();
    $("#"+tela).show();    
    $("#comunica").hide();
    $('#main_div').css("cursor",'url("assets/tela/apontador_seta.png"), auto');
    tela_atual = tela;
    muda_comunicacao('inicio');
    switch(tela){
        case 'floresta':
            if(primeira_vez_floresta){ proxima_fala(); primeira_vez_floresta = false};
            sairJogos();
        break;
        case 'inicio':
            $("#voltar_btn").hide();

        break;
        case 'trafico_animais':
            altera_emocao_julia('triste');
            proxima_fala();
        break;
        case 'queimadas_resgatar':
            altera_emocao_julia('triste');
            proxima_fala();
        break;
        case 'queimadas_apagar':
            altera_emocao_julia('normal');
            proxima_fala();
        break;
        case 'poluicao':
            altera_emocao_julia('triste');
            proxima_fala();
        break;
        case 'desmatamento':
            altera_emocao_julia('triste');
            muda_comunicacao('inicio_triste');
            proxima_fala();
        break;
        case 'sede':
            atualiza_animais_bloqueados();
            altera_emocao_julia('feliz');
            muda_comunicacao('inicio');
            proxima_fala();
        break;
        default:
    }
}


// Quando clica no botão informações, muda para a tela de informações do jogo
$("#info_btn").click(function(){
    altera_tela('info');
});

// Quando clica no botão como jogar, muda para a tela como jogar
$("#como_jogar_btn").click(function(){
    altera_tela('como_jogar');
});

// Quando clica no botão jogar, muda para a tela floresta
$("#jogar_btn").click(function(){
    altera_tela('floresta');
});


// Quando clica na floresta em chamas, altera para tela da queimada
$("#floresta_btn").click(function(){
    if(!animais_resgatados)
        altera_tela('queimadas_resgatar');
    else if(!fogo_apagado)
        altera_tela('queimadas_apagar');
});

// Quando clica no lago, altera para tela da poluição
$("#lago_btn").click(function(){
    altera_tela('poluicao');
});

// Quando clica na onça enjaulada, altera para tela de tráfico de animais
$("#animais_btn").click(function(){
    altera_tela('trafico_animais');
});

// Quando clica nos troncos, altera para tela do desmatamento
$("#reflorestamento_btn").click(function(){
    altera_tela('desmatamento');
});

// Quando clica na sede, altera para tela da sede
$("#sede_btn").click(function(){
    altera_tela('sede');
});

// Ações para o clique do botão de voltar, dependendo da tela atual do clique ele muda a tela e sai do jogo
$("#voltar_btn").click(function(){
    if(tela_atual == 'sede'){
        if(mostrando_info_animal){
            $(".sede_info").hide();
            $("#sede_menu").show();
            mostrando_info_animal = false;
        }else{
            altera_tela('floresta');
        }
    }else if(tela_atual == 'info' || tela_atual == 'como_jogar'){
        altera_tela('inicio');
    }else if(tela_atual == 'trafico_animais'){
        sair_fase_trafico_animais();
        $("#main_div").attr('class','');
        altera_tela('floresta');
    }else if(tela_atual == 'trafico_animais'){
        sair_fase_poluicao();
    }else if(tela_atual == 'floresta'){
        $("#main_div").attr('class','');
        altera_tela('inicio');
    }else{
        $("#main_div").attr('class','');
        altera_tela('floresta');
    }
    $("#comunica").hide();
});