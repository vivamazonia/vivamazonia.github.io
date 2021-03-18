var lixoAtual = null;
var timeouts = [];
var itens = [];
function iniciarPoluicao(){
    $("#poluicao").show();
    $('html').css("cursor",'url("assets/lixo/rede.png"), auto');
    console.log($('html').css("cursor"));
    for(var i = 0; i < 10; i++){
        timeouts[i] = setTimeout(function (){criarItem(Math.floor(Math.random() * 2)+1) },2000*i);
    }
}
function sairSujeita(){
    $("#poluicao").hide();
    $('html').css("cursor",'default');
    for(var i = 0; i < 15; i++){
        clearTimeout(timeouts[i]);
    }
    for(var i = 0; i < itens.length; i++){
        $(itens[i]).remove();
    }
}
function jogarLixo(lixeira){
    if(lixoAtual != null){
        if($("html").css('cursor').includes(lixeira)){
            $(lixoAtual).remove();
            lixoAtual = null;
            $('html').css("cursor",'url("assets/lixo/rede.png"), auto');
        }else{
            //alert('errou tenta denovo');
        }
    }
}
function subtrairPx(v1, v2){
    v1 = parseInt(v1.split('px')[0]);
    v2 = parseInt(v2.split('px')[0]);
    return v1-v2+'px';
}

function criarItem(esteira){
    var item = document.createElement('div');
    var tipo = Math.floor(Math.random() * 4); 
    var lixeira = '';
    switch(tipo){
        case 0:
            lixeira = 'plastico';
        break;
        case 1:
            lixeira = 'papel';
        break;
        case 2:
            lixeira = 'metal';
        break;
        case 3:
            lixeira = 'vidro';
        break;
    }
    item.className = "poluicao_item "+lixeira;
    $(item).click(function(){
        if(lixoAtual == null){
            $(this).hide();
            item.animacao.stop();
            lixoAtual = item;
            switch(item.className){
                case 'poluicao_item plastico':
                    $('html').css("cursor",'url("assets/lixo/rede_plastico.png"), auto');
                break;
                case 'poluicao_item papel':
                    $('html').css("cursor",'url("assets/lixo/rede_papel.png"), auto');
                break;
                case 'poluicao_item metal':
                    $('html').css("cursor",'url("assets/lixo/rede_metal.png"), auto');
                break;
                case 'poluicao_item vidro':
                    $('html').css("cursor",'url("assets/lixo/rede_vidro.png"), auto');
                break;
            }
            
        }
    });
    $("#poluicao_esteira"+esteira).append(item);
    item.animacao = $(item).animate(
    {
        left: '92%'
    },15000,function(){if(lixoAtual != item ){ (this).remove(); console.log('errou');}});
    itens.push(item);
}