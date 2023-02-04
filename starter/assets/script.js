$(document).ready(function () {
  console.log("Ready!");
});

// display current day and date
var today = moment();
$("#currentDay").text(today.format("dddd MMMM Do"));

var currentHour = moment().format("HH");

// add class 'past', 'present' or 'future' based on current hour
$(".taskRow").each(function () {
  var taskRow = $(this).attr("id").split("-")[1];

  if (currentHour == taskRow) {
    $(this).addClass("present");
  } else if (currentHour < taskRow) {
    $(this).removeClass("present");
    $(this).addClass("past");
  } else if (currentHour > taskRow) {
    $(this).removeClass("past");
    $(this).addClass("future");
  }
});

// save input when save button is clicked
$(".saveBtn").on("click", function () {
  var taskRow = $(this).parent().attr("id");
  var taskText = $(this).siblings(".description").val();
  localStorage.setItem(taskRow, taskText);
});

//get item from local storage
$(".taskRow").each(function () {
  var currentRowId = $(this).attr("id");
  var taskText = localStorage.getItem(currentRowId);
  if (taskText != undefined) {
    $(this).children(".description").val(taskText);
  }
});

//clear items when button is clicked
$("#clearFieldsBtn").click(function (event) {
  event.preventDefault;
  $("textArea").val("");
  localStorage.clear();
});
