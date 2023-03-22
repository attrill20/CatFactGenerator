/*👉 Write an async function called getQuote.
// async function getQuote() {

👉 Use fetch to send a GET request to https://zenquotes.io/api/random/ and store the resolved value of the returned promise in a variable called response.

👉 Call the .json() method on the response variable to parse the JSON data contained in the response object. Store the resolved value of the returned promise in a variable called data.

👉 Use that data to set the text of the h1 with id "quote".

Hint: You can use console.log to have a look at the structure of the data object to figure out how to get just the quote out!

👉 Call this function so that the quote appears as soon as the page loads.
*/

async function getQuote() {
  const response = await fetch("https://meowfacts.herokuapp.com/");
  console.log(response);
  const data = await response.json();
  console.log(data);
  document.querySelector("#quote").textContent = data.data[0];
  // create history
  const newListItem = document.createElement("li");
  newListItem.textContent = data.data[0];
  document.querySelector("#quote-history").appendChild(newListItem);
}

//attach event.listener to new-quote-button

const button = document.querySelector("#new-quote-button");
button.addEventListener("click", getQuote);

// call getQuote function when someone clicks on the button


// We're now going to display every quote we fetch in a list so that we don't forget our favorites.
//Create a function that takes in a string
// creates a new list item with that string
// and adds it to the ol with the id "quote-history".
// Call this function within your getQuote function so that the quotes get stored in the "quote-history" list.
/*
function createListItem(string) {
  const newListItem = document.createElement("li");
  newListItem.innerText = data.data[0];
  let list = document.querySelector("ol");
  document.querySelector("#quote-history").appendChild(li);
}
*/
getQuote("click", getQuote);
// https://api.football-data.org/v4/matches