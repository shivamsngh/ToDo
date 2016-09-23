   window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
   //prefixes of window.IDB objects
   window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
   window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

    //Checking if IndexDB is not supported.
    if (!window.indexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB.")
    }  
    var db={}; 
    var request = window.indexedDB.open("todoData", 1);   
    function initializeDb() {    
    console.log("initializing");
    const taskList = [{ subject: "subject", description: "desc" }]; //initializing the objectStore
    //Creating DB    
    request.onerror = function (event) {
        console.log("error: ");
    };
    request.onsuccess = function (event) {
       db = request.result;
        console.log("DB Exists: " + db);
        showData(db);
        };
    request.onupgradeneeded = function (event) {
        console.log("Upgrade Needed");
       db = event.target.result;
        var objectStore = db.createObjectStore("taskList", { autoIncrement: true });
        for (var i in taskList) {
            objectStore.add(taskList[i]);
        }
    }
    }
    function showData(){      
     var transaction=db.transaction(["taskList"], "readwrite");
      var objectStore = transaction.objectStore("taskList");
       objectStore.openCursor().onsuccess = function(event) {
      var cursor = event.target.result;
      
      if (cursor) {
         $("#tasks").append("<li>"+cursor.key + " is " + cursor.value.subject + ", Description: " + cursor.value.description+" </li>");
         cursor.continue();
      }
      
      /*else {
         alert("No more entries!");
      }*/
   };
    }
    //Inserting in Database
    function add() {
        var subject = $("#subject").val();
        var desc = $("#desc").val();
        var request = db.transaction(["taskList"], "readwrite").objectStore("taskList").add({subject: subject, description: desc });
        request.onsuccess = function (event) {
            $("#tasks").append("<li>Subject: "+subject+"Description is: "+desc+"</li>");
            console.log(subject+" added to your database.");
        };
        request.onerror = function (event) {
            console.log("Unable to add data\r\n Already exist in your database! ");
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
              $("#list").html("<li>"+request.result.key+" "+request.result.subject+" "+request.reslut.description+"</li>");
          }
      };
    }

