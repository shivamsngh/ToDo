function showAddModal(){
    $(".modal").css("visibility","visible");

}

$(document).on('click','.close',function(){
    

  $(".modal").css("visibility","hidden");

});
$(document).on('click','#list',function(){
    

  $(".hide").css("visibility","visible");

});