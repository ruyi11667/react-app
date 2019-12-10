import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

export default class album extends Component {
  render() {
    // console.log(this.props.albumData);
    // console.log(this.props.name);
    let name = this.props.name;

    let albumDOM =  this.props.albumData && this.props.albumData.map((item,index)=>{
      return (
        <Link to={`/detail/${item.id}`} className="albumItem border-bottom" key={index}>
          <img src={item.pic} alt="" className="albumLeft"/>
          <div className="albumRight">
            <p className="alTit">{item.title}</p>
            <p className="alSubTit text-overflow">{item.subTitle}</p>
            <p className="alBottom">
              <i className="iconfont icon-people icon"></i>
              <span className="nick alName">{item.nickname}</span>
              <i className="iconfont icon-loading icon"></i>
              <span className="count alName">{item.tracks}</span>
              <i className="iconfont icon-tingshu icon"></i>
              <span className="play alName">{item.play}</span>
            </p>
          </div>
        </Link>
      )
    })

    return (
      <div className="albumWrap">
        <div className="top">
          <p className="albumTit">{`'${name}' 相关的专辑`}</p>
          <span className="more">更多 ></span>
        </div>
        <nav className="albumItems">
          {albumDOM}
        </nav>
      </div>
    )
  }
}
