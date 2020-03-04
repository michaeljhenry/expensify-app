    import {shallow} from 'enzyme';
    import {login, logout} from '../../actions/auth';
    import expenses from '../fixtures/expenses';


test('should setup login auth action object', () => {
    const action = login(expenses[1].id);
    expect(action).toEqual({
        type: 'LOGIN',
        uid: expenses[1].id
    });

});

test('should setup logout auth action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT',
    });

});