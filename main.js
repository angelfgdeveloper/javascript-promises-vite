import './style.css'
import javascriptLogo from './javascript.svg'
import { environmentsComponent } from './src/concepts/01-environments';
import { callbacksComponent } from './src/concepts/02-callbacks';
import { callbacksHellComponent } from './src/concepts/03-callbacks-hell';
import { promisesComponent } from './src/concepts/04-promises';
import { promisesHellComponent } from './src/concepts/05-promises-hell';
import { promiseRaceComponent } from './src/concepts/06-promises-race';
import { asyncComponent } from './src/concepts/07-async';
import { asyncAwaitComponent } from './src/concepts/08-async-await';
import { asyncAwaitSequenceComponent } from './src/concepts/09-async-await-sequence';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">

    </div>
  </div>
`;

const element = document.querySelector('.card');
// environmentsComponent(element);
// callbacksComponent(element);
// callbacksHellComponent(element);
// promisesComponent(element);
// promisesHellComponent(element);
// promiseRaceComponent(element);
// asyncComponent(element);
// asyncAwaitComponent(element);
asyncAwaitSequenceComponent(element);