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

//for loop that runs through every hour of the planner **

//append timeblocks onto page **

//user can add information to the timeblocks

//timeblocks are color coded to indicate past, present and future

//user can click a timeblock and enter an event

//save button will save the information in the timblock

//text in the timeblock is saved in local storage

//when the page refreshes, the saved events will still be there
