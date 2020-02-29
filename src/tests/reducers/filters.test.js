import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toEqual('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'SORT_BY_AMOUNT'
    };
    const action = {
        type: 'SORT_BY_DATE'
    };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

// test('should set text filter', () => {
//     const state = filtersReducer(undefined, {type: 'SET_FILTER_TEXT', text: 'Whadup'});
//     expect(state.text).toBe('Whadup');
// });

test('should set text filter', () => {
    const text = 'This is my filter';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: moment().startOf('month')});
    expect(state.startDate).toEqual(moment().startOf('month')) // use toEqual because moment instances are objects
});

test('should set endDate filter', () => {
    const action = {type: 'SET_END_DATE', endDate: moment().endOf('month')}
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(moment().endOf('month'))
});