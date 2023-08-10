import { getServices, getDestinationServices } from "./database.js";

const services = getServices();
const destinationServices = getDestinationServices();

export const destinationServicesList = (destinationObj) => {
  let serviceList = `<ul>`;
  for (const obj of destinationServices) {
    if (obj.destinationId === destinationObj.id) {
      for (const service of services) {
        if (service.id === obj.serviceId) {
          serviceList += `<li>${service.name}</li>`;
        }
      }
    }
  }
  serviceList += `</ul>`;

  return serviceList;
};
