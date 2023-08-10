# Cider-Falls-NiCHe

# Build application that displays information about the park areas, their services, and about the guests

# There are six major destinations in the park (Chamfort River, Lost Wolf Hiking Trail, Lodge, Gander River, Campgrounds, and Pine Bluffs Trail)

# Each destination section should have a title (e.g. Lost Wolf Hiking Trail)

# Each section should display the services it supports (e.g. hiking)

# The administrator wants the park logo and park name at the top of the page. She wants the main phone number, email address, and street address at the bottom of the page.

# All of the areas should be displayed in the proper location in a layout of two rows, and three columns. The areas grid should be in the main content area of the page, and left aligned.

# The names of all the current park guests should be listed in the main content area of the page, and right aligned.

## Write skeleton index.html file that includes the Logo Image, a Header, and a Footer. Link the stylessheet and scripts to index.html

## Create general HTML display structure in main and isolate the DOM in main. Set up elements so that area grid and guest list can be aligned next to each other in the main content

## Create database that includes Guests (id, firstName, lastName, destinationId), Destinations (id, name, location), Services (id, name), and DestinationServices(id, destinationId, serviceId).

## Create and export getter functions in database. GetGuests, GetDestinations, GetDestinationServices

## In Destinations module import necessary functions including destinationServicesList and create DestinationCards function, which will iterate through destination array invoking destinationServicesList to return HTML string which includes destination location, title, and services.

## In Guests module, import necessary functions and iterate through guests array to output guests list

## In Services module, create a function that destinationServicesList has the destination object as a parameter and returns what services are supported at that destination. Import GetDestinations, GetDestinationServices, GetServices

## CSS Stylings
