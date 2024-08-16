
import { heroes } from "../data/heroes";


/** 
 * @param {HTMLDivElement} element 
 */
export const promesasComponent = (element) =>{
    const id = "5d86371fd55e2e2a30fe1ccb"
    const id2 = "5d86371f9f80b591f499df32"

    const renderHero = (hero)=>{
        element.innerHTML = hero.name;
    }

    const renderTwoHeros = (hero1,hero2)=>{
        element.innerHTML = `<h3>${hero1.name}</h3>
        <h3>${hero2.name}</h3>`;
    }

    const rendeError = (error)=>{
        element.innerHTML = error;
    }
    
    Promise.all([
        findHero(id),
        findHero(id2)
    ])
    .then(([hero1,hero2])=> renderTwoHeros(hero1,hero2))
    .catch(rendeError)




    // findHero(id)
    // .then(superHero => renderHero(superHero))
    // .catch(error =>rendeError(error) )


}
/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = (id) =>{

    const promise = new Promise((resolve, reject)=>{
        const hero = heroes.find(hero => hero.id === id);
        if (hero){
            resolve(hero);
            return;
        }
        reject(`Hero with id ${id} not found`);
    })


  return promise;

}