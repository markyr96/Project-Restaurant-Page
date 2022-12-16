import phone from "./assets/telephone.jpg";
import email from "./assets/email.png";
import address from "./assets/address.jpg";

export function contact() {

    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    const telePhone = document.createElement("img");
    telePhone.classList.add("contact-image");
    telePhone.src = phone;
    telePhone.alt = "Telephone photo";
    contentDiv.appendChild(telePhone);

    const para7 = document.createElement("p");
    para7.classList.add("landing-page-copy");
    para7.textContent = "Call us: 1234567890";
    contentDiv.appendChild(para7);

    const eMail = document.createElement("img");
    eMail.classList.add("contact-image");
    eMail.src = email;
    eMail.alt = "eMail photo";
    contentDiv.appendChild(eMail);

    const para8 = document.createElement("p");
    para8.classList.add("landing-page-copy");
    para8.textContent = "email: somethin@else.com";
    contentDiv.appendChild(para8);

    const adDress = document.createElement("img");
    adDress.classList.add("contact-image");
    adDress.src = address;
    adDress.alt = "Address photo";
    contentDiv.appendChild(adDress);

    const para9 = document.createElement("p");
    para9.classList.add("landing-page-copy");
    para9.textContent = "Address: Somewhere you Love 21";
    contentDiv.appendChild(para9);
}