import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

export default class header extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='header'>
        <span className='title'>喜马拉雅</span>
          <input type='text' placeholder='搜索' className='ipt'/>

          <Link to={'/search'} className='linkMask'/>

        <span className='iconfont icon-sousuo'></span>
      </div>
    )
   
  }
}


