const progress = document.getElementById("progress");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const complete = document.querySelector(".complete");

let currentActive = 1;

// FUNCTIONS

const update = () => {
  // ADD & REMOVE ACTIVE CLASS
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // ADD BORDER TO THE ACTIVE STEPS
  const actives = document.querySelectorAll(".active");

  progress.style.width = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  }%`;

  if (currentActive === 1) {
    previous.disabled = true;
  } else if (currentActive === circles.length) {
    next.classList.add("hide");
    previous.classList.add("hide");
    complete.classList.remove("hide");
  } else {
    previous.disabled = false;
    next.disabled = false;
  }
};

// EVENT LISTENERS
next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

previous.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});
