import {shallow} from 'enzyme';
import LoadingPage from '../../components/LoadingPage';
import React from 'react';

test('should correctly render LoadingPage', () => {
    const wrapper = shallow(<LoadingPage/>)
    expect(wrapper).toMatchSnapshot();
});