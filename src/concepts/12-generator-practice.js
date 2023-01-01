
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsExampleComponent = (element) => {
  
  const genId = idGenerator();
  console.log(genId.next()); // 1
  console.log(genId.next()); // 2

  const button = document.createElement('button');
  button.innerText = 'Click me';
  element.append(button);

  const renderButton = () => {
    const { value } = genId.next();
    button.innerText = `Click ${ value }`;
  }

  // button.addEventListener('click', (event) => renderButton()); // #1
  // button.addEventListener('click', () => renderButton()); // #2
  button.addEventListener('click', renderButton); // #3

}

function* idGenerator() {

  let currentId = 0;
  while (true) { // ciclo infinito
    // (++currentId) => ++ al inicio porque incrementa primero y luego regresa el valor
    yield ++currentId;
    // (currentId++) => ++ el primer valor sera 0 y el siguiente ya 1, 2, 3, etc.
  }

}