$("#sede_menu div").click(function(){
    $("#sede_menu").hide();
    info_animal = true;
    $("#"+$(this).attr('id')+"_info").show();
});