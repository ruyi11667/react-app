import React, { Component } from 'react'
import {connect} from 'react-redux'

import Header from '../../../components/header/header'
import NavBar from '../../../components/navBar/navBar'
import MainTui from './children/mainTui/main'
import MainYou from './children/mainYou/main'
import {requestTuiJianData, requestNavListData} from './homeReducer'

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeIndex: 0,
    }
    
  }
  
  render() {
    let {homeIndex} = this.state;
    let Tmp = homeIndex === 0 ? MainTui : MainYou;
    let props = {};
    if(homeIndex === 0){
      props = {
        tuiJianList: [],
        homeNavList: []
      }
    }else {
      props = {

      }
    }
    return (
      <div className='page' id='home'>
        <Header/>
        <div className='wrap' ref='wrap'>
          <div className='main'>
            <NavBar indexAction={this.askData.bind(this)} data={this.props.homeNavList}/>
            <Tmp tuiData={this.props.tuiJianList}/>
            {/* {this.props.homeNavList.length} */}
          </div>
        </div>
      </div>
    )
  }
  askData(index){
    if(index === 0){
      //请求推荐栏数据
      this.setState({homeIndex: index},()=>{ console.log(this.props.tuiJianList);});

    }else if(index === 1){
      //请求有声书一栏的数据
      this.setState({homeIndex: index});
    }
  }

  fetchData(){
    // 判断目前在哪个位置， 请求对应模块的数据
    if(this.state.homeIndex === 0){
      //请求推荐的数据
      
      if(this.props.tuiJianList.length > 0){
        //已经有数据了
        return;
      }else{
        //才开始请求
        this.props.getTuiJianData();
      }
    }else{
      //请求有声书的数据
    }
    
  }
  componentDidMount(){
    let myScroll2 =  new window.IScroll(this.refs.wrap, {
      tap: true,
      click: true,
      bounce: false,
      mouseWheel: true
    })
    myScroll2.on('beforeScrollStart',()=>{
      myScroll2.refresh();
    })
    this.fetchData();
    this.props.getNavData();
  }  
}


const mapStateToProps = (state)=>{
  return {
    tuiJianList: state.homeReducer.tuiJianList,
    homeNavList: state.homeReducer.homeNavList
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    getTuiJianData(){
      let action = requestTuiJianData();
      dispatch(action);
    },
    getNavData(){
      let action = requestNavListData();
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(home);