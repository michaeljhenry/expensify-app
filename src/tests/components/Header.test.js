// react-test-renderer
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import {shallow} from 'enzyme';
import React from 'react';
import Header from '../../components/Header';



test('Should render Header correctly', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();

   // expect(wrapper.find('h1').text()).toBe('Expensify');
//  const renderer = new ReactShallowRenderer();
//  renderer.render(<Header/>);
//  // first time we run it will always pass. then jest will create the snapshot. 2nd time it will compare with existing
//  expect(renderer.getRenderOutput()).toMatchSnapshot(); 
});