function inicarSede(){
    $("#sede").show();
    if(animal_onca){
        $("#sede_onça .bloqueado").hide();
    }else{
        $("#sede_onça .bloqueado").show();
    }
    if(animal_harpia){
        $("#sede_harpia .bloqueado").hide();
    }else{
        $("#sede_harpia .bloqueado").show();
    }
    if(animal_tucano){
        $("#sede_tucano .bloqueado").hide();
    }else{
        $("#sede_tucano .bloqueado").show();
    }
    if(animal_anta){
        $("#sede_anta .bloqueado").hide();
    }else{
        $("#sede_anta .bloqueado").show();
    }
    if(animal_boto){
        $("#sede_boto .bloqueado").hide();
    }else{
        $("#sede_boto .bloqueado").show();
    }
    if(animal_jacaretinga){
        $("#sede_jacaretinga .bloqueado").hide();
    }else{
        $("#sede_jacaretinga .bloqueado").show();
    }
    if(animal_peixe_boi){
        $("#sede_peixe_boi .bloqueado").hide();
    }else{
        $("#sede_peixe_boi .bloqueado").show();
    }
    if(animal_pirarucu){
        $("#sede_pirarucu .bloqueado").hide();
    }else{
        $("#sede_pirarucu .bloqueado").show();
    }
}

$("#sede_onça").click(function(){
    if($("#sede_onça .bloqueado").css('display') == 'block'){
        mudaHumorJulia('normal');
        muda_comunicacao('animal_bloqueado');
        proxima_fala();
    }else{
        $("#sede_menu").hide();
        info_animal = true;
        $("#sede_onça_info").show();
    }
});
$("#sede_boto").click(function(){
    if($("#sede_boto .bloqueado").css('display') == 'block'){
        mudaHumorJulia('normal');
        muda_comunicacao('animal_bloqueado');
        proxima_fala();
    }else{
        $("#sede_menu").hide();
        info_animal = true;
        $("#sede_boto_info").show();
    }
});
$("#sede_pirarucu").click(function(){
    if($("#sede_pirarucu .bloqueado").css('display') == 'block'){
        
        mudaHumorJulia('normal');
        muda_comunicacao('animal_bloqueado');
        proxima_fala();
    }else{
        $("#sede_menu").hide();
        info_animal = true;
        $("#sede_pirarucu_info").show();
    }
});
$("#sede_anta").click(function(){
    if($("#sede_anta .bloqueado").css('display') == 'block'){
        
        mudaHumorJulia('normal');
        muda_comunicacao('animal_bloqueado');
        proxima_fala();
    }else{
        $("#sede_menu").hide();
        info_animal = true;
        $("#sede_anta_info").show();
    }
});
$("#sede_harpia").click(function(){
    if($("#sede_harpia .bloqueado").css('display') == 'block'){
        
        mudaHumorJulia('normal');
        muda_comunicacao('animal_bloqueado');
        proxima_fala();
    }else{
        $("#sede_menu").hide();
        info_animal = true;
        $("#sede_harpia_info").show();
    }
});
$("#sede_tucano").click(function(){
    if($("#sede_tucano .bloqueado").css('display') == 'block'){
        
        mudaHumorJulia('normal');
        muda_comunicacao('animal_bloqueado');
        proxima_fala();
    }else{
        $("#sede_menu").hide();
        info_animal = true;
        $("#sede_tucano_info").show();
    }
});
$("#sede_jacaretinga").click(function(){
    if($("#sede_jacaretinga .bloqueado").css('display') == 'block'){
        
        mudaHumorJulia('normal');
        muda_comunicacao('animal_bloqueado');
        proxima_fala();
    }else{
        $("#sede_menu").hide();
        info_animal = true;
        $("#sede_jacaretinga_info").show();
    }
});
$("#sede_peixe_boi").click(function(){
    if($("#sede_peixe_boi .bloqueado").css('display') == 'block'){
        
        mudaHumorJulia('normal');
        muda_comunicacao('animal_bloqueado');
        proxima_fala();
    }else{
        $("#sede_menu").hide();
        info_animal = true;
        $("#sede_peixe_boi_info").show();
    }
});