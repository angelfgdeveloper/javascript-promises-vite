
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) => {
  
  const myGenerator = myFirstGeneratorFunction();

  console.log(myGenerator.next()); // {value: 'Primer valor', done: false}
  console.log(myGenerator.next()); // {value: 'Segundo valor', done: false}
  console.log(myGenerator.next()); // Dame el siguiente valor
  console.log(myGenerator.next()); // Dame el siguiente valor
  console.log(myGenerator.next()); // {value: 'Ya no hay valores', done: true}
  console.log(myGenerator.next()); // {value: undefined, done: true}

}


function* myFirstGeneratorFunction() {

  yield 'Primer valor';
  yield 'Segundo valor';
  yield 'Tercer valor';
  yield 'Cuarto valor';

  return 'Ya no hay valores';
}