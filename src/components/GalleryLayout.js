import React, { Component } from "react";
import LayoutSection from "./LayoutSection";
import LoadCarousol from "./loadCarosoul";
//import ErrorBoundary from "./ErrorHandling.js";
import {doglisting} from "../action/action.js";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

export class GalleryLayout extends Component {
    constructor(props){
        super(props);
          }
  render() {
      let properties=this.props.userAction;
      let listOfDogs=properties.listofdog?properties.listofdog:[];
      const isfromSearched=properties.isfromSearched;
      const loadcarousel=properties.loadcarousel;
      if(isfromSearched){
         listOfDogs=properties.imageurl?properties.imageurl:[];
      }
      const imgSection=listOfDogs.map(item=>{
          return <LayoutSection
                  key={item}
                  category={item}
                  imageurl={item}
                />
      })
    return (
     
        <div className="content">
        {imgSection}
        {loadcarousel &&
           <LoadCarousol />
        }
        </div>
        
    );
  }
}

const mapstatetoprops=(state)=>{
  return state;
};

const mapActionsToProps=(dispatch)=>{
   return bindActionCreators({doglisting},dispatch);
}
export default connect(mapstatetoprops,mapActionsToProps) (GalleryLayout);