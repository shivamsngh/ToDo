
function showAddModal(){
    $(".modal").css("visibility","visible");

}

$(document).on('click','.close',function(){
    

  $(".modal").css("visibility","hidden");

});
$(document).on('click','#list',function(){
    

  $(".hide").css("visibility","visible");

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
<<<<<<< HEAD
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
    

=======
    var desc = $("#newTaskDesc").val();    
    /*var jsonData = {Subject: subject, Description: desc};
    localStorage.setItem('taskList', JSON.stringify(jsonData));*/
    
    //Now using IndexedDB
    
    //Creating Database
    saveInDB(subject, desc);
    
>>>>>>> ef7478e78597f650680380a1c82cd3a7489f0ff6
    showTask();
}
//Reading from DB
function showTask(){
    var jsonData=JSON.parse(localStorage.getItem("taskList"));
    $("#tasks").html("<li><a href='#' id='list'>" + jsonData.Subject +"</a></t>"+"<span class='hide'>"+jsonData.Description+"</span></li>");
}

<<<<<<< HEAD
$(document).on('click','#list',function(){
$(".hide").css("visibility","visible");
=======


//Initialize or Create DB

function onPageLoad() {
    var db = {
        name: 'todoDB',
        version: 1,
        instance: {},
        tasksList: {
            subject: subject,
            desc: description
        },
        defaultErrorHandler: function (e) {                 //Error Handling
            $$result.log(e);
        },
        setDefaultErrorHandler: function (request) {
            if ('onerror' in request) {
                request.onerror = db.defaultErrorHandler;
            }
            if ('onblocked' in request) {
                request.onblocked = db.defaultErrorHandler;
            }
        }
    }
    }
    

    var openDatabase = function () {
        var openRequest = indexedDB.open(db.name, db.version);
        openRequest.onupgradeneeded = function (e) {
            var newVersion = e.target.result;
            if (!newVersion.objectStorenames.contains(db.storeNames.tasksList)) {
                $$result.log('Creating<code>tasksList</code>');
>>>>>>> ef7478e78597f650680380a1c82cd3a7489f0ff6

            }
            db.setDefaultErrorHandler(openRequest);
            openRequest.onsuccess = function (e) {
                db.instance = e.target.result;
                $$result.log('Creating<code>tasksList</code>');
            }
        }
        var store = transaction.objectStore(db.storeName.tasksList);
        addRequest = store.add(task);
        $$result.log(task+'added');
    }

function saveInDB(subject, desc){
   
    var task={
        subject:subject,
        desc:desc
    };
    var transact = db.instance.transaction.objectStore([db.storeNames.tasksList], readwrite);

}
    
    