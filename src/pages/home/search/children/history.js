import React, { Component } from 'react'
import './history.scss'

export default class history extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show : false
    }
  }
  
  render() {
   console.log(this.props.data);
   
    let lisData = this.props.data || [];
    let DOM = lisData.map((item,index)=>(
      <span className='hisItem' key={index}>{item}</span>
    ))

    let dom = <div className='history' ref={(el)=>{this.el=el}} style={{width: '100%' }}>
                <p className="hisTop">
                  <span className="hisLeft">搜索历史</span>
                  <i className='iconfont icon-shanchu hisRub' onClick={this.deleteAction.bind(this)}></i>
                </p>
                {DOM}
              </div>

    return (
      <>{(lisData.length > 0) && dom}</>
    )
  }
  deleteAction(){
    console.log('删除了');
    this.el.style.display = 'none';
  }
  componentDidMount(){
    
  }
}
