import React from "react";
import * as actions from "../src/action/action.js";
import * as constants from "../src/constants/const.js";
import {userAction} from "../src/reducer/reducer.js"
import * as mockdata from "./mockdata.js";

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("reducer testing",()=>{
	it("should return initial state",()=>{
        expect(userAction(undefined,{})).to.deep.equal({});
	});
	/* close carosoul reducer testing */
	it("close carosoul reducer",()=>{
		 const actionvalue="dummy";
         const expectedObj={isfromSearched:actionvalue,loadcarousel:false};
         const closeAction={
         	 type:constants.CLOSE_CAROSOUL,
       	     actionvalue
         };
         expect(userAction({},closeAction)).to.deep.equal(expectedObj);
	});

	/* reset to home reducer testing */
	it("reset home reducer",()=>{
         const expectedObj={isfromSearched:false,isdisplaylist:false};
         const resetAction={
         	 type:constants.RESET
         };
         expect(userAction({},resetAction)).to.deep.equal(expectedObj);
	});

		/* Hide breed list reducer testing */
	it("Hide breed list reducer",()=>{
		 const expectedObj={isdisplaylist:false};
         const respectedaction={
         	 type:constants.HIDE_BREED_LIST,
         	 display:false
       	     };
         expect(userAction({},respectedaction)).to.deep.equal(expectedObj);
	});

		/* list of breed reducer testing */
	it("list of breed reducer",()=>{
		 const dogArr=mockdata.allBreeddata.message;
         const expectedObj={filteredBread:dogArr};
         const respectedaction={
         	 type:constants.LIST_OF_BREED,
       	     dogArr
         };
         expect(userAction({},respectedaction)).to.deep.equal(expectedObj);
	});

		/* dog listing success reducer testing */

    it("dog listing success reducer",()=>{
		 const dogArr=mockdata.perticularBreedData.message;
         const expectedObj={
         	imageurl:dogArr,
         	isfromSearched:true,
         	displaystatusbutton:true,
         	loadcarousel:false,
         	activecategory:'specific category'
         	 };
         const respectedaction={
         	 type:constants.DOG_LISTING_SUCCESS_REDUCER,
       	     responseData:dogArr,
             displaystatusbutton:true,
             isfromSearched:true,
              loadcarousel:false,
              category:'specific category'
         };
         expect(userAction({},respectedaction)).to.deep.equal(expectedObj);
	});

	/* random dog listing reducer testing */
	it("random dog listing reducer",()=>{
		 const dogArr=mockdata.randomDogData.message;
         const expectedObj={imageurlrandom:dogArr};
         const respectedaction={
         	 type:constants.RANDOM_DOG_LISTING_SUCCESS,
       	     imageurlrandom:dogArr
         };
         expect(userAction({},respectedaction)).to.deep.equal(expectedObj);
	});

	/* all breed reducer testing */
	it("all breed dog rendering reducer",()=>{
		 const dogArr=mockdata.allBreeddata.message;
         const expectedObj={
         	listofdog:dogArr,
         	imageurl:[],
            isfromSearched:false,
            displaystatusbutton:true,
            loadcarousel:false
         };
         const respectedaction={
         	 type:constants.SUCCESS,
       	     response:mockdata.allBreeddata
         };
         expect(userAction({},respectedaction)).to.deep.equal(expectedObj);
	});
})