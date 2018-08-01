import {
CLOSE_CAROSOUL,
RESET,
DOG_LISTING_SUCCESS_REDUCER,
SUCCESS,
RANDOM_DOG_LISTING_SUCCESS,
LIST_OF_BREED,
HIDE_BREED_LIST,
} from '../constants/const.js';

export function userAction(state="",action){	
	let newstate={...state};
  switch (action.type) {

    case CLOSE_CAROSOUL:       
       newstate.isfromSearched=action.actionvalue;
       newstate.loadcarousel=false;
       return newstate;

    case RESET:
       newstate.isfromSearched=false;
       newstate.isdisplaylist=false;
       return newstate;

    case DOG_LISTING_SUCCESS_REDUCER:
         newstate.imageurl=action.responseData;
         newstate.isfromSearched=action.isfromSearched;
         newstate.displaystatusbutton=action.displaystatusbutton;
         newstate.loadcarousel=action.loadcarousel;
         newstate.activecategory=action.category;
         return newstate;

     case RANDOM_DOG_LISTING_SUCCESS:
          newstate.imageurlrandom=action.imageurlrandom;
         return newstate;

    case SUCCESS:
       newstate.listofdog=action.response.message;
       newstate.imageurl=[];
       newstate.isfromSearched=false;
       newstate.displaystatusbutton=true;  
       newstate.loadcarousel=false;
       return newstate;

     case LIST_OF_BREED:
        newstate.filteredBread=action.dogArr;
        return newstate; 

     case HIDE_BREED_LIST:
        newstate.isdisplaylist=action.display;
        return newstate;

     default:
      return newstate;
  }

}