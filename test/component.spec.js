import React from "react";
import GalleryLayoutConnect from "../src/components/GalleryLayout.js";
import HeaderComponentConnect from "../src/components/HeaderComponent.js";
import * as mockdata from "./mockdata.js";

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";

configure({ adapter: new Adapter() });

describe("header component",()=>{
    let wrapper,store;
    let initialState={
    	      userAction:{
                 listofdog:mockdata.allBreeddata.message
             }
    };
    let mockstore=configureStore();
    beforeEach(()=>{
    	store=mockstore(initialState);
    	wrapper=mount(<Provider store={store}><HeaderComponentConnect /></Provider>);
    });

    it("check that headercomponent mounted correctly",()=>{
    	expect(wrapper.find(HeaderComponentConnect).length).to.equal(1);
    });
    it("check search box is present",()=>{
        expect(wrapper.find('.search-bread').length).to.equal(1);
    });
});
    
