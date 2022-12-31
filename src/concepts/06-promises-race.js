/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = (element) => {

  element.innerHTML = 'Loading...';
  
  const renderValue = (value) => {
    element.innerHTML = value;
  }
  
  Promise.race([
    slowPromise(),
    mediumPromise(),
    mediumPromise(),
    fastPromise(), // Esta se resuelve primero
    mediumPromise(),
    slowPromise(),
  ]).then(renderValue); // Muestra la primera promesa que se resolvio mas rapido

}

const slowPromise = () => new Promise(resolve => {
  setTimeout(() => {
    resolve('Slow Promise');
  }, 2000);
});

const mediumPromise = () => new Promise(resolve => {
  setTimeout(() => {
    resolve('Medium Promise');
  }, 1500);
});

const fastPromise = () => new Promise(resolve => {
  setTimeout(() => {
    resolve('Fast Promise');
  }, 1000);
});