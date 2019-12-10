import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './style.scss'
export default class voice extends Component {
  render() {
    // console.log(this.props.voiceData);
    let name = this.props.name;
    let data = this.props.voiceData;
    let voiceDOM = data && data.map((item,index) => {
      return (
        <Link to={`/detail/${item.id}`} className="voiceItem border-bottom" key={index}>
          <img src={item.pic} alt="" className="voiceLeft"/>
          <div className="voiceRight">
            <p className="tit text-overflow">{item.title}</p>
            <p className="voiceBottom">
              <i className="iconfont icon-zanting1 icon"></i>
              <span className="nick voName">{item.playCount}</span>
              <i className="iconfont icon-pinglun icon"></i>
              <span className="count voName">{item.commonentCount}</span>
              <i className="iconfont icon-shi_jian icon"></i>
              <span className="play voName">{`${item.duration}分`}</span>
            </p>
          </div>
        </Link>
      )
    })
    return (
      <div className='voice'>
        <div className="top">
          <p className="voiceTit">{`'${name}' 相关的声音`}</p>
          <span className="more">更多 ></span>
        </div>
        <nav className="voiceItems">
          {voiceDOM}
        </nav>
      </div>
    )
  }
}
