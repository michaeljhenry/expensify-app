

//export default (accumulator, currentValue) => accumulator + currentValue;
    
const accumulatorFunction = (accumulator, currentValue) => {
    return accumulator + currentValue;
};

export default (expenses) => {
    //if(expenses.length > 0) {
        const expenseAmounts = expenses.map((expense) => {
            return expense.amount;
        });
        return expenseAmounts.reduce(accumulatorFunction,0);    
   // } else {
        //return 0;
    //}
};
