import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {addExpense, removeExpense, editExpense, startSetExpenses} from './actions/expenses';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';



const store = configureStore();
//console.log(store.getState());

// store.dispatch(addExpense({description: 'Water Bill', amount: 70}));
// store.dispatch(addExpense({description: 'Gas Bill', createdAt: 2400}));
// store.dispatch(addExpense({description: 'Rent', amount: 1900}));

// console.log(store.getState());
// console.log(store.getState().expenses);

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//console.log(visibleExpenses);
  
const jsx = (
    <Provider store = {store}>
    <AppRouter/>
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
})


