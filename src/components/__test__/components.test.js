import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import renderer from "react-test-renderer";
// import App from '../app.js';
import App from '../../app.js';
// import Counter from '../settings/site-context.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Our components are functioning', () => {
  it('Form renders', () => {
    let deck = mount(<App />);
    let div = deck.find('div');
    expect(div.exists()).toBeTruthy();
  });

  it('Our components are functioning', () => {
    let deck = mount(<App />);
    let span = deck.find('div');
    expect(span.exists()).toBeTruthy();
  });

  it('Our components are functioning', () => {
    let deck = mount(<App />);
    let button = deck.find('div');
    expect(button.exists()).toBeTruthy();
  });
});
