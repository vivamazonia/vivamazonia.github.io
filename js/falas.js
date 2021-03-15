var falas = {
    "home" : [
        "Bem vindo",
        "Ao jogo",
        "VIVAMAZONIA"
    ],
    "queimada" : [
        "Bem vindo",
        "Ao jogo",
        "queimada"
    ],
    "sujeira" : [
        "Bem vindo",
        "Ao jogo",
        "sujeira"
    ],
    "trafico" : [
        "Bem vindo",
        "Ao jogo",
        "trafico"
    ],
    "desmatamento" : [
        "Bem vindo",
        "Ao jogo",
        "desmatamento"
    ]
}
var index = -1;
var max_index = 0;
function proxima_fala(){
    $("#comunica").show();
    max_index = falas[tela_atual].length;
    index += 1;
    $("#texto").html(falas[tela_atual][index]);
    if(max_index == index){
        $("#comunica").hide();
        switch(tela_atual){
            case 'home':

            break;
            case 'queimada':
                iniciarQueimadas();
            break;
            case 'trafico':
                iniciarTraficoAnimais();
            break;
            case 'desmatamento':
                iniciarDesmatamento();
            break;
            case 'sujeira':
                iniciarSujeira();
            break;
        }
    }
}