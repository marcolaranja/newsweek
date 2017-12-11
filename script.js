// Function: creates a new paragraph and append it to the bottom of the HTML body.

function createParagraph() {
var para = document.createElement('p');
para.textContent = 'You clicked the button!';
document.body.appendChild(para);
}

/*
  1. Get references to all the buttons on the page and sort them in an array.
  2. Loop through all the buttons and add a click event listener to each one.

  When any button is pressed, the createParagraph() function will be run.
*/

var buttons = document.querySelectorAll('button');

for (var i = 0; i < buttons.length ; i++) {
buttons[i].addEventListener('click', createParagraph);
}

// Set the current day of the week to a variable, with 1 being Monday and 7 being Sunday
const day = new Date().getDay();

switch (day) {
    case 1:
        console.log("Happy Monday!");
        break;
    case 2:
        console.log("It's Tuesday. You got this!");
        break;
    case 3:
        console.log("Hump day already!");
        break;
    case 4:
        console.log("Just one more day 'til the weekend!");
        break;
    case 5:
        console.log("Happy Friday!");
        break;
    case 6:
        console.log("Have a wonderful Saturday!");
        break;
    case 7:
        console.log("It's Sunday, time to relax!");
        break;
    default:
        console.log("Something went horribly wrong...");
}

// Get number corresponding to the current month, with 0 being January and 11 being December
const month = new Date().getMonth();

switch (month) {
    // January, February, March
    case 0:
    case 1:
    case 2:
        console.log("Winter");
        break;
    // April, May, June
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    // July, August, September
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    // October, November, December
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Something went wrong.");
}
