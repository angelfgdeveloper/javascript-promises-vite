import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesHellComponent = (element) => {

  const renderHero = (hero) => {
    element.innerHTML = hero.name;
  }

  const renderTwoHeroes = (hero1, hero2) => {
    element.innerHTML = `
      <h3>${ hero1.name }</h3>
      <h3>${ hero2.name }</h3>
    `;
  }

  const renderError = (error) => {
    element.innerHTML = `
      <h1>Error:</h1>
      <h3>${ error }</h3>
    `;
  }

  const id1 = '5d86371f2343e37870b91ef1';
  const id2 = '5d86371f233c9f2425f16916';

  // --- PROMISE HELL ---
  // findHero(id1).then((hero1) => {

  //   findHero(id2).then(hero2 => {
  //     renderTwoHeroes(hero1, hero2);
  //   }).catch(renderError);

  // }).catch(renderError);


  // --- PROMESAS EN CADENA ---
  // let hero1;

  // findHero(id1).then(hero => {
  //   hero1 = hero;
  //   return findHero(id2);
  // }).then(hero2 => {
  //   renderTwoHeroes(hero1, hero2);
  // }).catch(renderError); // unico catch para promesas en cadenada

  
  // --- PROMISE.ALL ---
  // Se ejecuta el then si todo salio correctamente
  // Las promesas no dependen de las respuestas de otras
  Promise.all([
    findHero(id1),
    findHero(id2),
  ])
  .then(([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
  .catch(renderError);

}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = (id) => {
  return new Promise((resolve, reject) => {
    const hero = heroes.find(hero => hero.id === id);

    if (hero) {
      resolve(hero); // Se ejecuta una sola vez
      return;
    }

    reject(`Hero with id ${ id } not found.`);
  });
}