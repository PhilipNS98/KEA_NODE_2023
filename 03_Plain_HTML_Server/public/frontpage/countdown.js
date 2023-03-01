// Get the form, countdown timer, stoptimerButton elements
const form = document.querySelector('form');
const countdown = document.querySelector('#countdown');
const startTimerButton = document.querySelector("#start-timer");
const stopTimerButton = document.querySelector('#stop-timer');

let countdownInterval; // Define countdownInterval variable outside the startTimer function

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Get the user input date and time values
    const dateInput = document.querySelector('#event-date').value;
    const timeInput = document.querySelector('#event-time').value;
    // Combine the date and time values into a single string
    const eventDateTime = dateInput + 'T' + timeInput + ':00.000Z';
    // Convert the string into a Date object
    const eventDate = new Date(eventDateTime);
    // Get the current date and time
    const now = new Date();
    // Calculate the time difference between the current date and time and the event date and time
    const timeDifference = eventDate - now;
    // If the event date and time is in the past, display an error message
    if (timeDifference < 0) {
        countdown.textContent = 'Invalid date/time. Please choose a future date and time.';
        return;
    }
    // Start the countdown timer
    startTimer(timeDifference);
});

function startTimer(timeDifference) {
    // Disable the start timer button
    startTimerButton.disabled = true;
    // Calculate the number of milliseconds, seconds, minutes, and hours in the time difference
    let milliseconds = Math.floor(timeDifference % 1000);
    let seconds = Math.floor((timeDifference / 1000) % 60);
    let minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    let hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    // Update the countdown timer every second
    countdownInterval = setInterval(() => { // assign countdownInterval to setInterval
        // Decrement the milliseconds, seconds, minutes, and hours
        milliseconds -= 10;
        if (milliseconds < 0) {
            milliseconds = 990;
            seconds--;
        }
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
        if (hours < 0) {
            hours = 23;
            days--;
        }
        // If there is no time left, display the "Time's up!" message and stop the countdown
        if (days === 0 &&
            hours === 0 &&
            minutes === 0 &&
            seconds === 0 &&
            milliseconds === 0) {
            clearInterval(countdownInterval);
            countdown.textContent = "Time's up!";
        } else {
            // Construct a string from the days, hours, minutes, and seconds
            const countdownString = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds, ${milliseconds} milliseconds`;
            // Update the countdown timer element
            countdown.textContent = countdownString;
        }
    }, 10); // Update the countdown every 10 milliseconds

    // Add a click event listener to the stop timer button
    stopTimerButton.addEventListener("click", () => {
        // Stop the countdown timer
        clearInterval(countdownInterval);
        // Reset the countdown timer element to its initial state
        countdown.textContent = "";
        // Enable the start timer button
        startTimerButton.disabled = false;
    });
}
