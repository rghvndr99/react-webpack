import React from "react";
import Hello from "../src/components/hello.js";
import * as actions from "../src/action/action.js";
import * as constants from "../src/constants/const.js";

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("MainFunction", () => {
	it("should be an object", ()=>{
		const wrapper=mount(<Hello/>);
		expect(wrapper.find('.test')).to.have.length(1);
	});
});

