import { getDatabase } from "./database.js";
export const moodsList = () => {
    const mood = getDatabase()
    let htmlString = ''

    for (const moods of mood) {
        htmlString += `<div class="mood">
        <div class="first-mood"> ${moods.name}</div>
        <img src="${moods.imageUrl}" alt="${moods.text}"/>
        <div class="quote">  <div class="advice">Macho Advice:</div> ${moods.quotes}</div>
        </div>`
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


