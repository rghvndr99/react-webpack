import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import Main from "./components/Main";
import "./App.scss";
import {createStore,combineReducers,compose,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {userAction} from "./reducer/reducer.js";


const enhancer=compose(applyMiddleware(thunk));

const allReducers=combineReducers({
            userAction
});
const store=createStore(
    allReducers,{},enhancer
);

ReactDOM.render(<Provider store={store}><Main/></Provider>, document.getElementById("root"));