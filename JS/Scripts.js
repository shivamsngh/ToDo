
function showAddModal(){
    $(".modal").css("visibility","visible");

}

$(document).on('click','.close',function(){
    

  $(".modal").css("visibility","hidden");

});



function addTask(){
    if (!window.indexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB.")
    }
    else {
        /*var subject = $("#newTaskSubject").val();
        var desc = $("#newTaskDesc").val();    
        var jsonData = {Subject: subject, Description: desc};
        localStorage.setItem('taskList', JSON.stringify(jsonData));*/
        window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
        window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
    var subject = $("#newTaskSubject").val();
        var desc = $("#newTaskDesc").val(); 
    var tdData=[{}];
       
    var request = db.transaction(["tdData"], "readwrite")
   .objectStore("tdData")
   .add({ subject: subject, description: desc});
   
   request.onsuccess = function(event) {
      alert("New task "+subject+"  has been created.");
   };
   
   request.onerror = function(event) {
      alert("Unable to add data\r\nIt already exist in your database! ");
   }
}
    

    showTask();
}

function showTask(){
    var jsonData=JSON.parse(localStorage.getItem("taskList"));
    $("#tasks").html("<li><a href='#' id='list'>" + jsonData.Subject +"</a></t>"+"<span class='hide'>"+jsonData.Description+"</span></li>");
}

$(document).on('click','#list',function(){
$(".hide").css("visibility","visible");

});


    
    