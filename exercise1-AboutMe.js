// Change page font
document.body.style.fontFamily = "Arial, sans-serif";

// Update information
document.getElementById("nickname").textContent = "Nha";
document.getElementById("favorites").textContent = "Badminton";
document.getElementById("hometown").textContent = "Da Nang";

// Add class to every li
const listItems = document.querySelectorAll("li");

listItems.forEach((item) => {
  item.classList.add("listitem");
});

// Create style element
const style = document.createElement("style");

style.textContent = `
  .listitem {
    color: black;
  }
`;

document.head.appendChild(style);

// Create image
const img = document.createElement("img");

img.src = "./IMG_2973.JPG" ;
img.alt = "Profile";
img.width = 200;

document.body.appendChild(img);