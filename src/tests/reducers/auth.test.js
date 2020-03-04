import authReducer from '../../reducers/auth';
import expenses from '../fixtures/expenses';


test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: expenses[1].id
    }
    const state = authReducer({}, action);
    expect(state.uid).toEqual(action.uid);
});


test('should clear uid logout', () => {
    const action = {
        type: 'LOGOUT',
    }
    const state = authReducer({uid: 'anything'}, action);
    expect(state).toEqual({});
});