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

function getTimeClass(hour) {
  if (hour < currentHour) {
    return "past";
  } else if (hour > currentHour) {
    return "future";
  } else return "present";
}

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

// $(".save-btn").click(function () {
//   var hr9 = document.getElementById("9").value;
//   localStorage.setItem("text9", hr9);
//   var hr10 = document.getElementById("10").value;
//   localStorage.setItem("text10", hr10);
//   var hr11 = document.getElementById("11").value;
//   localStorage.setItem("text11", hr11);
//   var hr12 = document.getElementById("12").value;
//   localStorage.setItem("text12", hr12);
//   var hr13 = document.getElementById("13").value;
//   localStorage.setItem("text13", hr13);
//   var hr14 = document.getElementById("14").value;
//   localStorage.setItem("text14", hr14);
//   var hr15 = document.getElementById("15").value;
//   localStorage.setItem("text15", hr15);
//   var hr16 = document.getElementById("16").value;
//   localStorage.setItem("text16", hr16);
//   var hr17 = document.getElementById("17").value;
//   localStorage.setItem("text17", hr17);
// });

// Display saved tasks
// {
//   var saved8 = localStorage.getItem("text9");
//   document.getElementById("9").value = saved8;
//   var saved9 = localStorage.getItem("text10");
//   document.getElementById("10").value = saved9;
//   var saved10 = localStorage.getItem("text11");
//   document.getElementById("11").value = saved10;
//   var saved11 = localStorage.getItem("text12");
//   document.getElementById("12").value = saved11;
//   var saved12 = localStorage.getItem("text13");
//   document.getElementById("13").value = saved12;
//   var saved13 = localStorage.getItem("text14");
//   document.getElementById("14").value = saved13;
//   var saved14 = localStorage.getItem("text15");
//   document.getElementById("15").value = saved14;
//   var saved15 = localStorage.getItem("text16");
//   document.getElementById("16").value = saved15;
//   var saved16 = localStorage.getItem("text17");
//   document.getElementById("17").value = saved16;
// }
