import { getDatabase } from "./database.js";


export const moodsList = () => {
    const moods = getDatabase()
    let htmlString = ''

    for (const mood of moods) {
        htmlString += `<div class="mood">
        <div class="first-mood"> ${mood.name}</div>
        <img src="${mood.imageUrl}" alt="${mood.text}"/>
        <div class="advice-quotes">
         <div class="advice">Macho Advice:</div>
         <div class="vertical">`
        for (const quote of mood.quotes) {
            htmlString += `<div class="quote">${quote}</div>`
        }
        htmlString += `</div></div></div>`
    }
    return htmlString
}



// const allMoods = getDatabase() 
// for (const mood of allMoods) {
//     console.log(mood)
// }

/* export database and import on moods. 




for of loop to get each name  from the array.

for of loop to get each image and their alternative text for the image.

string interpolation to render on browser.

for of loop to get the quotes for each mood.*/


