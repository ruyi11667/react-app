import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

export default class listen extends Component {
  render() {
    let data = this.props.listenData;
    let name = this.props.name;
    // console.log(this.props.listenData);

    let listenDOM = data && data.map((item,index) => {
      return (
        <Link to={`/detail/${item.id}`} className="listenItem border-bottom" key={index}>
          <img src={item.pic} alt="" className="lisLeft"/>
          <div className="lisRight">
            <p className="tit">{item.title}</p>
            <p className="bot">
              <i className="iconfont icon-zanting icon"></i>
              <span className="nick lisName">{item.play}</span>
              <span className="nick lisName">{`${item.updateTime}更新`}</span>
            </p>
          </div>
        </Link>
      )
    })
    
    return (
     <>
      <div className='listen'>
        <div className="top">
          <p className="listenTit">{`'${name}' 相关的听单`}</p>
          <span className="more">更多 ></span>
        </div>
        <nav className="listenItems">
          {listenDOM}
        </nav>
      </div>
     
     </>
      
    )
  }
}
