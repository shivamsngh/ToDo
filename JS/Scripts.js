
function showAddModal(){
    $(".modal").css("visibility","visible");

}

$(document).on('click','.close',function(){
    

  $(".modal").css("visibility","hidden");

});

function addTask(){
    var subject = $("#newTaskSubject").val();
    var desc = $("#newTaskDesc").val();    
    var jsonData = {Subject: subject, Description: desc};
    localStorage.setItem('taskList', JSON.stringify(jsonData));
    showTask();
}

function showTask(){
    var jsonData=JSON.parse(localStorage.getItem("taskList"));
    $("#tasks").html("<li><a href='#' id='list'>" + jsonData.Subject +"</a></t>"+"<span class='hide'>"+jsonData.Description+"</span></li>");
}

$(document).on('click','#list',function(){
    

  $(".hide").css("visibility","visible");

});


    
    