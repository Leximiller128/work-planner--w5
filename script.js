//elements
let timeBlocksEl = $("#timeBlocks");
let currentDayEl = $("#currentDay");
let timeHour = moment().format("dddd, MMMM Do YYYY");
let mySchedule = [];
let currentHour = moment().get("hour");

//adds the date to the page
currentDayEl.append(timeHour);

//planner has time blocks from 9am-5pm (working hours only)
function currentTime(hour) {
  let myHour = moment(parseInt(hour));

  if (myHour.isSame(currentHour)) {
    ("present");
  } else if (myHour.isBefore(currentHour)) {
    ("past");
  } else if (myHour.isAfter(currentHour)) {
    ("furture");
  }
  console.log(myHour);
}

//for loop that runs through every hour of the planner **

//}

//timeblocks are color coded to indicate past, present and future

//user can click a timeblock and enter an event

//save button will save the information in the timblock

//text in the timeblock is saved in local storage
// Local Storage Feature

{
  $(".save-btn").click(function () {
    var hr9 = document.getElementById("9").value;
    localStorage.setItem("text9", hr9);
    var hr10 = document.getElementById("10").value;
    localStorage.setItem("text10", hr10);
    var hr11 = document.getElementById("11").value;
    localStorage.setItem("text11", hr11);
    var hr12 = document.getElementById("12").value;
    localStorage.setItem("text12", hr12);
    var hr13 = document.getElementById("13").value;
    localStorage.setItem("text13", hr13);
    var hr14 = document.getElementById("14").value;
    localStorage.setItem("text14", hr14);
    var hr15 = document.getElementById("15").value;
    localStorage.setItem("text15", hr15);
    var hr16 = document.getElementById("16").value;
    localStorage.setItem("text16", hr16);
    var hr17 = document.getElementById("17").value;
    localStorage.setItem("text17", hr17);
  });
}
//when the page refreshes, the saved events will still be there
// Display saved tasks
{
  var saved8 = localStorage.getItem("text8");
  document.getElementById("9").value = saved8;
  var saved9 = localStorage.getItem("text9");
  document.getElementById("10").value = saved9;
  var saved10 = localStorage.getItem("text10");
  document.getElementById("11").value = saved10;
  var saved11 = localStorage.getItem("text11");
  document.getElementById("12").value = saved11;
  var saved12 = localStorage.getItem("text12");
  document.getElementById("13").value = saved12;
  var saved13 = localStorage.getItem("text13");
  document.getElementById("14").value = saved13;
  var saved14 = localStorage.getItem("text14");
  document.getElementById("15").value = saved14;
  var saved15 = localStorage.getItem("text15");
  document.getElementById("16").value = saved15;
  var saved16 = localStorage.getItem("text16");
  document.getElementById("17").value = saved16;
}
