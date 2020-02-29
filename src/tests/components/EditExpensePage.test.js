import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense;
let removeExpense;
let history;
let wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expenses[1]}
    />
  );
});

// test('should render EditExpensePage', () => {
//   expect(wrapper).toMatchSnapshot();
// });

// test('should handle editExpense', () => {
//   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
//   expect(history.push).toHaveBeenLastCalledWith('/');
//   expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
// });


test('should render EditExpensePage correctly', () => {
    const removeExpense = jest.fn();
    const editExpense = jest.fn();
    const history = {push: jest.fn() };
    const wrapper = shallow(<EditExpensePage editExpense = {editExpense} removeExpense = {removeExpense} history = {history} expense = {expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense correctly', () => {
    const editExpense = jest.fn();
    const history = {push: jest.fn() };
    const wrapper = shallow(<EditExpensePage expense = {expenses[1]} editExpense = {editExpense} removeExpense = {removeExpense} history = {history}/>);
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('should handle removeExpense', () => {
    // const removeExpense = jest.fn();
    // const editExpense = jest.fn();
    // const history = {push: jest.fn()};
    // const wrapper = shallow(<EditExpensePage expense = {expenses[2]} history = {history} editExpense = {editExpense} removeExpense = {removeExpense}/>);
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[1].id
      });
});