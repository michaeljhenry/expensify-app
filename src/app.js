import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, {history}  from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {LoginPage} from './components/LoginPage';
import {addExpense, removeExpense, editExpense, startSetExpenses} from './actions/expenses';
import {login, logout} from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';



const store = configureStore();

  
const jsx = (
    <Provider store = {store}>
    <AppRouter/>
    </Provider>
);
let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user) => {
    if(user) {  
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
         renderApp();
         if(history.location.pathname==='/') {
             history.push('/dashboard');
         }
    });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
})



//console.log(store.getState());

// store.dispatch(addExpense({description: 'Water Bill', amount: 70}));
// store.dispatch(addExpense({description: 'Gas Bill', createdAt: 2400}));
// store.dispatch(addExpense({description: 'Rent', amount: 1900}));

// console.log(store.getState());
// console.log(store.getState().expenses);

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//console.log(visibleExpenses);

