var atual = 'none';
var fase_planta_desmatamento = 'happy';
function sairDesmatamento(){
    $("#desmatamento").hide();
}
function mudar(tipo){
    atual = tipo;
    $('html').css("cursor",'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/'+tipo+'.png"), auto');
}
$(".planta_desmatamento").click(function(){
    console.log($(this).attr('class'));
    if($(this).hasClass(atual)){
        $(this).removeClass(atual);
        if(atual == 'happy'){
            $(this).addClass('sad');
        }else if(atual == 'sad'){
            $(this).addClass('meh');
        }else if(atual == 'meh'){
            $(this).addClass('heart');
        }if(atual == 'heart'){
            $(this).addClass('end');
        }
    }
});