import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment'


test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses is id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense with appropriate id', () => {
    const expense = {
        id: '4',
        description: 'what it do baybee',
        amount: 500,
        createdAt: 0,
        note: ''
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit the expense with the provided id', () => {
    const updates = {
        description: 'This is updated',
        amount: 20000,
        createdAt: moment(),
        note: 'hi',
        id: expenses[1].id
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], updates, expenses[2]]);
});

test('should edit the expense with the non-existent provided id', () => {
    const updates = {
        description: 'This is updated',
        amount: 20000,
        createdAt: moment(),
        note: 'hi',
        id: '5'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '5',
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});






// test('should not edit any expense if non-existant id provided', () => {
//     const updatedExpense = {
//         description: 'This is updated',
//         amount: 20000,
//         createdAt: moment(),
//         note: 'hi',
//         id: '5'
//     };
//     const action = {
//         type: 'EDIT_EXPENSE',
//         updatedExpense
//     };
//     const state = expensesReducer(expenses, action);
//     expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);