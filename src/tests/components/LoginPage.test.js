import {LoginPage} from '../../components/LoginPage';
import {shallow} from 'enzyme'
import React from 'react';

test('should correctly render the login page', () => {
    const wrapper = shallow(<LoginPage/>);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    const startLogin = jest.fn();
    const startLogout = jest.fn();
    const wrapper = shallow(<LoginPage startLogin = {startLogin}/>)
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
})