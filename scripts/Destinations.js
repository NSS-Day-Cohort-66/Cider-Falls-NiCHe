import { getDestinations } from "./database.js";
import { destinationServicesList } from "./Services.js";

const destinations = getDestinations();
const services = destinationServicesList();

export const DestinationCards = () => {
  let destinationSection = `<div id="destinations">`;
  for (const destination of destinations) {
    destinationSection += `
        <div class="destinationCard">
            <h3>${destination.location}</h3>
            <h4>${destination.name}</h4>
            ${services}
        </div>`;
  }
  destinationSection += `</div>`;

  return destinationSection;
};
