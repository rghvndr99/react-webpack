import React from "react";
import * as actions from "../src/action/action.js";
import * as constants from "../src/constants/const.js";
import * as mockdata from "./mockdata.js";

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe ("close-carosoul action",()=>{
	it("should an object",()=>{
          expect(actions.closePopUp()).to.be.an("object");
	});

  it("should be equal to given object",()=>{
       const txt=true;
       const obj={
       	  type:constants.CLOSE_CAROSOUL,
       	  actionvalue:txt
       };
        expect(actions.closePopUp(txt)).to.deep.equal(obj);
	});

});

describe ("reset action",()=>{
	it("should an object",()=>{
          expect(actions.reset()).to.be.an("object");
	});
});

describe ("all breed response handler action",()=>{
	it("should an object",()=>{
          expect(actions.ReqSuccess()).to.be.an("object");
	});

	it("should be equal to a given object",()=>{
	   const response=mockdata.allBreeddata.message;
       const obj={
       	  type:constants.SUCCESS,
       	  response
       };
          expect(actions.ReqSuccess(response)).to.deep.equal(obj);
	});
});


describe ("random dog response handler action",()=>{
	it("should an object",()=>{
          expect(actions.randomDogSuccess()).to.be.an("object");
	});

	it("should be equal to a given object",()=>{
	   const response=mockdata.randomDogData.message;
       const obj={
       	  type:constants.RANDOM_DOG_LISTING_SUCCESS,
       	  imageurlrandom:response
       };
          expect(actions.randomDogSuccess(response)).to.deep.equal(obj);
	});
});


describe ("listing of dog in search action",()=>{
	it("should an object",()=>{
          expect(actions.listingOfBreed()).to.be.an("object");
	});

  it("should be equal to given object",()=>{
       const dogArr=mockdata.allBreeddata.message;
       const obj={
       	  type:constants.LIST_OF_BREED,
       	  dogArr
       };
        expect(actions.listingOfBreed(dogArr)).to.deep.equal(obj);
	});

});

describe ("hide breedlist action",()=>{
	it("should an object",()=>{
          expect(actions.hidebreedlist()).to.be.an("object");
	});
});