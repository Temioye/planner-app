
// $(document).ready(function() {
//     console.log("Ready!");
//     });

var today = moment()
$("#currentDay").text(today.format("dddd MMMM Do"));

// var currentHour = moment().format("HH");


$(".taskRow").each(function() {
        var taskRow = $(this).attr("id").split("-")[1];
  
     if (currentHour == taskRow) {
            $(this).addClass("present");
            $(this).children(".description").addClass("present");   
    
     } else if (currentHour < taskRow) {
            $(this).removeClass("present");
            $(this).addClass("future");

        } else if (currentHour > taskRow) {
            $(this).removeClass("future");
            $(this).addClass("past");
        }
});


var tasks = {
    "9am": [],
    "10am": [],
    "11am": [],
    "12pm": [],
    "1pm": [],
    "2pm": [],
    "3pm": [],
    "4pm": [],
    "5pm": []
};

var setTasks = function() {
    /* add tasks to localStorage */
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

var getTasks = function() {
    /* load the tasks from localStorage and create tasks in the right row */

    var loadedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (loadedTasks) {
        tasks = loadedTasks

        // for each key/value pair in tasks, create a task
        $.each(tasks, function(hour, task) {
            var hourDiv = $("#" + hour);
            createTask(task, hourDiv);
        })
    }

    // make sure the past/current/future time is reflected
    auditTasks()
}


$(".saveBtn").click(function (event) {
        event.preventDefault();
        var value = $(this).siblings(".time-block").val();
        var time = $(this).parent().attr("id").split("-")[1];
        
    });

    


      
    
   $("#clearFieldsBtn").click(function(event) {
        event.preventDefault;
        $("textArea").val("");
        localStorage.clear();
    });