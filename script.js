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

//function convertTime --to convert out of military time **
var time = "16:30:00"; // your input

time = time.split(":"); // convert to array

// fetch
var hours = Number(time[0]);
var minutes = Number(time[1]);
var seconds = Number(time[2]);

// calculate
var timeValue;

if (hours > 0 && hours <= 12) {
  timeValue = "" + hours;
} else if (hours > 12) {
  timeValue = "" + (hours - 12);
} else if (hours == 0) {
  timeValue = "12";
}

timeValue += minutes < 10 ? ":0" + minutes : ":" + minutes; // get minutes
timeValue += seconds < 10 ? ":0" + seconds : ":" + seconds; // get seconds
timeValue += hours >= 12 ? " P.M." : " A.M."; // get AM/PM

// show
alert(timeValue);
console.log(timeValue);

//for loop that runs through every hour of the planner **
//for (let index = 0; index < array.length; index++) {
// const element = array[index];

//}

//timeblocks are color coded to indicate past, present and future

//user can click a timeblock and enter an event

//save button will save the information in the timblock

//text in the timeblock is saved in local storage

//when the page refreshes, the saved events will still be there
