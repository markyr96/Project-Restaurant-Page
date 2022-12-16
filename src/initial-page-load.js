export function initialPageLoad() {

    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to my Restaurant and Lounge";
    heading.classList.add("landing-tittle");
    contentDiv.appendChild(heading);

    const topImage = document.createElement("img");
    topImage.classList.add("image");
    topImage.src = "../src/assets/inside-restaurant.jpg";
    topImage.alt = "Restaurant Image";
    contentDiv.appendChild(topImage);

    const para1 = document.createElement("p");
    para1.classList.add("landing-page-copy");
    para1.textContent = "FARMs Chef Renè Xelo, who has been with the restaurant since its inception in 2016.";
    contentDiv.appendChild(para1);

    const para2 = document.createElement("p");
    para2.classList.add("landing-page-copy");
    para2.textContent = "The bar program will offer delightful wines, from some of the oldest vineyards in the country, as well as locally brewed bourbons and ales.";
    contentDiv.appendChild(para2);

    const para3 = document.createElement("p");
    para3.classList.add("landing-page-copy");
    para3.textContent = "Join us for a winter wonderland experience in one of our private outdoor igloos located on the patio at FARM at Hotel Nyack!";
    contentDiv.appendChild(para3);
}