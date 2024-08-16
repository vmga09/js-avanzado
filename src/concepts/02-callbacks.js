/** 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes";



export const callbackComponent = (element) =>{
    const id = '5d86371fd55e2e2a30fe1ccb';

    findHero(id, (err,hero)=>{
        //element.innerHTML = `<h1>${hero?.name || "No hay heroe"}</h1>`;
        if(err){
            element.innerHTML = err
            return;
        }
        element.innerHTML = `<h1>${hero.name }</h1>`
    });


}

/**
 * 
 * @param {String} id 
 * @param {(error: String| null, hero:Object)=>void} callback 
 */
const findHero = (id, callback) =>{
    const hero = heroes.find(hero => hero.id === id);

    if (!hero){
        callback(`El heroe ${id} no se encuentra`);
        return;
    }
    callback(null,hero);
}