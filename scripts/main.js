import { getDatabase } from "./database.js";
import {moodsList} from "./moods.js"




const allMoods = getDatabase() 
for (const mood of allMoods) {
    console.log(mood)
}

const moodsHTML = moodsList()





const container = document.querySelector('#container')
container.innerHTML=moodsHTML
