import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from './../selectors/expenses';

export const ExpenseList = (props) => ( // exporting this unconnected version because we want to use it for testing
    <div className = 'content-container'>
        <div className = 'list-header'>
            <div className = 'show-for-mobile'>Expenses</div>
            <div className = 'show-for-desktop'>Expense</div>
            <div className = 'show-for-desktop'>Amount</div>
        </div>
        <div className = 'list-body'>
            {
                props.expenses.length === 0? (
                    <div className = 'list-item list-item--message'>
                        <span>No expenses</span>
                    </div>
                ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key = {expense.id} {...expense}/> // Why didn't I just pass in {expense} instead of {...expense} ? Aren't they both an object with the same info ?
                    })
                )
            }
        </div>
        
    </div>
);

const mapStateToProps = (state) => { // maps the store state to the component props
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);

