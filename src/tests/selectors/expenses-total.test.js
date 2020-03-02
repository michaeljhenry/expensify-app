import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';


test('should correctly add multiple expenses', () => {
    expect(selectExpensesTotal(expenses)).toEqual(114195)
});

test('should return 0 if no expenses', () => {
    expect(selectExpensesTotal([])).toEqual(0);
});

test('should correctly add up a single expense', () => {
    expect(selectExpensesTotal([{amount: 20}])).toEqual(20)
});


// test('should return total amount of expenses', () => {
//     const expenseAmounts = expenses.map((expense) => {
//         return expense.amount;
//     });
//     expect(expenseAmounts.reduce(selectExpensesTotal,0)).toEqual(114194)
// });