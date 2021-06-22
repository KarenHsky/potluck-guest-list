// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
//the assign class that only appears when guest list is full
const assignButton = document.querySelector(".assign");
//the assinged-items class which targets the list that will populate with names and dishes
const assignedItems = document.querySelector(".assigned-items");

//**********For the Invite Button Click************//
//Write a function for what to do on the click event; then write the other functions that this one calls
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value; //grab the value entered and assign to var guest
  //console.log(guest);
  if (guest !== "") {
    //if there is a value entered then...
    addtoList(guest); //call the functions
    clearInput();
    updateGuestCount();
  }
});

const addtoList = function (guest) {
  const listItem = document.createElement("li"); //create a list element
  listItem.innerText = guest; //change inner Text of list to guest
  guestList.append(listItem); //add list items from new list element to the guest list
};

const clearInput = function () {
  guestInput.value = "";
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li"); //select all list elements inside the unorderd list with a class of .guest-list
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

//**********For the Assign Button Click************//
assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});

const assignItems = function () {
  const potluckItems = [
    "salsa & chips",
    "potato salad",
    "meatballs",
    "cheese tray",
    "crudite",
    "coleslaw",
    "sliders",
    "mac n cheese",
    "fruit salad",
    "cookies",
    "cake",
    "ice cream"
  ];

  const allGuests = document.querySelectorAll(".guest-list li");

  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];

    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);

    potluckItems.splice(randomPotluckIndex, 1);
  }
};
