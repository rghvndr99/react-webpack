import React, { Component } from 'react';
//import '../App.css';
import { Carousel } from 'react-responsive-carousel';
import '../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import {closePopUp} from '../action/action.js';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";


class CarouselSection extends Component {
 
render() {
      let properties=this.props.userAction;
      const imgdatacategory=properties.imageurl;    
      
 return ( 
          <div className="overlay">
          <div className="carousal-wrapper">
            <div className="close-btn" onClick={()=>this.props.closePopUp()}>
            </div>
              <Carousel showArrows={true} selectedItem ={0} infiniteLoop={true} autoPlay={false} showThumbs={false} showIndicators={false}>
              {imgdatacategory.map((imgdata,index)=><div key={index+10000}><img alt="" key={index} className="carosoul-img-dimension" src={imgdata}/> </div>)}
             </Carousel>
            
        </div>
        </div>
    );
  }
}

const mapstatetoprops=(state,props)=>{
  return state;
};

const mapActionsToProps=(dispatch)=>{
   return bindActionCreators({closePopUp},dispatch);
}
export default connect(mapstatetoprops,mapActionsToProps) (CarouselSection);


