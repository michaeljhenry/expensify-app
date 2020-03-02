import {ExpensesSummary} from '../../components/ExpensesSummary';
import {shallow} from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';
import {filters, altFilters} from '../fixtures/filters';
import moment from 'moment';

let visibleExpenses, expensesTotal, wrapper;

beforeEach(() => {
    visibleExpenses = jest.fn();
    expensesTotal = jest.fn();

    wrapper = shallow(
        <ExpensesSummary
            visibleExpenses={visibleExpenses}
            expensesTotal = {expensesTotal}
            expenses = {expenses}
            filters = {filters}
        />)
});


test('should display the correct amount of expenses and correct toal', () => {
    expect(wrapper).toMatchSnapshot();
}); 