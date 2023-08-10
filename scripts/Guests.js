import { getGuests } from "./database.js"

const guests = getGuests()

export const GuestList = () => {
    let guestHTML = "<ul>"

    for (const guest of guests) {
        guestHTML += `<li>${guest.firstName} ${guest.lastName}</li>`
    }
    guestHTML += `</ul>`
    return guestHTML
}