import React, { Component } from 'react'
import {connect} from 'react-redux'
import {requestSearchResultData} from './searchResultReducer'
import Header from '../../../components/header/header'
import  NavBar from '../../../components/navBar/navBar'
import Album from './children/album/album'
import Voice from './children/voice/voice'
import Listen from './children/listen/listen'

import './style.scss'

class searchResult extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    
  }
  
  render() {
    let data = [
      {id: 0, title: '全部'},
      {id: 0, title: '专辑'},
      {id: 0, title: '声音'},
      {id: 0, title: '主播'},
      {id: 0, title: '听单'}
    ];
    console.log(this.props.searchResultList);
    let name = this.props.match.params.id;
    let resultData = this.props.searchResultList;
    let userDOM = this.props.searchResultList.user && this.props.searchResultList.user.map((item,index) =>{
      console.log(item);
      return(
        <div className="userItem swiper-slide" key={index}>
          <img src={item.smallPic} alt="" className="userImg"/>
          <div className="userRight">
            <h4 className="title">{item.nickName}</h4>
            <i className="iconfont icon-people icon"></i>
            <span className="num">{`${item.counts/10}万`}</span>
          </div>
        </div>
      )
    })
    return (
      <div className='searchResult'>
        <Header/>
        <NavBar data={data}/>

        <div className='resultWrap' ref='resultWrap'>
          <div className="resultCon">
            <div className="top">
              <p className="left">{`'${name}' 相关的主播`}</p>
              <span className="more">更多 ></span>
            </div>
            <div className="ulWrap swiper-container " ref='ulWrap'>
              <div className="userItems swiper-wrapper" >
                {userDOM}
                {/* <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
                <div class="swiper-slide">Slide 6</div>
                <div class="swiper-slide">Slide 7</div>
                <div class="swiper-slide">Slide 8</div>
                <div class="swiper-slide">Slide 9</div>
                <div class="swiper-slide">Slide 10</div> */}
              </div>  
            </div>

            {resultData.album && resultData.album.length > 0 ? <Album albumData={resultData.album} name={name}/> : <></>}
            { resultData.voice && resultData.voice.length > 0 ? <Voice voiceData={resultData.voice} name={name}/> : <></>}
            { resultData.listen && resultData.listen.length > 0 ?  <Listen listenData={resultData.listen} name={name}/> : <></>}
          </div>
          
        </div> 
      </div>
    )
  }
  componentDidUpdate(){
   
  }
  componentDidMount(){
    let myScroll4 =  new window.IScroll(this.refs.resultWrap, {
      tap: true,
      click: true,
      bounce: false,
      mouseWheel: true
    })
    myScroll4.on('beforeScrollStart',()=>{
      myScroll4.refresh();
    })
    
    var mySwiper = new window.Swiper (this.refs.ulWrap, {
      direction: 'horizontal', // 水平切换选项
      // loop: true, // 循环模式选项
      // autoplay:true,
      observer:true,//修改swiper自己或子元素时，自动初始化swiper/
      observeParents:true,//修改swiper的父元素时，自动初始化swiper
      slidesPerView: 2,
      spaceBetween: 30,
      freeMode: true
    })
    this.props.getSearchResultData(this.props.match.params.id);
    
  }
}

const mapStateToProps = (state)=>{
  return {
    searchResultList: state.searchResultReducer.searchResultList,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    getSearchResultData(id){
      let action = requestSearchResultData(id);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(searchResult);
