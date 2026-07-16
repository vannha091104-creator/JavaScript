const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    img: "./book1.png",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    img: "./book2.png",
    alreadyRead: true
  }
];

// Create list
const bookList = document.createElement("ul");

books.forEach((book) => {
  const item = document.createElement("li");

  // Create image
  const img = document.createElement("img");
  img.src = book.img;
  img.width = 100;

  // Create text
  const text = document.createElement("p");
  text.textContent = `${book.title} by ${book.author}`;

  // Change color
  if (book.alreadyRead) {
    item.style.color = "gray";
  } else {
    item.style.color = "black";
  }

  item.appendChild(img);
  item.appendChild(text);

  bookList.appendChild(item);
});

document.body.appendChild(bookList);