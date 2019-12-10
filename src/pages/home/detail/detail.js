import React, { Component } from 'react'
import {connect} from 'react-redux'
import {requestDetailData} from './detailReducer'
import List from './children/list/list'
import './style.scss'

class detail extends Component {
  render() {
    console.log(this.props);
    
    return (
      <div className='detail' ref='detailWrap'>
        {/* {this.props.match.params.id} */}
        <List data={this.props.detailList}/>
      </div>
    )
  }
  componentDidMount(){
    let myScroll6 = new window.IScroll(this.refs.detailWrap, {
      tap: true,
      click: true,
      bounce: false,
      mouseWheel: true
    })
    myScroll6.on('beforeScrollStart',()=>{
      myScroll6.refresh();
    })
    myScroll6.on('scroll',()=>{
      console.log(111111111111111111111111111);
    })
    this.props.getDetailData(this.props.match.params.id);
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

export default connect(mapStateToProps, mapDispatchToProps)(detail);