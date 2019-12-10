import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Play from '../../play/play'
import './style.scss'

export default class list extends Component {
  render() {
    console.log(this.props.data);
    let data = this.props.data;
    let listDOM = data.arr && data.arr.map((item,index) => {
      return (
        <Link to={`/detail/${item.id}/${item.albumId}`} className="detailItem border-bottom" key={index}>
          <div className="left"><i className="icon iconStop iconfont icon-zanting"></i></div>
          <p className="tit">{item.title}</p>
          <i className="icon iconDown iconfont icon-icon--"></i>
        </Link>
      )
    })
    return (
      <div className='detailList'>
        <div className="detailTop">
          <h2 className="title">节目({data.count})</h2>
          <span className="download">批量下载 ></span>
        </div>
        <nav className="detailItems">
          {listDOM}
        </nav>
        {/* <Play/> */}
      </div>
    )
  }
}
