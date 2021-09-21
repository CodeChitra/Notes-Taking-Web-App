// let noteObj;
showNotes();

//Adding Notes 
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notes);
    }
    noteObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(noteObj));
    addTxt.value = "";
    // console.log(noteObj);
    showNotes();
});


//Function To Show Notes From Local Storage 
function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notes);
    }

    let html = ``;
    noteObj.forEach(function (element, index) {
        html += `
        <div class="card noteCard" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`;

    });
    let notesBox = document.getElementById("notesBox");
    if (noteObj.length != 0) {
        notesBox.innerHTML = html;
    }
    else {
        notesBox.innerHTML = `<h6>Nothing To show.🤷‍♀️</h6>`
    }
}


//Function To Delete A Note

function deleteNote(index) {
    // console.log("I am Deleting", index);
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notes);
    }
    noteObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(noteObj));
    showNotes();
}



//Search Button Functionality

let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", function () {
    let inputVal = searchTxt.value.toLowerCase();
    let elem = document.getElementsByClassName("noteCard");
    Array.from(elem).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        // console.log(cardTxt);
        if (cardTxt.includes(inputVal)) {
            element.style.display = "Block";
        }
        else {
            element.style.display = "None";
        }
    })
})



// Further Features

// Add a title
// Mark note as a important
// Separate notes by user