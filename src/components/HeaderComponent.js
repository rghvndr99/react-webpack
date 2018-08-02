import React, { Component } from 'react';
import ListOfBread from './ListOfBread';
import {reset,doglisting,dogRandomImg,listingOfBreed} from '../action/action.js';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";


class HeaderComponent extends Component {
  constructor(props){
    super(props);
    this.listBread=this.listBread.bind(this);
    this.reset=this.reset.bind(this);
    this.txtref=React.createRef();
  }
  reset(){
    this.txtref.current.value="";
    this.props.reset();
  }
  listBread(event){
    let inputVal=event.target.value;
    let listOfbread=this.props.userAction.listofdog;
    let filteredBread=listOfbread.filter((bread)=>{
                 return bread.toLowerCase().indexOf(inputVal.toLowerCase()) > -1;
    });
    filteredBread=inputVal!=""?filteredBread:[];
    this.props.listingOfBreed(filteredBread);
  }
  render() {
    const breadList =this.props.userAction.filteredBread?this.props.userAction.filteredBread:[];  
    return (
      <div className="App">
        <header className="App-header">
          <button className="btnhome" onClick={this.reset}></button>
          <span className="App-title">Welcome to React</span>
          <input type="text" ref={this.txtref} placeholder="search by bread" className="search-bread" onKeyUp={this.listBread}/>
                    {breadList.length>0 &&
                        <ListOfBread />
                    }
        </header>        
      </div>
    );
  }
}


const mapstatetoprops=(state,props)=>{
  return state;
};

const mapActionsToProps=(dispatch)=>{
   return bindActionCreators({reset,doglisting,dogRandomImg,listingOfBreed},dispatch);
}
export default connect(mapstatetoprops,mapActionsToProps) (HeaderComponent);
