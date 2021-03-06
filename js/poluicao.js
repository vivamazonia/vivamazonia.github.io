var lixo_selecionado = null;
var lixos = [];
var loop_lixos_pausado = false;
var contador_item = 0;
var contador_acertos = 0;
var quantidade_lixos = 10;
var id_repete_lixos;
var tempo = 10000;

/* Função para iniciar o jogo */
function comeca_fase_poluicao(){
    $("#poluicao").show();
    $('#main_div').css("cursor",'url("assets/lixo/rede.png") 50 0, auto');
    loop_lixos();
}

/* Função para finalizar a fase ou voltar */
function sair_fase_poluicao(){
    loop_lixos_pausado = true;
    clearInterval(id_repete_lixos);
    $("#poluicao").hide();
    $('#main_div').css("cursor",'url("../assets/tela/apontador_seta.png"), auto');
    for(var i = 0; i < lixos.length; i++){
        $(lixos[i]).remove();
    }
}

/* Função para selecionar aleatoriamente o tipo do lixo */
function obter_lixo_aleatorio(){
    var lixeira = '';
    switch(Math.floor(Math.random() * 4)){
        case 0: lixeira = 'plastico'; break;
        case 1: lixeira = 'papel';    break;
        case 2: lixeira = 'metal';    break;
        case 3: lixeira = 'vidro';    break;
    }
    return lixeira;
}

/* Função para o loop de criação dos lixos */
function loop_lixos(){
    id_repete_lixos = setInterval(frame, 2500);
    function frame() {
        if(!loop_lixos_pausado){
            contador_item++;
            if(contador_item >= quantidade_lixos)
                clearInterval(id_repete_lixos);
            var esteira = Math.floor(Math.random() * 2)+1;
            var item = document.createElement('div');
            item.id = 'item'+contador_item;
            item.className = "poluicao_item "+obter_lixo_aleatorio();
            $(item).click(function(){seleciona_lixo(item);});
            $("#poluicao_esteira"+esteira).append(item);
            item.animacao = $(item).animate({left: '92%'},tempo,function(){});
            lixos.push(item);
        }
    }
}

/* Funcção para ação de seleção de lixo, onde vai alterar o cursor do mouse, pausa animação e esconder lixo*/
function seleciona_lixo(item){
    if(lixo_selecionado == null){
        $(item).hide();
        item.animacao.stop();
        lixo_selecionado = item;
        switch(item.className){
            case 'poluicao_item plastico':
                $('#main_div').css("cursor",'url("assets/lixo/rede_plastico.png") 50 0, auto');
            break;
            case 'poluicao_item papel':
                $('#main_div').css("cursor",'url("assets/lixo/rede_papel.png") 50 0, auto');
            break;
            case 'poluicao_item metal':
                $('#main_div').css("cursor",'url("assets/lixo/rede_metal.png") 50 0, auto');
            break;
            case 'poluicao_item vidro':
                $('#main_div').css("cursor",'url("assets/lixo/rede_vidro.png") 50 0, auto');
            break;
        }
        
    }
}

/* Funcção para definição das ações quando o lixo vai para a lixeira errada */
function lixo_local_errado(){
    altera_emocao_julia('triste');
    muda_comunicacao('errou');
    proxima_fala();
}

/* Funcção para definição das ações quando o lixo vai para a lixeira correta */
function lixo_local_certo(){
    $(lixo_selecionado).remove();
    lixo_selecionado = null;
    $('#main_div').css("cursor",'url("assets/lixo/rede.png") 50 0, auto');
    contador_acertos++;
    //Se a quantidade de acertos for igual ao máximo o jogo acaba
    if(contador_acertos == quantidade_lixos){
        altera_emocao_julia('feliz');
        muda_comunicacao('fim');
        proxima_fala();
    }
}

/* Função para pausar as animações e criação dos lixos */
function pausar_loop_lixos(){
    loop_lixos_pausado = true;
    for(var i = 0; i < lixos.length; i++){
        lixos[i].animacao.stop();
    }
}

/* Função para retomar as animações e criação dos lixos */
function retomar_loop_lixos(){
    var tamanho = parseInt($("#main_div").css('width'));
    for(var i = 0; i < lixos.length; i++){
        var cur = parseInt($(lixos[i]).css('left'));
        if(lixo_selecionado != lixos[i])
            lixos[i].animacao = $(lixos[i]).animate({ "left": '92%' }, tempo*((tamanho-cur)/tamanho),function(){});
    }
    loop_lixos_pausado = false;
}

$("#poluicao_lixeiras > div").click(function(){
    if(lixo_selecionado != null){
        if($("#main_div").css('cursor').includes(this.className)){
            lixo_local_certo();
        }else{
            pausar_loop_lixos();
            lixo_local_errado();
        }
    }
});