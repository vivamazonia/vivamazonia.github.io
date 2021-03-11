var lixoAtual = null;
var timeouts = [];
var itens = [];
function iniciarSujeira(){
    $("#sujeira").show();
    for(var i = 0; i < 3; i++){
        timeouts[i] = setTimeout(function (){criarItem(Math.floor(Math.random() * 3)+1) },2000*i);
    }
}
function sairSujeita(){
    $("#sujeira").hide();
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
            $('html').css("cursor",'default');
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
            lixeira = 'happy';
        break;
        case 1:
            lixeira = 'sad';
        break;
        case 2:
            lixeira = 'meh';
        break;
        case 3:
            lixeira = 'heart';
        break;
    }
    item.className = "sujeira_item "+lixeira;
    $(item).click(function(){
        if(lixoAtual == null){
            $(this).hide();
            item.animacao.stop();
            lixoAtual = item;
            switch(item.className){
                case 'sujeira_item happy':
                    $('html').css("cursor",'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/happy.png"), auto');
                break;
                case 'sujeira_item sad':
                    $('html').css("cursor",'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/sad.png"), auto');
                break;
                case 'sujeira_item meh':
                    $('html').css("cursor",'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/meh.png"), auto');
                break;
                case 'sujeira_item heart':
                    $('html').css("cursor",'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/heart.png"), auto');
                break;
            }
            
        }
    });
    $("#sujeira_esteira"+esteira).append(item);
    item.animacao = $(item).animate(
    {
        left: subtrairPx($("#sujeira_esteira"+esteira).css('width'),$(item).css('width'))
    },15000,function(){if(lixoAtual != item ){ (this).remove(); console.log('errou');}});
    itens.push(item);
}