import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './style.scss'
import NavBar from '../../../components/navBar/navBar'
import {requestNavData, requestMainData} from './searchReducer'
import History from './children/history'


class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hisWord: []
    }
  }
  
  render() {
    // console.log(this.props.searchMainList);
    
    let id = 1;
    let lisDOM = this.props.searchMainList.map((item,index)=>(
      <Link to={ `/search/searchResult/${item.word}` }  key={index} 
      
      className="sortItem border-bottom" >
        <i className='num'>{id++}</i>
        <span className="name" onClick={this.lisAction.bind(this,index)} ref={"span-"+index}>{item.word}</span>
        {item.shift==1 ? <i className="tou iconfont icon-uparrow"></i> : <i className="tou tou1 iconfont icon-downarrow"></i>}
      </Link>
    ))
    return (
      <div className='searchPage'>
        <div className='searchCon'>
          <div className="headerCon">
            <form action="" className="form">
              <i className="iconfont icon-sousuo searchIcon"></i>
              <input type="text" className='ipt'/>
            </form>
            <span className="cancel">取消</span>
          </div>

        
          {<div className="searchWrap" ref='searchWrap' >
            <div className="searchMain">
              {/* 搜索历史 */}
              <History data={this.state.hisWord}/> 

              <NavBar  data={this.props.searchList} />
              <nav className="sortItems" ref='sortItems'>
                {lisDOM }
              </nav>
            </div>
          </div>}
        </div>
        {/* {this.props.searchList.length} */}
        {/* {this.props.searchMainList.length} */}
      </div>
    )
  }
  componentDidMount(){
    let myScroll3 =  new window.IScroll(this.refs.searchWrap, {
      tap: true,
      click: true,
      bounce: false,
      mouseWheel: true
    })
    myScroll3.on('beforeScrollStart',()=>{
      myScroll3.refresh();
    })
    //获取搜索页面的导航栏
    this.props.getSearchData();
    //获取搜索页面的主要数据
    this.props.getSearchMainData();
   
  }
  //点击事件
  lisAction(index){
    console.log(this.refs[`span-${index}`].innerText);
    let word = this.refs[`span-${index}`].innerText;
    this.setState({
      hisWord:[...this.state.hisWord, word]
    },()=>{
      console.log(this.state.hisWord);
    })
    
  }
 
}


const mapStateToProps = (state)=>{
  return {
    searchList: state.searchReducer.searchList,
    searchMainList:  state.searchReducer.searchMainList,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    getSearchData(){
      let action = requestNavData();
      dispatch(action);
    },
    getSearchMainData(){
      let action = requestMainData();
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(search);

//search nav   https://m.ximalaya.com/hotWordBillboardCategory
// search列表   https://search.ximalaya.com/hotWordBillboard/list/2.0?categoryId=-1&size=24

