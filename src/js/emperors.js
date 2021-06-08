"use strict";

const fetchData = () => {
  fetch("main.json")
    .then((response) => {
      return response.json();
    })
    .then((array) => {
      const ul = document.querySelector("#list");
      const allTheTags = [];

      array.forEach((emperor) => {
        const title = document.createElement("h1");
        title.textContent = emperor.name;
        title.classList.add("emperor__name");

        const image = document.createElement("img");
        image.src = emperor.image;
        image.classList.add("emperor__image");

        const city = document.createElement("h2");
        city.textContent = emperor.city;
        city.classList.add("emperor__city");

        const text = document.createElement("p");
        text.textContent = emperor.text;
        text.classList.add("emperor__text");

        const li = document.createElement("li");
        li.classList.add("emperor__item");

        li.append(title, image, city, text);
        allTheTags.push(li);
      });
      ul.append(...allTheTags);
    });
};

export { fetchData };
