// ---Global Variables---//
const hours = [09, 10, 11, 12, 13, 14, 15, 16, 17, 18];
let currentHour = dayjs().format("H");
// Setting timer
let time = dayjs().format("dddd MMMM D, YYYY.");
$("#currentDay").text(time);
let time2 = dayjs().format("h:mm a");
$("#currentDay2").text(time2);
// Creating main function which creates our HTML based on the index of hours
function displayTimeBlocks() {
  // clear the HTML
  $("#time-block-container").empty();
  // Loop number of hours and create variables to inject into the template literal
  for (let i = 0; i < 10; i++) {
    let hour = hours[i];
    const id = `time-block-container${i}`;
    const classColor =
      hour == currentHour ? "present" : hour > currentHour ? "future" : "past";
    const displayTime = (halfDay =
      hour < 12
        ? hour + ":00am"
        : hour == 12
        ? hour + ":00pm"
        : hour - 12 + ":00pm");
    const storedEntry = localStorage.getItem(id);

    const card = $(`
      <div class="d-flex p-2 padding flex-wrap m-0.1 time-block ${classColor} mx-auto">
        <div class=" padding hour text-center py-3 mx-auto">${displayTime}</div>
        <textarea id="${id}" class="d-flex text md-2 col-10 col-md col-sm col-xs description lead " rows="3"> </textarea>
        <button class="d-flex btn saveBtn col-1 " onclick="saveEntry('${id}')"> 
        <i id="save" style='font-size:40px' class='fas'>&#xf0c7</i> </button>
      </div>
      `);

    // Add template to the HTML
    $("#time-block-container").append(card);
    // now that the html exists we can grab the <textarea> and from that we grab whatever is in the textContent and re load it to the area.
    let textElement = document.getElementById(id);
    //
    if (storedEntry) {
      // remove "" from data
      let storedEntryAsData = storedEntry.replace(/['"]+/g, "");
      // store data upon refresh
      textElement.textContent = storedEntryAsData;
    } else {
      textElement.textContent = "";
      // textElement.textContent = notStringData || ""
    }
  }
}
// save entry function
function saveEntry(id) {
  // store data
  let dataEntry = $(`#${id}`).val();
  localStorage.setItem(id, JSON.stringify(dataEntry));
}
// call function
displayTimeBlocks();
