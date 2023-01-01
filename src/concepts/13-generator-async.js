import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorAsyncComponent = async(element) => {

  const heroGenerator = getHeroGenerator();
  let isFinished = false;

  do {
    const { value, done } = await heroGenerator.next();
    isFinished = done;

    console.log({ value, done });

    if (isFinished) break;

    element.innerHTML = value;
  } while ( !isFinished );  
  // element.innerHTML = (await heroGenerator.next()).value; // No hacerlo por que salta valores
  // si esta ejecutandose en el while o en otro lado
  // Tener cuidado a la hora de usar el next() ya que ejecuta el siguiente valor
  // } while ( !(await heroGenerator.next()).done ); // done tiene que ser false
}

async function* getHeroGenerator() {
  for (const hero of heroes) {
    await sleep(); // Demora un segundo en cada emision
    yield hero.name; // regresa el heroe
  }

  // tiene un return implicito que es undefined
  return 'No hay más';
}

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  })
}