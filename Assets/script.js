const hours = [09, 10, 11, 12, 13, 14, 15, 16, 17, 18]
let currentHour = dayjs().format('H')



let time = dayjs().format("dddd, MMMM D YYYY");
$('#currentDay').text(time);


function displayTimeBlocks(){
  // clear the HTML
  $("#time-block-container").empty();
  for (let i = 0; i < 10; i++) {
      let hour = hours[i];
      console.log(hours[i]);
      const id = `time-block-container${i}`;
      console.log(`time-block-container${i}`);
      const classColor = hour == currentHour ? "present" : hour > currentHour ? "future" : "past";
      console.log("hour" + hour);
      console.log("current hour" + currentHour);
      const halfDay = hour < 12 ? "am" : "pm";

      const card = $(`

      <div class="d-flex p-2 padding flex-wrap m-0.1 time-block ${classColor}">
        <div class=" padding hour text-center py-3">${hour + ':00' + halfDay}</div>
        <textarea id="${id}" class=" md-2 col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 d-flex justify-content-end" onclick="saveEntry('${id}')">
        <i id="save" style='font-size:40px' class='fas'>&#xf0c7</i> </button>
      </div>
      `)

      $("#time-block-container").append(card)
  }

}

function saveEntry(){
  localStorage.setItem(JSON.stringify(($(`#${id}`).val())))
}

displayTimeBlocks()

 
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


