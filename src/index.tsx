import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import allReducers from './reducers';

const store = createStore(
  allReducers,
  composeWithDevTools()
);



// //STORE (Globalized State)

// //ACTION (WHAT YOU WANT TO DO) // Declaring what to be done

// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }

// //REDUCER (Logic) //type Reducer<S, A> = (state: S, action: A) => S 

// const counter = (state: number = 0, action: { type: string }): number => {

//   let result: number;

//   switch (action.type) {
//     case 'INCREMENT':
//       result = state + 1;
//       break;
//     case 'DECREMENT':
//       result = state - 1;
//       break;
//     default:
//       break;
//   }

//   return result!;
// }

// let store = createStore(counter)

// //Displaying into console log

// store.subscribe(() => console.log(store.getState()));
// //Do not put API calls into reducer!

// //DISPATCH (EXECUTE ACTION) //Run Function

// store.dispatch(increment());
// store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* Now this have access to the reducers I declared above, this can helps to arrange the structure of the states I want to use! */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change 
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
