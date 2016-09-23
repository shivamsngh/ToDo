
function showAddModal(){
    $(".modal").css("visibility","visible");

}

$(document).on('click','.close',function(){
    

  $(".modal").css("visibility","hidden");

});
$(document).on('click','#list',function(){
    

  $(".hide").css("visibility","visible");

});
function readAll(){
     window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    //prefixes of window.IDB objects
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

    //Checking if IndexDB is not supported.
    if (!window.indexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB.")
    }
     var db={};
     var transaction=db.transaction(["taskList"], "readwrite");
      var objectStore = transaction.objectStore("taskList");
      var request=objectStore.get(key);
      request.onerror=function(event){
          alert("Unable to fetch data/data unavailable");
      };   
      request.onsuccess=function(event){
          if(request.result){
              $("#list").append("<li>"+request.result.key+" "+request.result.subject+" "+request.reslut.description+"</li>");
          }
      };

}



function insertDB() {  
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    //prefixes of window.IDB objects
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

    //Checking if IndexDB is not supported.
    if (!window.indexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB.")
    }
    //Creating the db 
    //var subject = $("#subject").val();
    //var desc = $("#desc").val();
    
    const taskList = [{ subject: "subject", description: "desc" }]; //initializing the objectStore

    //Creating DB
    var db={};
    var request = window.indexedDB.open("todoData", 1);
    request.onerror = function (event) {
        console.log("error: ");
    };

    request.onsuccess = function (event) {
        db = request.result;
        console.log("success: " + db);
        add();
        read();
    };

    request.onupgradeneeded = function (event) {
        console.log("Upgrade Needed");
        var db = event.target.result;
        var objectStore = db.createObjectStore("taskList", { autoIncrement: true });
        for (var i in taskList) {
            objectStore.add(taskList[i]);
        }
    }
    //Inserting in Database
    function add() {
        var subject = $("#subject").val();
        var desc = $("#desc").val();
        var request = db.transaction(["taskList"], "readwrite").objectStore("taskList").add({subject: subject, description: desc });

        request.onsuccess = function (event) {
            alert(subject+" added to your database.");
        };

        request.onerror = function (event) {
            alert("Unable to add data\r\n Already exist in your database! ");
        }

    }
    function read(){
     var transaction=db.transaction(["taskList"], "readwrite");
      var objectStore = transaction.objectStore("tsakList");
      var request=objectStore.get(key);
      request.onerror=function(event){
          alert("Unable to fetch data/dat unavailable");
      };   
      request.onsuccess=function(event){
          if(request.result){
              $("#list").append("<li>"+request.result.key+" "+request.result.subject+" "+request.reslut.description+"</li>");
          }
      };
    }
}
    
    