"use strict";

const fetchData = async () => {
  try {
    const response = await fetch("main.json");
    const array = await response.json();
    const ul = document.querySelector("#emperors__list");
    const allTheTags = [];

    array.forEach((emperor) => {
      const title = document.createElement("h1");
      title.textContent = emperor.name;
      title.classList.add("emperor__name");

      const figure = document.createElement("figure");
      figure.classList.add("emperor__image--container");

      const image = document.createElement("img");
      image.src = emperor.image;
      image.classList.add("emperor__image");
      figure.append(image);

      const city = document.createElement("h2");
      city.textContent = emperor.city;
      city.classList.add("emperor__city");

      const text = document.createElement("p");
      text.textContent = emperor.text;
      text.classList.add("emperor__text");

      const li = document.createElement("li");
      li.classList.add("emperor__item");

      li.append(title, figure, city, text);
      allTheTags.push(li);
    });
    ul.append(...allTheTags);
  } catch (error) {
    console.error(error);
  }
};

export { fetchData };
