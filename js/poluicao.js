var lixoAtual = null;
var timeouts = [{time : null,executou : false},{time : null,executou : false},{time : null,executou : false},{time : null,executou : false},
    {time : null,executou : false},{time : null,executou : false},{time : null,executou : false},{time : null,executou : false},{time : null,executou : false},
    {time : null,executou : false},{time : null,executou : false}];
var itens = [];
var pausado = false;
var contador_item = 0;
var contador_jogados = 0;
var limite_lixo = 3;
var id_cria;
var id_repete;
function iniciarPoluicao(){
    $("#poluicao").show();
    $('html').css("cursor",'url("assets/lixo/rede.png") 50 0, auto');
    iniciaLixo();
}
function iniciaLixo(){
    id_repete = setInterval(frame, 2500);
    function frame() {
        if(!pausado){
            contador_item++;
            if(contador_item >= limite_lixo)
                clearInterval(id_repete);
            var esteira = Math.floor(Math.random() * 2)+1;
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
            item.id = 'item'+contador_item;
            item.className = "poluicao_item "+lixeira;
            $(item).click(function(){
                if(lixoAtual == null){
                    $(this).hide();
                    item.animacao.stop();
                    lixoAtual = item;
                    switch(item.className){
                        case 'poluicao_item plastico':
                            $('html').css("cursor",'url("assets/lixo/rede_plastico.png") 50 0, auto');
                        break;
                        case 'poluicao_item papel':
                            $('html').css("cursor",'url("assets/lixo/rede_papel.png") 50 0, auto');
                        break;
                        case 'poluicao_item metal':
                            $('html').css("cursor",'url("assets/lixo/rede_metal.png") 50 0, auto');
                        break;
                        case 'poluicao_item vidro':
                            $('html').css("cursor",'url("assets/lixo/rede_vidro.png") 50 0, auto');
                        break;
                    }
                    
                }
            });
            $("#poluicao_esteira"+esteira).append(item);
            item.animacao = $(item).animate({left: '92%'},15000,function(){if(lixoAtual != item ){ /*(item).remove();*/ console.log('errou');}});
            itens.push(item);
        }
    }

    /*for(var i = 0; i < 10; i ++) criarItem(i);
    function criarItem(contador){
        var esteira = Math.floor(Math.random() * 2);
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
        item.id = 'item'+contador;
        item.className = "poluicao_item "+lixeira;
        //item.style.display = 'none';
        $(item).click(function(){
            if(lixoAtual == null){
                $(this).hide();
                item.animacao.stop();
                lixoAtual = item;
                switch(item.className){
                    case 'poluicao_item plastico':
                        $('html').css("cursor",'url("assets/lixo/rede_plastico.png") 50 0, auto');
                    break;
                    case 'poluicao_item papel':
                        $('html').css("cursor",'url("assets/lixo/rede_papel.png") 50 0, auto');
                    break;
                    case 'poluicao_item metal':
                        $('html').css("cursor",'url("assets/lixo/rede_metal.png") 50 0, auto');
                    break;
                    case 'poluicao_item vidro':
                        $('html').css("cursor",'url("assets/lixo/rede_vidro.png") 50 0, auto');
                    break;
                }
                
            }
        });
        $("#poluicao_esteira"+esteira).append(item);
        setTimeout(enviar(item), 2000*contador);
        /*console.log('criou');
        item.animacao = $(item).animate({left: '92%'},15000,function(){if(lixoAtual != item ){ (this).remove(); console.log('errou');}});
        itens.push(item);*/
    /*}*/
}
function sairSujeita(){
    $("#poluicao").hide();
    $('html').css("cursor",'default');
    for(var i = 0; i < timeouts.length; i++){
        clearTimeout(timeouts[i].time);
    }
    for(var i = 0; i < itens.length; i++){
        $(itens[i]).remove();
    }
}
function pausar(){
    pausado = true;
    for(var i = 0; i < itens.length; i++){
        itens[i].animacao.stop();
    }
}

function subtrairPercet(v1,v2){
    v1 = parseInt(v1.split('%')[0]);
    v2 = parseInt(v2.split('%')[0]);
    return v1-v2+'%';
}

function erroLixo(){
    mudaHumorJulia('triste');
    muda_comunicacao('errou');
    proxima_fala();
}
function continuar(){
    var duration = 15000;
    var tamanho = parseInt($("#main_div").css('width'));
    for(var i = 0; i < itens.length; i++){
        var cur = parseInt($(itens[i]).css('left'));
        if(lixoAtual != itens[i])
            itens[i].animacao = $(itens[i]).animate({ "left": '92%' }, duration*((tamanho-cur)/tamanho),function(){if(lixoAtual != itens[i]){/*$(this).remove();*/console.log('errou');}});
    }
    pausado = false;
}
function jogarLixo(lixeira){
    if(lixoAtual != null){
        if($("html").css('cursor').includes(lixeira)){
            $(lixoAtual).remove();
            lixoAtual = null;
            $('html').css("cursor",'url("assets/lixo/rede.png") 50 0, auto');
            contador_jogados++;
            if(contador_jogados == limite_lixo){
                mudaHumorJulia('feliz');
                muda_comunicacao('fim');
                proxima_fala();
            }
        }else{
            pausar();
            erroLixo();
            //alert('errou tenta denovo');
        }
    }
}
function subtrairPx(v1, v2){
    v1 = parseInt(v1.split('px')[0]);
    v2 = parseInt(v2.split('px')[0]);
    return v1-v2+'px';
}
