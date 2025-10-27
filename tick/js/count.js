// Function to update the countdown
function updateCountdown(timerId) {
    const targetDate = new Date("March 03, 2025 17:30:00").getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        clearInterval(intervals[timerId]);
        document.querySelector(`#days${timerId}`).querySelector('.number').textContent = "00";
        document.querySelector(`#hours${timerId}`).querySelector('.number').textContent = "00";
        document.querySelector(`#minutes${timerId}`).querySelector('.number').textContent = "00";
        document.querySelector(`#seconds${timerId}`).querySelector('.number').textContent = "00";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.querySelector(`#days${timerId}`).querySelector('.number').textContent = days < 10 ? '0' + days : days;
    document.querySelector(`#hours${timerId}`).querySelector('.number').textContent = hours < 10 ? '0' + hours : hours;
    document.querySelector(`#minutes${timerId}`).querySelector('.number').textContent = minutes < 10 ? '0' + minutes : minutes;
    document.querySelector(`#seconds${timerId}`).querySelector('.number').textContent = seconds < 10 ? '0' + seconds : seconds;
}

// Update all countdowns every second
const intervals = [];
for (let i = 1; i <= 4; i++) {
    intervals[i] = setInterval(() => updateCountdown(i), 1000);
}

// Initialize the countdowns
for (let i = 1; i <= 4; i++) {
    updateCountdown(i);
}

