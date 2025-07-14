// Select the button and joke container elements from the HTML
const jokeBtn = document.getElementById('joke-btn');
const setup = document.getElementById('setup');
const punchline = document.getElementById('punchline');

// Add an event listener to the button
jokeBtn.addEventListener('click', function() {
  console.log('Getting a joke...');
  
  // Fetch a random joke from the Official Joke API
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(function(response) {
      // Convert the response to JSON format
      return response.json();
    })
    .then(function(jokeData) {
      // Log the full joke response to the console
      console.log(jokeData);
    });
});