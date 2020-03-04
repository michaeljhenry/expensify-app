import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense;
let startRemoveExpense;
let history;
let wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
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
    const startRemoveExpense = jest.fn();
    const startEditExpense = jest.fn();
    const history = {push: jest.fn() };
    const wrapper = shallow(<EditExpensePage startEditExpense = {startEditExpense} startRemoveExpense = {startRemoveExpense} history = {history} expense = {expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense correctly', () => {
    const startEditExpense = jest.fn();
    const history = {push: jest.fn() };
    const wrapper = shallow(<EditExpensePage expense = {expenses[1]} startEditExpense = {startEditExpense} startRemoveExpense = {startRemoveExpense} history = {history}/>);
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('should handle removeExpense', () => {
    // const removeExpense = jest.fn();
    // const startEditExpense = jest.fn();
    // const history = {push: jest.fn()};
    // const wrapper = shallow(<EditExpensePage expense = {expenses[2]} history = {history} editExpense = {editExpense} removeExpense = {removeExpense}/>);
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: expenses[1].id
      });
});