const logoutButton = document.querySelector("#logout");
logoutButton.addEventListener("click", () => {
  alert("You have logged out.");
});

const images = document.querySelectorAll("#slideshow img");
let currentIndex = 0;

const prevButton = document.createElement("button");
prevButton.innerHTML = "Previous";
prevButton.addEventListener("click", () => {
  images[currentIndex].style.display = "none";
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  images[currentIndex].style.display = "block";
});

const nextButton = document.createElement("button");
nextButton.innerHTML = "Next";
nextButton.addEventListener("click", () => {
  images[currentIndex].style.display = "none";
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  images[currentIndex].style.display = "block";
});

document.querySelector("#slideshow").appendChild(prevButton);
document.querySelector("#slideshow").appendChild(nextButton);
