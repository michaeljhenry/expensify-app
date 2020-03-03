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
    return (dispatch) => {
        const {
            description,
            note,
            amount,
            createdAt
        } = expenseData;
        const expense = {description, note, amount, createdAt};
        return database.ref('expenses').push(expense) // return for testing so we can chain the promise
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