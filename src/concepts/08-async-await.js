import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async(element) => {
  
  const id1 = '5d86371fd55e2e2a30fe1ccb2';
  const id2 = '5d86371fd55e2e2a30fe1cc4';

  try {
    const hero1 = await findHero(id1); // si dura un segundo
    const hero2 = await findHero(id2); // y dura otro segundo
  
    element.innerHTML = `${ hero1.name } / ${ hero2.name }`; // serian dos segundos
  } catch (error) {
    element.innerHTML = error; 
  }

}

const findHero = async(id) => {
  const hero = heroes.find(hero => hero.id === id);
  if (!hero) throw `Hero with id ${ id } not found`;

  return hero;
}