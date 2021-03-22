var falas = {
    "floresta" : {
        "inicio" : [
            "Clique no local para interagir!"
        ],
    },
    "queimadas_apagar" : {
        "inicio" : [
            "Agora vamos apagar"
        ],
        "vitoria" : [
            "Conseguimos controlar o incêndio!",
            "Vamos procurar outra atividade agora!"
        ],
        "derrota" : [
            "Não conseguimos controlar o incêndio!",
            "Vamos tentar novamente!"
        ]
    },
    "queimadas_resgatar" : {
        "inicio" : [
            "Não pode ser! Nossa floresta está em chamas!",
            "Temos que salvar os animais da floresta!"
        ],
        "onça" : [
            "Uma onça foi vista nas redondesas, temos que procurar a onça",
            "Se você achar clique que vamos resgatar"
        ],
        "encontrado_onça" : [
            "Muito bem! Resgatamos a onça!",
            "Ela será levada para a nossa sede para ser tratada e depois envolvida para um ambiente seguro.",
            "Você pode visitá-la e saber mais sobre ela clicando na nossa sede"
        ],
        "aves" : [
            "Uma harpia e um tucano foram vistos nas redondesas, temos que procurar eles",
            "Se você achar clique que vamos resgatar"
        ],
        "encontrado_aves" : [
            "Muito bem! Resgatamos a Harpia e o Tucano!",
            "Eles serão levados para a nossa sede para serem tratados e depois envolvidos para um ambiente seguro.",
            "Você pode visitá-los e saber mais sobre clicando na nossa sede"
        ],
        "anta" : [
            "Uma anta foi vista nas redondesas, temos que procurar ela",
            "Se você achar clique que vamos resgatar"
        ],
        "encontrado_anta" : [
            "Muito bem! Resgatamos a Anta!",
            "Ela será levada para a nossa sede para ser tratada e depois envolvida para um ambiente seguro.",
            "Você pode visitá-la e saber mais sobre clicando na nossa sede.",
            "Agora vamos apagar todo esse fogo!"
        ]
    },
    "poluicao" : {
        "inicio" : [
            "Vamos limpar"
        ]
    },
    "trafico_animais" : {
        "inicio" : [
            "Vamos salvar!"
        ],
        "resgate_boto" : [
            "Boto"
        ],
        "resgatado_boto" : [
            "Boto resgatado"
        ],
        "resgate_pirarucu" : [
            "Pirarucu"
        ],
        "resgatado_pirarucu" : [
            "Pirarurcu resgatado"
        ],
        "resgate_peixe_boi" : [
            "Peixe boi"
        ],
        "resgatado_peixe_boi" : [
            "Peixe boi resgatado"
        ],
        "encontrado" : [
            "Fomos encontrados!"
        ]
    },
    "desmatamento" : {
        "inicio" : [
            "Replantar!"
        ],
    },
    "greenpeace" : {
        "inicio" : [
            "Venha conhecer!"
        ],
    }
}
var index = -1;
var max_index = 0;
function proxima_fala(){
    $("#comunica").show();
    max_index = falas[tela_atual][comunicacao_parte].length;
    index += 1;
    $("#texto").html(falas[tela_atual][comunicacao_parte][index]);
    if(max_index == index){
        $("#comunica").hide();
        switch(tela_atual){
            case 'floresta':

            break;
            case 'queimadas_resgatar':
                switch(comunicacao_parte){
                    case "inicio":
                        resgate_onça();
                    break;
                    case "onça":
                        $("#queimadas_resgatar_onça").show();
                    break;
                    case "encontrado_onça":
                        resgate_aves();
                    break;
                    case "aves":
                        $("#queimadas_resgatar_harpia, #queimadas_resgatar_tucano").show();
                    break;
                    case "encontrado_aves":
                        resgate_anta();
                    break;
                    case "anta":
                        $("#queimadas_resgatar_anta").show();
                    break;
                    case "encontrado_anta":
                        animais_resgatados = true;
                        mudarTela('queimadas_apagar');
                    break;
                }
            break;
            case 'queimadas_apagar':
                switch(comunicacao_parte){
                    case "inicio":
                        iniciarQueimadas();
                    break;
                    case "vitoria":
                        mudarTela('floresta');
                    break;
                    case "derrota":
                        iniciarQueimadas();
                    break;
                }
            break;
            case 'trafico_animais':
                switch(comunicacao_parte){
                    case "inicio":
                        resgate_boto();
                    break;
                    case "resgate_boto":
                        iniciarTraficoAnimais('boto');
                    break;
                    case "resgatado_boto":
                        resgate_pirarucu();
                    break;
                    case "resgate_pirarucu":
                        iniciarTraficoAnimais('pirarucu');
                    break;
                    case "resgatado_pirarucu":
                        resgate_peixe_boi();
                    break;
                    case "resgate_peixe_boi":
                        iniciarTraficoAnimais('peixe_boi');
                    break;
                    case "resgatado_peixe_boi":
                        $("#main_div").attr('class','');
                        mudarTela('floresta');
                    break;
                    case "encontrado":
                        reiniciarTraficoAnimais();
                    break;
                }
            break;
            case 'desmatamento':
                iniciarDesmatamento();
            break;
            case 'poluicao':
                iniciarPoluicao();
            break;
        }
    }
}

function muda_comunicacao(etapa){
    index = -1;
    comunicacao_parte = etapa;
}