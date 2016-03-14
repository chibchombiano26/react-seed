/*global jest, expect*/

//jest.dontMock("../app/components/twit");
jest.unmock("../app/components/twit");

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Twit from '../app/components/twit.js'; 


describe('Twit', ()=> {
  let component;
  var item = {
        image : "",
        title: "Title Test",
        link : "<a></a>"
  };

  beforeEach(()=>{
      
    component = TestUtils.renderIntoDocument(
      <Twit title={item.title} image={item.image} link={item.link} ></Twit>
    );
    
  });


  it('Test if the content been correclty render', ()=> {
     expect(component).not.toBe(null)
  });
  
  
  it('Twit component', () => {
      
      var label = TestUtils.findRenderedDOMComponentWithTag(component,"p");
      expect(label.textContent).toEqual(item.title);
  });
  
  
});

