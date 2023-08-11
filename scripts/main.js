import { DestinationCards } from "./Destinations.js";
import { GuestList } from "./Guests.js";
import { ParkServices} from "./Services.js"

const mainContainer = document.querySelector("#container");

const pageHTML = `
<article id="parkserviceslist">
    ${ParkServices()}
</article>
<article id="destinationsSection">
    <h2 id="destinations_title">Destinations</h2>
    ${DestinationCards()}
</article>
<article id="guests">
    <h2 id="guests_title">Current Guests</h2>
    ${GuestList()}
</article>
`;

mainContainer.innerHTML = pageHTML;
