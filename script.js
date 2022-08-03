//elements
let timeBlocksEl = $("#timeBlocks");
let currentDayEl = $("#currentDay");
let timeHour = moment().format("dddd, MMMM Do YYYY");
let mySchedule = [];
let currentHour = moment().get("hour");

//adds the date to the page
currentDayEl.append(timeHour);
const hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

const timeblocksContainer = document.getElementById("timeblocks-container");
//adding time to the timeblocks
for (let index = 0; index < hours.length; index++) {
  const outerDiv = document.createElement("div");
  const textFromStorage = JSON.parse(localStorage.getItem(hours[index]));
  outerDiv.classList.add("input-group", "input-group-lg");
  outerDiv.innerHTML = `
  
  <span class="input-group-text" style="height: 45px; width: 65px;">${getHourText(
    hours[index]
  )}</span>

<input type="text" class="form-control ${getTimeClass(
    hours[index]
  )}" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Upcoming Event!" value="${
    textFromStorage || ""
  }">

<button type="btn" class="save-btn" data-hour=${
    hours[index]
  } style="height: 50px; width: fit-content; background-color: lightblue;">Save 💾</button>
  `;

  timeblocksContainer.append(outerDiv);
}

//buttons event listeners
var saveButtons = document.querySelectorAll(".save-btn");
saveButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.dataset.hour);
    console.log(e.target.parentElement.children[1].value);
    localStorage.setItem(
      e.target.dataset.hour,
      JSON.stringify(e.target.parentElement.children[1].value)
    );
  });
});
//past, present and future function
function getTimeClass(hour) {
  if (hour < currentHour) {
    return "past";
  } else if (hour > currentHour) {
    return "future";
  } else return "present";
}
//timeblocks
function getHourText(hour) {
  switch (hour) {
    case "09":
      return "9am";

    case "10":
      return "10am";
    case "11":
      return "11am";
    case "12":
      return "12pm";
    case "13":
      return "1pm";
    case "14":
      return "2pm";
    case "15":
      return "3pm";
    case "16":
      return "4pm";
    case "17":
      return "5pm";
  }
}
