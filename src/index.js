// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import { createStore } from 'redux';
console.log('Starting banking app')

const defaultState = {
  savings: 0,
  checking: 0
}

const ACTION_INCREMENT = 'INCREMENT';
const ACTION_DECREMENT = 'DECREMENT';

function createDeposit(value, account) {
  return {
    type: ACTION_INCREMENT,
    value: value,
    account: account
  }
}

function createWithdrawal(value, account) {
  return {
    type: ACTION_DECREMENT,
    value: value,
    account: account
  }
}

function accountReducer(state=defaultState, action) {
  switch (action.type) {
    case ACTION_INCREMENT:
      return {
        ...state,
        [action.account]: state[action.account] + action.value
      }
    case ACTION_DECREMENT:
      return {
        ...state,
        [action.account]: state[action.account] - action.value
      }
    default:
      return state;
  }
}

const store = createStore(accountReducer);

store.subscribe(() => {
  const state = store.getState()
  console.log(`New Savings: ${state.savings}`)
  console.log(`New Checking: ${state.checking}`)
})

window.store = store
window.createDeposit = createDeposit
window.createWithdrawal = createWithdrawal




