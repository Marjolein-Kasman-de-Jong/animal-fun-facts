import { animals } from "./animals";
import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

// Title
const title = "";

// Background
const background = (
    <img
        className="background"
        alt="ocean"
        src="/images/ocean.jpg"
    />
);

// Array of images
const images = [];

for (const animal in animals) {
    const image = (
        <img
            key={animal}
            className="animal"
            alt={animal}
            src={animals[animal].image}
            aria-label={animal}
            role="button"
            onClick={displayFact}
        />
    );
    images.push(image);
}

// Fun facts
function displayFact(e) {
    const clickedAnimal = e.target.alt;
    const randomIndex = Math.floor(
        Math.random() * animals[clickedAnimal].facts.length
    );
    const funFact = animals[clickedAnimal].facts[randomIndex];
    const p = document.getElementById("fact");
    p.innerHTML = funFact;
}

// Extra credit
const showBackground = true;

const animalFacts = (
    <div>
        <h1>{title || "Click an animal for a fun fact"}</h1>
        {showBackground && background}
        <p id="fact"></p>
        <div className="animals">{images}</div>
    </div>
);

root.render(animalFacts);