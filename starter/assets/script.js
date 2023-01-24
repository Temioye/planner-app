var today = moment()
$("#currentDay").text(today.format("dddd MMMM Do"));

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

$(".saveBtn").click(function (event) {
        event.preventDefault();
        var value = $(this).siblings(".task").val();
        var time = $(this).parent().attr("id").split("-")[1];
        localStorage.setItem(time,value);
    });


    
   