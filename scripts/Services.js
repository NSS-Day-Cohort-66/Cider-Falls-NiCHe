import { getServices, getDestinationServices, getDestinations } from "./database.js";

const services = getServices();
const destinationServices = getDestinationServices();
const destinations = getDestinations();

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

export const ParkServices = () => {
  let parkServicesHTML = "<div>Park Services:"

  for (const service of services) {
    parkServicesHTML += `<span data-id="${service.id}"
                        data-type="parkservice"
                        data-name="${service.name}">
                        ${service.name},</span>`
  }
  parkServicesHTML = parkServicesHTML.slice(0, - 8)
  parkServicesHTML += `</span></div>`
  return parkServicesHTML
}

document.addEventListener(
  "click",
  (clickEvent) => {
    const itemClicked = clickEvent.target

      if (itemClicked.dataset.type === "parkservice") {
        const serviceId = itemClicked.dataset.id

        let serviceDestinations = []

          for (const obj of destinationServices) {

            if (obj.serviceId === parseInt(serviceId)) {

              for (const destination of destinations) {

                  if (obj.destinationId === destination.id) {

                    serviceDestinations.push(destination.name)
                  }
              }
            }
          }
          if (serviceDestinations.length === 0) {
            window.alert(`${itemClicked.dataset.name} is not available at this current moment`)
          } else if (serviceDestinations.length === 1) {
            window.alert(`${itemClicked.dataset.name} is available at ${serviceDestinations}`)
          } else if (serviceDestinations.length === 2) {
            window.alert(`${itemClicked.dataset.name} is available at ${serviceDestinations[0]} and ${serviceDestinations[1]}`)
          } else {
            const lastService = serviceDestinations[serviceDestinations.length - 1]
            serviceDestinations.pop()
            let htmlservices = ""
            for (const service of serviceDestinations) {
              htmlservices += `${service}, `
            }
            window.alert(`${itemClicked.dataset.name} is available at ${htmlservices}and ${lastService}`)
          }
      }
  }
)