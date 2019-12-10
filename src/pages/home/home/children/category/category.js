import React, { Component } from 'react'
import './style.scss'

let categoryList = [
  {img: '', title: '排行榜'},
  {img: '', title: '听单'},
  {img: '', title: '易烊千玺'},
  {img: '', title: '直播'},
  {img: '', title: '分类'},
]
export default class category extends Component {
 constructor(props) {
   super(props);
   
 }
 
  
  render() {
    
    // let rankArr = (this.props.catData)[0].rankArr || [];
   
    
    let cateDOM = categoryList.map((item, index) =>(
      <li key={index} className='cateItem'>
        <span className='img'></span>
        {/* <img src={item.img} alt="" className='img'/> */}
        <span className='title'>{item.title}</span>
      </li>
    ))
    return (
      <div className='category'>
        <nav className='cateItems'>
          {cateDOM}
          {/* {this.props.catData.length} */}
        </nav>
      </div>
    )
  // return <div>{rankArr.length}</div>
  }
}
