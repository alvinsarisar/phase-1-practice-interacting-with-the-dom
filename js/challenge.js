// 1.Getting reference to the html elements from the DOM file that we will need to interact with
const counterElement = document.getElementById('counter');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const heartButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const likesList = document.querySelector('.likes');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsList = document.querySelector('.comments');
//2.initializing variables
let counter = 0;
let isPaused = false;
let timer;

// 3.Function to update the counter display value
function updateCounterDisplay() {
  counterElement.textContent = counter;
}

// 4.Function to start the timer and increments the counter every second
function startTimer() {
  timer = setInterval(() => {
    if (!isPaused) {
      counter++;
      updateCounterDisplay();
    }
  }, 1000);
}

//5. Function to pause the timer and disable buttons and change the pause button to resume
function pauseTimer() {
  clearInterval(timer);
  isPaused = true;
  minusButton.disabled = true;
  plusButton.disabled = true;
  heartButton.disabled = true;
  pauseButton.textContent = 'resume';
}

// 6.Function to resume the timer and enable buttons and also change the resume button to pause
function resumeTimer() {
  isPaused = false;
  minusButton.disabled = false;
  plusButton.disabled = false;
  heartButton.disabled = false;
  pauseButton.textContent = 'pause';
  startTimer();
}

// 7. adding  Event listeners t0 buttons
//minus button
minusButton.addEventListener('click', () => {
  if (!isPaused) {
    counter--;
    updateCounterDisplay();
  }
});
//plus button
plusButton.addEventListener('click', () => {
  if (!isPaused) {
    counter++;
    updateCounterDisplay();
  }
});
//heart button
heartButton.addEventListener('click', () => {
  if (!isPaused) {
    const likeItem = document.createElement('li');
    likeItem.textContent = `Number ${counter} has been liked`;
    likesList.appendChild(likeItem);
  }
});
//pause button
pauseButton.addEventListener('click', () => {
  if (isPaused) {
    resumeTimer();
  } else {
    pauseTimer();
  }
});

//8. Event listener for comment form submission
commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const comment = commentInput.value;
  if (comment) {
    const commentItem = document.createElement('p');
    commentItem.textContent = comment;
    commentsList.appendChild(commentItem);
    commentInput.value = '';
  }
});

// 9Initializimng the timer
startTimer();
