import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {
  
  const id1 = '5d86371fd55e2e2a30fe1ccb1';
  // console.log(findHero(id1));
  console.log('Inicio de componente');

  // Las funciones asincronas no se ejecuta de manera sencuencial
  findHero(id1)
    // .then(console.log)
    .then(name => element.innerHTML = name)
    .catch(error => element.innerHTML = error);

  console.log('Fin del componente');
}

/**
 * 
 * @param {String} id 
 */
const findHero = async(id) => { // async transforma una funcion en una promesa
  const hero = heroes.find(hero => hero.id === id);
  if (!hero) throw `Hero with id ${ id } not found`;
  return hero.name;
}