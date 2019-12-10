import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.scss'

const tabItems = [
  {id: 1, title: '首页', icon: 'iconfont icon-shouye', path: '/home'},
  {id: 2, title: '我听', icon: 'iconfont icon-tingshu', path: '/listen'},
  {id: 3, title: '发现', icon: 'iconfont icon-caidaniconfaxianhui', path: '/discover'},
  {id: 4, title: '账号', icon: 'iconfont icon-zhanghao', path: '/user'},
]
export default ()=>{
    return (
      <nav className='items border-top'>
        {
          tabItems.map((item, index) => (
            <NavLink to={item.path} key={item.id} className='item' >
              <span className={item.icon}></span>
              <span className='title'>{item.title}</span>
            </NavLink>
          ))
        }
      </nav>
    )
  }