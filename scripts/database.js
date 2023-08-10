const database = {
  guests : [{
      id: 1,
      firstName: "Alice",
      lastName: "Johnson",
      destinationId: 2,
    },
    {
      id: 2,
      firstName: "Bob",
      lastName: "Smith",
      destinationId: 4,
    },
    {
      id: 3,
      firstName: "Charlie",
      lastName: "Brown",
      destinationId: 5,
    },
    {
      id: 4,
      firstName: "David",
      lastName: "Miller",
      destinationId: 1,
    },
    {
      id: 5,
      firstName: "Eve",
      lastName: "Davis",
      destinationId: 1,
    },
    {
      id: 6,
      firstName: "Frank",
      lastName: "Wilson",
      destinationId: 6,
    },
    {
      id: 7,
      firstName: "Grace",
      lastName: "Taylor",
      destinationId: 3,
    },
    {
      id: 8,
      firstName: "Henry",
      lastName: "Martinez",
      destinationId: 4,
    },
    {
      id: 9,
      firstName: "Ivy",
      lastName: "Garcia",
      destinationId: 2,
    },
    {
      id: 10,
      firstName: "Jack",
      lastName: "Anderson",
      destinationId: 1,
    },
    {
      id: 11,
      firstName: "Luna",
      lastName: "Starshine",
      destinationId: 4,
    },
    {
      id: 12,
      firstName: "Zephyr",
      lastName: "Moonshadow",
      destinationId: 2,
    },
    {
      id: 13,
      firstName: "Aurora",
      lastName: "Nebula",
      destinationId: 2,
    },
    {
      id: 14,
      firstName: "Solstice",
      lastName: "Stargazer",
      destinationId: 1,
    },
    {
      id: 15,
      firstName: "Cassiopeia",
      lastName: "Galaxia",
      destinationId: 5,
    },
    {
      id: 16,
      firstName: "Zenith",
      lastName: "Eclipse",
      destinationId: 6,
    },
    {
      id: 17,
      firstName: "Nova",
      lastName: "Celestia",
      destinationId: 3,
    },
    {
      id: 18,
      firstName: "Orion",
      lastName: "Astralis",
      destinationId: 1,
    },
    {
      id: 19,
      firstName: "Stellar",
      lastName: "Comet",
      destinationId: 2,
    }
],
  services :
   [{
      id: 1,
      name: "Rafting"
    },
    {
      id: 2,
      name: "Canoeing"
    },
    {
      id: 3,
      name: "Fishing" 
    },
    {
      id: 4,
      name: "Hiking"  
    },
    {
      id: 5,
      name: "Picnicking"  
    },
    {
      id: 6,
      name: "Rock Climbing"  
    },
    {
      id: 7,
      name: "Lodging"  
    },
    {
      id: 8,
      name: "Parking"  
    },
    {
      id: 9,
      name: "Information"  
    },
    {
      id: 10,
      name: "Zip Lines"  
    }
],
  destinations :
   [{id: 1,
     name: "Lodge",
     location: "Northwest"
    },
    {
      id: 2,
      name: "Lost Wolf Hiking",
      location: "Northern"
    },
    {
      id: 3,
      name: "Chamfort River",
      location: "Northeast"
    },
    {
      id: 4,
      name: "Gander River",
      location: "Southwest"
    },
    {
      id: 5,
      name: "Campgrounds",
      location: "North"
    },
    {
      id: 6,
      name: "Pine Bluffs Trail",
      location: "Southeast"
    },                                         
],
  destinationServices:
   [{
      id: 1,
      destinationId: 1,
      serviceId: 7
    },
    {
      id: 2,
      destinationId: 1,
      serviceId: 8
    },
    {
      id: 3,
      destinationId: 1,
      serviceId: 9
    },
    {
      id: 4,
      destinationId: 1,
      serviceId: 5
    },  
    {
      id: 5,
      destinationId: 2,
      serviceId: 4
    },
    {
      id: 6,
      destinationId: 2,
      serviceId: 5
    },
    {
      id: 7,
      destinationId: 2,
      serviceId: 6
    },
    {
      id: 8,
      destinationId: 3,
      serviceId: 1
    },
    {
      id: 9,
      destinationId: 3,
      serviceId: 2
    },
    {
      id: 10,
      destinationId: 3,
      serviceId: 3
    },     
    {
      id: 11,
      destinationId: 4,
      serviceId: 3 
    },
    {
      id: 12,
      destinationId: 4,
      serviceId: 4  
    },
    {
      id: 13,
      destinationId: 5,
      serviceId: 7  
    },
    {
      id: 13,
      destinationId: 5,
      serviceId: 8  
    },
    {
      id: 14,
      destinationId: 5,
      serviceId: 9  
    },
    {
      id: 15,
      destinationId: 6,
      serviceId: 4
    },
    {
      id: 15,
      destination: 6,
      serviceId: 5  
    },
    {
      id: 15,
      destination: 6,
      serviceId: 10  
    }
]   
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getDestinations = () => {
    return database.guests.map(destination => ({...destination}))
}

export const getDestinationServices = () => {
    return database.guests.map(destinationService => ({...destinationService}))
}