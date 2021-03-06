import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import numeral from 'numeral';
import visibleExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import moment from 'moment'
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';


export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
    return(
        <div className = 'page-header'>
            <div className = 'content-container'>
                <h1 className = 'page-header__title'>Viewing <span>{expenseCount}</span> {expenseWord} totaling <span>{formattedExpensesTotal}</span></h1>
                <div className = 'page-header__actions'>
                    <Link className = 'button' to='/create'>Add Expense</Link>
                </div>
            </div>

        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);

// MY ATTEMPT:  LECTURE 140

// export class ExpensesSummary extends React.Component {
//     render() {
//         return(
//             <div>
//                 <p>{expensesTotal(this.props.expenses)}</p>
//                 <p>{visibleExpenses(this.props.expenses, this.props.filters)}</p>
//             </div>
//         );
//     };
// };

// const mapStateToProps = (state,props) => ({
//     expenses: state.expenses,
//     filters: state.filters
// });

// const mapDispatchToProps = (dispatch) => ({
//     visibleExpenses: (expenses, filters) => dispatch(visibleExpenses(expenses, filters)),
//     expensesTotal: (expenses) => dispatch(expensesTotal(expenses))
// });
// export default connect(mapStateToProps,mapDispatchToProps)(ExpensesSummary);