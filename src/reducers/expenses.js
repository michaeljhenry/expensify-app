
// Expenses Reducer
const expensesReducerDefaultState = []

export default (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id); // deconstruct the expenses object that the filter function iterates over?
/*             return state.filter(() => {
                entry => entry.id !== action.id
            });  THIS IS HOW I DID IT..IT WORKED*/
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }

                } else {
                    return expense;
                }
            });
        case 'SET_EXPENSES':
            return action.expenses;

        default:
            return state;
    }
};

