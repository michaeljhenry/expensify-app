import uuid from 'uuid';
import database from '../firebase/firebase';

// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

// component calls action generator
// action generator returns a function
// component dispatches function
// function runs (has toe ability to dispatch other actions and do whatever it wants)

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = {description, note, amount, createdAt};
        return database.ref(`users/${uid}/expenses`).push(expense) // return for testing so we can chain the promise
        .then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        })
    };
};

// REMOVE EXPENSE ACTION

export const removeExpense = ({id} = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT EXPENSE ACTION

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_EXPENSES

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

//1. Fetch all expense data once
//2. Parse that data into an array
//3. Dispatch SET_EXPENSES

export const startSetExpenses = () => {
    
    return (dispatch, getState) => { // RETURNING A FUNCTION THAT
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value') // RETURNS A PROMISE
        .then((snapshot) => {
            let expensesArray = [];
            snapshot.forEach((childSnapshot) => {
                expensesArray.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
           dispatch(setExpenses(expensesArray));
        });
    }
};

// Create startRemoveExpense (same call signature as removeExpense)
// Test startRemoveExpense with "should remove expenses from firebase"
// Use startRemoveExpense in EditExpensePage instead of removeExpense
// Adjust EditExpensePage tests

export const startRemoveExpense = ({id} = {} ) => {
    return(dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove()
        .then(() => {
            dispatch(removeExpense({id}));
        });
    };
};

export const startEditExpense = (id, updates) => {
    return(dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates)
        .then(() => {
            dispatch(editExpense(id, updates))
        });
    };
};

