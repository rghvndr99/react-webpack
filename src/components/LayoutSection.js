import React, { Component } from 'react';
//import '../App.css';
import {doglisting,dogRandomImg} from '../action/action.js';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {BASE_URL,LIST,ALL_BREAD,SPECIFIC_BREAD,IMAGES,RANDOM} from '../constants/const.js';

class LayoutSection extends Component {
    constructor(props){
        super(props);
        this.state={
            imageurlrandom:[],
        };
    }

componentDidMount(){
  if(!this.props.isfromSearched){
    //this.props.dogRandomImg(this.props.baseURL+this.props.category+this.props.middleURL+this.props.lastURL);
    fetch(BASE_URL+SPECIFIC_BREAD+this.props.category+IMAGES+RANDOM).
            then((responseData)=>responseData.json()).
            then((responseData)=>this.setState({imageurlrandom:responseData.message}));  
        }   
    
  }
 
render() {
      let properties=this.props.userAction;
      let category=this.props.category;
      let imgURL=this.state.imageurlrandom;         
      const isfromSearched=properties.isfromSearched;
      let displaystatusbutton=true;
      const dogListing=this.props.doglisting;         
      let dogs=properties.listofdog?properties.listofdog:[];
      
      if(isfromSearched){
            imgURL=this.props.imageurl;
            displaystatusbutton=false;
            dogs=properties.imageurl?properties.imageurl:[];
            category=properties.activecategory;            
       }
 return ( 
        <div className="responsive">
          <div className="gallery">
            <a target="_blank">
              <img src={imgURL} alt={category} width="300" height="200" />
            </a>
             
              <div className="img-action">
              {displaystatusbutton &&
                <button className="img-load-more" onClick={()=>dogListing(category,false)}>View All</button>
             }
            <div className="desc">{category}</div>

           </div>
          </div>
      </div>
    );
  }
}

const mapstatetoprops=(state,props)=>{
  return state;
};

const mapActionsToProps=(dispatch)=>{
   return bindActionCreators({dogRandomImg,doglisting},dispatch);
}
export default connect(mapstatetoprops,mapActionsToProps) (LayoutSection);


