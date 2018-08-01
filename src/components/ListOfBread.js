import React, { Component } from 'react';
//import '../App.css';

import {doglisting,hidebreedlist} from '../action/action.js';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

class ListOfBread extends Component {
  constructor(props){
    super(props);
    this.loadBread=this.loadBread.bind(this);
    this.listrefBread=React.createRef();
  }
  loadBread=(bread)=>{
     this.props.doglisting(bread,true);
     this.props.hidebreedlist();	
  }
  render(){
  	const breadList =this.props.userAction.filteredBread;
  	const isdisplaylist=this.props.userAction.isdisplaylist===false?false:true;
  	const breadlistUI=breadList.map((bread)=>{
  		return <li key={bread} onClick={()=>this.loadBread(bread)} className="breadlist">{bread}</li>;
  	})
  	return (
  	     <div>
  	     {isdisplaylist && 
  	     	<ul className="breadliscontainer">{breadlistUI}</ul>}
  	     </div>
  	);
  		
  }
}


const mapstatetoprops=(state,props)=>{
  return state;
};

const mapActionsToProps=(dispatch)=>{
   return bindActionCreators({doglisting,hidebreedlist},dispatch);
}
export default connect(mapstatetoprops,mapActionsToProps) (ListOfBread);
