const friends = [
    { name: 'Alice', age: 27, email: 'alice@example.com' },
    { name: 'Bob', age: 32, email: 'bob@example.com' },
    { name: 'Charlie', age: 24, email: 'charlie@example.com' },
    { name: 'David', age: 29, email: 'david@example.com' },
    { name: 'Eve', age: 31, email: 'eve@example.com' }
  ];

function displayFriends(){
    $("#friend-container").empty();
    for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        const id = `greeting-${i}`;
        const className = friend.age === 31 ? "present" : friend.age > 31 ? "future" : "past";

        const card = $(`
        <div class="col">
          <div class="card ${className}">
            <div class="card-body">
              <h5 class="card-title">${friend.name}</h5>
              <p class="card-text">${friend.email}</p>
              <span class="input-group-text" >Please Enter a Greeting:</span>
              <input id="${id}" type="text" class="form-control" placeholder="Hello">
              <a class="btn btn-primary" onclick="saveGreeting('${id}')">Save</a>
            </div>
          </div>
        </div>
        `)

        $("#friend-container").append(card)
    }

}

function saveGreeting(id){
    console.log($(`#${id}`).val())
}

displayFriends()


// <div class="col">
      //   <div class="card ${classColor}">
      //     <div class="card-body">
      //       <h5 class="card-title">${hour + ':00' + halfDay}</h5>
      //       <p class="card-text">${"hi"}</p>
      //       <span class="input-group-text" >Please Enter a Greeting:</span>
      //       <input id="${id}" type="text" class="form-control" placeholder="Hello">
      //       <a class="btn btn-primary" onclick="saveEntry('${id}')">Save</a>
      //     </div>
      //   </div>
      // </div>