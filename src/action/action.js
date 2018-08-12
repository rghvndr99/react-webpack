import {
CLOSE_CAROSOUL,
RESET,
DOG_LISTING_SUCCESS_REDUCER,
SUCCESS,
RANDOM_DOG_LISTING_SUCCESS,
LIST_OF_BREED,
HIDE_BREED_LIST,
BASE_URL,
LIST,
ALL_BREAD,
SPECIFIC_BREAD,
IMAGES
} from "../constants/const.js";
/*...............user action....................*/
export const closePopUp=(actionvalue=false)=>{
        return {
          type:CLOSE_CAROSOUL,
          actionvalue:actionvalue
    }
};
export const reset=()=>({
       type:RESET,
        payload:{}
});

export const doglistingSuccess=(responseData,displaystatusbutton,loadcarousel,isfromSearched,category)=>{
    return dispatch =>{
        dispatch({
        type:DOG_LISTING_SUCCESS_REDUCER,
        responseData,
        displaystatusbutton,
        isfromSearched,
        loadcarousel,
        category
    })
    }

}

export const doglisting=(category,isfromSearched)=>{
    return dispatch =>
    fetch(BASE_URL+SPECIFIC_BREAD+category+IMAGES)
    .then(responseData=>responseData.json())
    .then(responseData => {
      if (responseData.status=="success") {
            let displaystatusbutton=true;
               let loadcarousel=false;
                   if(isfromSearched){
                     displaystatusbutton=false;
                        }else{
                      loadcarousel=true;
                        }
        dispatch(doglistingSuccess(responseData.message,displaystatusbutton,loadcarousel,isfromSearched,category));
      } else {
        const error = new Error(responseData.statusText);
        error.response = responseData;
        throw error;
      }
    })
    .catch(error => { console.log("request failed", error); });
}

/*...................................*/


/*...............page load action....................*/

export function ReqSuccess(response) {
  return {
     response,
     type: SUCCESS
  };
}

export function randomDogSuccess(response) {
    return {
    imageurlrandom:response,
    type: RANDOM_DOG_LISTING_SUCCESS
  };
}

export function MakeNetworkReq() {
  return dispatch =>
    fetch(BASE_URL+ALL_BREAD+LIST)
    .then(responseData=>responseData.json())
    .then(responseData => {
      if (responseData.status=="success") {
        console.log(responseData);
        dispatch(ReqSuccess(responseData));
      } else {
        const error = new Error(responseData.statusText);
        error.response = responseData;
        throw error;
      }
    })
    .catch(error => { console.log("request failed", error); });
}

export function dogRandomImg(url){
    return dispatch =>
    fetch(url)
    .then(responseData=>responseData.json())
    .then(responseData => {
      if (responseData.status=="success") {
            dispatch(randomDogSuccess(responseData.message));
      } else {
        const error = new Error(responseData.statusText);
        error.response = responseData;
        throw error;
      }
    })
    .catch(error => { console.log("request failed", error); });
}

export function listingOfBreed(dogArr){
    return {
         dogArr,
        type: LIST_OF_BREED
  };
}

export function hidebreedlist(){
    return {
       display:false,
      type: HIDE_BREED_LIST
    };
}
/*...................................*/
