import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesComponent = (element) => {

  const renderHero = (hero) => {
    element.innerHTML = hero.name;
  }

  const renderError = (error) => {
    element.innerHTML = `
      <h1>Error:</h1>
      <h3>${ error }</h3>
    `;
  }

  const id = '5d86371f2343e37870b91ef1';
  // findHero(id).then(hero => renderHero(hero));

  // Optimicación funcion por referencia
  findHero(id)
    .then(renderHero)
    .catch(renderError);
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = (id) => {
  return new Promise((resolve, reject) => {
    console.log('Promesa en ejecucion');

    const hero = heroes.find(hero => hero.id === id);

    if (hero) {
      resolve(hero); // Se ejecuta una sola vez
      return;
    }

    reject(`Hero with id ${ id } not found.`);
  });
}