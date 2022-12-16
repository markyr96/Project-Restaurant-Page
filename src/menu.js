import broccoliSoup from "./assets/Broccoli-Soup.webp";
import sandwichGrilled from "./assets/Grilled-Sandwich.webp";
import sandwichPhilly from "./assets/Philly-Steak-Sandwich.webp";

export function menu() {
    
    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    const firstMeal = document.createElement("img");
    firstMeal.classList.add("menu-image");
    firstMeal.src = broccoliSoup;
    firstMeal.alt = "Cream Of Broccoli Soup";
    contentDiv.appendChild(firstMeal);

    const para4 = document.createElement("p");
    para4.classList.add("landing-page-copy");
    para4.textContent = "This broccoli soup recipe is thick and flavorful. It is simple, delicious, and quick to make. Enjoy (I know you will).";
    contentDiv.appendChild(para4);

    const secondMeal = document.createElement("img");
    secondMeal.classList.add("menu-image");
    secondMeal.src = sandwichGrilled;
    secondMeal.alt = "Grilled Sandwich";
    contentDiv.appendChild(secondMeal);

    const para5 = document.createElement("p");
    para5.classList.add("landing-page-copy");
    para5.textContent = "Buttered bread and American Cheddar for a classic hot sandwich.";
    contentDiv.appendChild(para5);

    const thirdMeal = document.createElement("img");
    thirdMeal.classList.add("menu-image");
    thirdMeal.src = sandwichPhilly;
    thirdMeal.alt = "Philly Steak Sandwich";
    contentDiv.appendChild(thirdMeal);

    const para6 = document.createElement("p");
    para6.classList.add("landing-page-copy");
    para6.textContent = "These Philly cheesesteak sandwiches are made with a delicious seasoning of herbs and spices.";
    contentDiv.appendChild(para6);
}   