import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import visibleExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import moment from 'moment'


export class ExpensesSummary extends React.Component {
    render() {
        return(
            <div>
                <p>{expensesTotal(this.props.expenses)}</p>
                <p>{visibleExpenses(this.props.expenses, this.props.filters)}</p>
            </div>
        );
    };
};

const mapStateToProps = (state,props) => ({
    expenses: state.expenses,
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    visibleExpenses: (expenses, filters) => dispatch(visibleExpenses(expenses, filters)),
    expensesTotal: (expenses) => dispatch(expensesTotal(expenses))
});
export default connect(mapStateToProps,mapDispatchToProps)(ExpensesSummary);