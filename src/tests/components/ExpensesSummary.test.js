import {ExpensesSummary} from '../../components/ExpensesSummary';
import {shallow} from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';
import {filters, altFilters} from '../fixtures/filters';
import moment from 'moment';



test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal = {234}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal = {23579876876}/>);
    expect(wrapper).toMatchSnapshot();
});







// MY ATTEMPT : LECTURE 140

// let visibleExpenses, expensesTotal, wrapper;

// beforeEach(() => {
//     visibleExpenses = jest.fn();
//     expensesTotal = jest.fn();

//     wrapper = shallow(
//         <ExpensesSummary
//             visibleExpenses={visibleExpenses}
//             expensesTotal = {expensesTotal}
//             expenses = {expenses}
//             filters = {filters}
//         />)
// });


// test('should display the correct amount of expenses and correct toal', () => {
//     expect(wrapper).toMatchSnapshot();
// }); 