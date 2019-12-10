import React, { Component } from 'react'
import {connect} from 'react-redux'
import {requestDetailData} from '../detailReducer'
import './style.scss'

class play extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    
  }
  
  render() {
    console.log(this.props.detailList);
    let playDOM = this.props.detailList.arr && this.props.detailList.arr.map((item, index) => {
        if(item.albumId.toString() == this.props.match.params.playId){
          return (
            <div className="wrap" key={index}>
              <img src={item.pic} alt="PlayImg" className='playImg'/>
              <audio src={item.video} controls className='playAudio'></audio>
            </div>
          )
        }
    
    })
    return (
      <div className='playPage'>
        {/* {this.props.match.params.playId} */}
        {playDOM}
      </div>
    )
  }
  componentDidMount(){
    this.props.getDetailData();
  }
}

const mapStateToProps = (state)=>{
  return {
    detailList: state.detailReducer.detailList
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    getDetailData(id){
      let action = requestDetailData(id);
      dispatch(action);
    },
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(play);