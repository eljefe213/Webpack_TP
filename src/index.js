import "./style.scss";

document.addEventListener("DOMContentLoaded", function () {
  // Vous pouvez également laisser ici le reste de votre code JavaScript
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "./style.css"; // Assurez-vous que le chemin pointe correctement vers votre fichier style.css

  // Ajoutez la balise <link> au <head> du document
  document.head.appendChild(link);
  // Ajustez le style du h1 en ajoutant une classe
  const h1 = document.querySelector("h1");
  h1.classList.add("centered-h1");
  // Importez toutes les images du dossier "Images"
  function importAllImages() {
    const images = {};

    const req = require.context("./images", false, /\.(jpg|jpeg|png|gif|svg)$/);

    req.keys().forEach((key) => {
      const imageName = key.replace("./", "");
      images[imageName] = req(key);
    });

    return images;
  }

  // Utilisation de la fonction pour importer les images
  const importedImages = importAllImages();

  function createCityCard(city) {
    const card = document.createElement("div");
    card.classList.add("city-card");

    const image = document.createElement("img");
    image.classList.add("city-card-image");
    image.src = city.image; // Utilisez le nom de l'image pour récupérer l'URL
    image.alt = `${city.name}, ${city.country}`;

    const cityName = document.createElement("h2");
    cityName.textContent = city.name;

    const country = document.createElement("p");
    country.textContent = `Country: ${city.country}`;

    const description = document.createElement("p");
    description.textContent = city.description;

    card.appendChild(image);
    card.appendChild(cityName);
    card.appendChild(country);
    card.appendChild(description);

    return card;
  }

  const cities = [
    {
      name: "Paris",
      country: "France",
      description: "La ville de l'amour, avec la Tour Eiffel et le Louvre.",
      image: "./images/Paris.jpg",
    },
    {
      name: "Barcelona",
      country: "Spain",
      description: "Une ville animée sur la côte méditerranéenne.",
      image: "./images/Barcelone.jpg",
    },

    {
      name: "Rome",
      country: "Italy",
      description: "La ville éternelle, avec le Colisée et le Vatican.",
      image: "./images/Rome.jpg",
    },
    {
      name: "Amsterdam",
      country: "Netherlands",
      description: "Connue pour ses canaux, ses musées et sa vie nocturne.",
      image: "./images/Amsterdam.jpg",
    },
    {
      name: "Prague",
      country: "Czech Republic",
      description:
        "Une ville magique avec un magnifique centre-ville historique.",
      image: "./images/Prague.jpg",
    },
    {
      name: "Vienna",
      country: "Austria",
      description:
        "La ville de la musique classique et de l'histoire impériale.",
      image: "./images/Vienne.jpg",
    },
    {
      name: "Dublin",
      country: "Ireland",
      description: "Une ville animée avec une riche histoire culturelle.",
      image: "./images/Dublin.jpg",
    },
    {
      name: "Budapest",
      country: "Hungary",
      description:
        "Connue pour ses bains thermaux et ses monuments historiques.",
      image: "./images/Budapest.jpg",
    },
    {
      name: "Krakow",
      country: "Poland",
      description: "Une ville médiévale pleine de charme et d'histoire.",
      image: "./images/Krakow.jpg",
    },
    {
      name: "Edinburgh",
      country: "United Kingdom",
      description: "La capitale de l'Écosse, riche en histoire et en culture.",
      image: "./images/Edinburgh.png",
    },
    {
      name: "Copenhagen",
      country: "Denmark",
      description:
        "Une ville moderne et progressive avec une belle architecture.",
      image: "./images/Copenhagen.jpeg",
    },
    {
      name: "Athens",
      country: "Greece",
      description:
        "La ville antique avec l'Acropole et une cuisine délicieuse.",
      image: "./images/Athenes.jpg",
    },
  ];

  const citiesContainer = document.getElementById("cities-container");

  cities.forEach((city) => {
    const cityCard = createCityCard(city);
    citiesContainer.appendChild(cityCard);
  });
});
