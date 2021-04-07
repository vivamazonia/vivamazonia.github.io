var index = -1;
var max_index = 0;
$('html').css("cursor",'url("assets/tela/apontador_seta.png") 50 0, auto');

// Função de controle das imagens da júlia na comunicação
function altera_emocao_julia(humor){
    switch(humor){
        case 'normal':
            $("#comunica_personagem").css('background-image','url(assets/julia1.png)');
            $("#comunica_personagem").css('background-size','100%');
            break;
        case 'triste':
            $("#comunica_personagem").css('background-image','url(assets/julia2.png)');
            $("#comunica_personagem").css('background-size','94%');
        break;
        case 'feliz':
            $("#comunica_personagem").css('background-image','url(assets/julia3.png)');
            $("#comunica_personagem").css('background-size','100%');
            break;
    }
}

//Função para próxima fala, com o fim da fala executa alguma ação específica, como preparar ou iniciar jogo
function proxima_fala(){
    $("#comunica").show();
    max_index = falas[tela_atual][comunicacao_parte].length;
    index += 1;
    $("#texto").html(falas[tela_atual][comunicacao_parte][index]);
    if(max_index == index){
        $("#comunica").hide();
        switch(tela_atual){
            case 'floresta':
                //proxima_fala();
            break;
            case 'queimadas_resgatar':
                switch(comunicacao_parte){
                    case "inicio":
                        prepara_fase_resgate_onça();
                    break;
                    case "onça":
                        $("#queimadas_resgatar_onça").show();
                    break;
                    case "encontrado_onça":
                        prepara_fase_resgate_aves();
                    break;
                    case "aves":
                        $("#queimadas_resgatar_harpia, #queimadas_resgatar_tucano").show();
                    break;
                    case "encontrado_aves":
                        prepara_fase_resgate_anta();
                    break;
                    case "anta":
                        $("#queimadas_resgatar_anta").show();
                    break;
                    case "encontrado_anta":
                        animais_resgatados = true;
                        altera_emocao_julia('normal');
                        altera_tela('queimadas_apagar');
                    break;
                }
            break;
            case 'queimadas_apagar':
                switch(comunicacao_parte){
                    case "inicio":
                        comeca_fase_queimadas();
                    break;
                    case "vitoria":
                        altera_tela('floresta');
                    break;
                    case "derrota":
                        comeca_fase_queimadas();
                    break;
                }
            break;
            case 'trafico_animais':
                switch(comunicacao_parte){
                    case "inicio":
                        iniciar_fase_trafico_animais('jacaretinga');
                    break;
                    case "resgatado_jacaretinga":
                        altera_emocao_julia('normal');
                        prepara_fase_resgate_boto();
                    break;
                    case "resgate_boto":
                        posicaoAtual = {x:0, y:0};
                        iniciar_fase_trafico_animais('boto');
                    break;
                    case "resgatado_boto":
                        altera_emocao_julia('normal');
                        prepara_fase_resgate_pirarucu();
                    break;
                    case "resgate_pirarucu":
                        posicaoAtual = {x:0, y:0};
                        iniciar_fase_trafico_animais('pirarucu');
                    break;
                    case "resgatado_pirarucu":
                        altera_emocao_julia('normal');
                        prepara_fase_resgate_peixe_boi();
                    break;
                    case "resgate_peixe_boi":
                        posicaoAtual = {x:0, y:0};
                        iniciar_fase_trafico_animais('peixe_boi');
                    break;
                    case "resgatado_peixe_boi":
                        $("#main_div").attr('class','');
                        altera_tela('floresta');
                    break;
                    case "encontrado":
                        reiniciar_fase_trafico_animais();
                    break;
                }
            break;
            case 'desmatamento':
                switch(comunicacao_parte){
                    case 'inicio_triste':
                        muda_comunicacao('inicio');
                        altera_emocao_julia('normal');
                        proxima_fala();
                    break;
                    case 'fim':
                        $("#desmatamento").hide();
                        altera_tela('floresta');
                    break;
                }
                comeca_fase_desmatamento();
            break;
            case 'poluicao':
                switch(comunicacao_parte){
                    case 'inicio':
                        comeca_fase_poluicao();
                    break;
                    case 'errou':
                        retomar_loop_lixos();
                    break;
                    case 'fim':
                        altera_tela('floresta');
                    break;
                }
            break;
            case 'sede':
                switch(comunicacao_parte){
                    case 'inicio':
                        muda_comunicacao('saber_mais');
                        proxima_fala();
                    break;
                }
            break;
        }
    }
}

// Muda próxima parte da comunicação e limpa o index
function muda_comunicacao(etapa){
    index = -1;
    comunicacao_parte = etapa;
}
