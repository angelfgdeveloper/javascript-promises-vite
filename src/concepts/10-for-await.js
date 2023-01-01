import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {

  const id = '5d86371fd55e2e2a30fe1cc3';

  // IF CON AWAIT
  // if ( await getHeroAsync(id) ) {
  //   element.innerHTML = `Si existe ese héroe`;
  //   return;
  // }

  // element.innerHTML = `No existe ese héroe`;


  // FOR AWAIT
  const heroIds = heroes.map(hero => hero.id);
  const heroPromises = getHeroesAsync(heroIds);

  for await(const hero of heroPromises) {
    element.innerHTML += `${ hero.name } <br/>`;
  }

}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}