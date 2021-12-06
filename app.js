// let noteObj;
showNotes();

//Adding Notes 
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {

    // Targetting Txtarea to add notes
    let addTxt = document.getElementById("addTxt");

    // Getting Notes From Local Storage In a Variable as a string
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

    // noteObj is an array that is made to store notes
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

    // notesBox is the container in which we will show our notes
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

// Here we are targetting search box
let searchTxt = document.getElementById("searchTxt");

// Now we will be using input Event
searchTxt.addEventListener("input", function () {
    let inputVal = searchTxt.value.toLowerCase();

    // Here We Are Targetting Our Cards Which Are Notes By Class Name notecard|| Means It will return an html collection of all cards
    let elem = document.getElementsByClassName("noteCard");
    Array.from(elem).forEach(function (element) {

        // Here element means each card as we are iterating our array and we are targetting each card's paragraph tag
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


// Dark Mode Functionality

let darkMode = document.getElementById('darkMode');

darkMode.addEventListener('click', function (e) {
    let myHeading = document.getElementById('myHeading');
    let myNotes = document.getElementById('myNotes');
    let body = document.querySelector('body');
    let str = darkMode.innerText;
    if (str.includes('Dark Mode')) {
        myHeading.style.color = "white";
        myNotes.style.color = "white";
        body.style.backgroundColor = "black";
        darkMode.innerText = 'Lite Mode';
    }
    else {
        body.style.backgroundColor = "White";
        darkMode.innerText = "Dark Mode";
        myHeading.style.color = "Black";
        myNotes.style.color = "Black";
    }
})



// Further Features

// Add a title
// Mark note as a important
// Separate notes by user