import React, { Component } from 'react';
//import '../App.css';
import HeaderComponent from './HeaderComponent';
import GalleryLayout from './GalleryLayout';
import {closePopUp,MakeNetworkReq,reset,doglisting} from '../action/action.js';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
 
class Main extends Component {
    constructor(props){
        super(props);
        this.dogListing=this.dogListing.bind(this);
    }
 componentDidMount(){
  this.props.MakeNetworkReq();       
 }

 dogListing=(category,isfromSearched)=>{
  this.props.doglisting(category,isfromSearched);
  }

  render() {
       return ( 
        <div>        
          <HeaderComponent/>

          <GalleryLayout />
        </div>
    );  
}
}

const mapstatetoprops=(state,props)=>{
  return state;
};

const mapActionsToProps=(dispatch)=>{
   return bindActionCreators({closePopUp,MakeNetworkReq,reset,doglisting},dispatch);
}
export default connect(mapstatetoprops,mapActionsToProps) (Main);