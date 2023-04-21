// ---Global Variables---//
const hours = [09, 10, 11, 12, 13, 14, 15, 16, 17, 18];
let currentHour = dayjs().format("H");
// Setting timer
let time = dayjs().format("dddd MMMM D, YYYY.");
$("#currentDay").text(time);
// Creating main function which creates our HTML based on the index of hours
function displayTimeBlocks() {
  // clear the HTML
  $("#time-block-container").empty();
  // Loop number of hours and create variables to inject into the template literal
  for (let i = 0; i < 10; i++) {
    let hour = hours[i];
    const id = `time-block-container${i}`;
    const classColor = hour == currentHour ? "present" : hour > currentHour ? "future" : "past";
    const displayTime =  halfDay = hour < 12 ? hour + ":00am" : hour === 12 ? ":00pm" : (hour - 12) + ":00pm";
    const storedEntry = localStorage.getItem(id);

    const card = $(`
      <div class="d-flex p-2 padding flex-wrap m-0.1 time-block ${classColor}">
        <div class=" padding hour text-center py-3">${
          displayTime
        }</div>
        <textarea id="${id}" class="text md-2 col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 " onclick="saveEntry('${id}')">
        <i id="save" style='font-size:40px' class='fas'>&#xf0c7</i> </button>
      </div>
      `);
    
    // Add template to the HTML
    $("#time-block-container").append(card);
    // now that the html exists we can grab the <textarea> and from that we grab whatever is in the textContent and re load it to the area.
    let textElement = document.getElementById(id)
    // let dataArray = []
    // let data = textElement.textContent
    // dataArray.push(data)
    // console.log(dataArray);
    console.log(textElement);
    console.log(storedEntry);
    
    if(storedEntry){
    let storedEntryAsData = storedEntry.replace(/['"]+/g, '') 
    textElement.textContent = storedEntryAsData; 
    console.log(storedEntryAsData);
    return;
    }else{
    textElement.textContent = ""
    // textElement.textContent = notStringData || ""
  }
}
}


function saveEntry(id) {
  let dataEntry = $(`#${id}`).val();
  localStorage.setItem(id ,JSON.stringify(dataEntry));

}

displayTimeBlocks();

//
// $(function () {
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
// });

// function setTime(){

// }
// function getHour(){

// }
// function createTimeBlock(){

// }
// function saveTask(){

// }
