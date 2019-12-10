import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Category from '../category/category'
import './style.scss'


export default class mainTui extends Component {
  render() {
    console.log(this.props.tuiData);
  
    let tmp = this.props.tuiData;
   
    let h3Dom = tmp.map((item,index)=>{
      return (
        <div key={index}>
          <div  className="topTitle">
            <h3 className="left">{item.title}</h3>
            <a href="#" className="more">更多&nbsp; ></a>
          </div>
           
          {item.conArr && item.conArr.map((con,index1) => (
            <ul  className='newItems' key={index1}>
              <Link to={`/detail/${con.albumInfo.id}`} className='newItem'>
                <img src={`https://imagev2.xmcdn.com/${con.albumInfo.cover}`} alt="" className="leftImg"/>
                <div className="rightCon">
                  <h3 className="tit text-overflow">{con.albumInfo.title}</h3>
                  <span className="two text-overflow">{con.albumInfo.customTitle}</span>
                  <p className="three">
                    <i className='iconfont icon-loading ll'></i><span className="num">{con.statCountInfo.trackCount}</span>
                    <i className='iconfont icon-tingshu rr'></i><span className="bigNum">{con.statCountInfo.playCount}</span>
                  </p>
                </div>
              </Link>
              <p className="line border-bottom"></p>
            </ul>
          ))}
          
      </div>
      )
    })

    
    return (
      <div className='mainCon'>

        <Category catData={[this.props.tuiData]}/>
        {h3Dom}
      </div>
    )
  }
}
