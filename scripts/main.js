//import { DestinationCards } from "./Destinations.js";
import { GuestList } from "./Guests.js";

const mainContainer = document.querySelector("#container");

const pageHTML = `
<article id="destinationsSection">
    <h2>Destinations</h2>
    ${DestinationCards()}
</article>
<article id="guests">
    <h2>Current Guests</h2>
    ${GuestList()}
</article>
`;

mainContainer.innerHTML = pageHTML;
