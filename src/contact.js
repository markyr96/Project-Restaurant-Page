export function contact() {

    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    const telePhone = document.createElement("img");
    telePhone.classList.add("contact-image");
    telePhone.src = "../src/assets/telephone.jpg";
    telePhone.alt = "Telephone photo";
    contentDiv.appendChild(telePhone);

    const para7 = document.createElement("p");
    para7.classList.add("landing-page-copy");
    para7.textContent = "Call us: 1234567890";
    contentDiv.appendChild(para7);

    const eMail = document.createElement("img");
    eMail.classList.add("contact-image");
    eMail.src = "../src/assets/email.png";
    eMail.alt = "eMail photo";
    contentDiv.appendChild(eMail);

    const para8 = document.createElement("p");
    para8.classList.add("landing-page-copy");
    para8.textContent = "email: somethin@else.com";
    contentDiv.appendChild(para8);

    const adDress = document.createElement("img");
    adDress.classList.add("contact-image");
    adDress.src = "../src/assets/address.jpg";
    adDress.alt = "Address photo";
    contentDiv.appendChild(adDress);

    const para9 = document.createElement("p");
    para9.classList.add("landing-page-copy");
    para9.textContent = "Address: Somewhere you Love 21";
    contentDiv.appendChild(para9);
}