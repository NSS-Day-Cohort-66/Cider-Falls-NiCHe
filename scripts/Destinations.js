import { getDestinations, getGuests } from "./database.js";
import { destinationServicesList } from "./Services.js";

const destinations = getDestinations();
const guests = getGuests()

export const DestinationCards = () => {
  let destinationSection = `<div id="destinations">`;
  for (const destination of destinations) {
    destinationSection += `
        <div class="destinationCard">
            <h3>${destination.location}</h3>
            <h4 data-type="destination" data-id="${destination.id}">${destination.name}</h4>
            ${destinationServicesList(destination)}
        </div>`;
  }
  destinationSection += `</div>`;

  return destinationSection;
};

document.addEventListener(
  "click",
  (theClickEvent) => {
    const clickTarget = theClickEvent.target
    if(clickTarget.dataset.type === "destination"){
      let guestCounter = 0
      const destinationDataId = clickTarget.dataset.id
      for (const guest of guests) {
        if(guest.destinationId === parseInt(destinationDataId)){
          guestCounter ++
        }
      }
      window.alert(`There are ${guestCounter} guests in this area.`)
    }
  }
)