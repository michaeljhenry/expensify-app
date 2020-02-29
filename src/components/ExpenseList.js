import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from './../selectors/expenses';

export const ExpenseList = (props) => ( // exporting this unconnected version because we want to use it for testing
    <div>
    {
        props.expenses.length === 0? (
            <p>No expenses</p>
        ) : (
            props.expenses.map((expense) => {
                return <ExpenseListItem key = {expense.id} {...expense}/> // Why didn't I just pass in {expense} instead of {...expense} ? Aren't they both an object with the same info ?
            })
        )
    }

        
    </div>
);

const mapStateToProps = (state) => { // maps the store state to the component props
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);

