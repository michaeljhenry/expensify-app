import moment from 'moment'

export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expenses) => {
        const createdAtMoment = moment(expenses.createdAt);
        // Explaining this code in case I look at it and get confused later...
        // They provide us a list of expenses and we want to see if we should include each item.
        // They enter a startDate that they want to filter from. Every expense before that date will be filtered out and not shown.
        // Similar process followed for endDate. textMatch makes sure the text is inside the string.
        // If all these are true, it won't be filtered out and will then be added to the sort function.
        const startDateMatch = startDate? startDate.isSameOrBefore(createdAtMoment, 'day'): true; 
        const endDateMatch = endDate? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        const textMatch = expenses.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if((sortBy === 'date') || (sortBy === '')) {
            return a.createdAt < b.createdAt? 1 : -1; // most recent expenses come first
        }
        if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};
