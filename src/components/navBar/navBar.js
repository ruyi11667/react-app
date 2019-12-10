import React, { Component } from 'react'
import './style.scss'

//['推荐', '有声书', '相声', '音乐', '儿童', '人文', '情感', '历史', '科技']
// const navList = this.props.searchList;
export default class navBar extends Component {
  constructor(props) {

    super(props);
    this.state = {
      selectIndex: 0
    }
  }
  
  render() {
    console.log(this.props);
    
    let navDOM =  this.props.data.map((item, index) => (
    <li className={`navItem ${this.state.selectIndex===index? 'selActive': null}`}  
        ref={'navItem-'+index}
        key={index} 
        onClick={this.navAction.bind(this, index)} 
    >{item.categoryName}  {item.moduleName} {item.title}</li>));
    return ( 
      <div className='navBar border-bottom' ref='navBar'>
        <nav className='navItems'>
          {navDOM}
        </nav>
      </div>
    ) 
  }
  

  navAction(index){
    this.setState({
      ...this.state,
      selectIndex: index
    },()=>{
      // console.log(this.state.selectIndex);
      this.props.indexAction(this.state.selectIndex);
      // this.askData(this.state.selectIndex);
    })
    // console.log(this.refs[`navItem-${index}`]);
  }
  
  

  componentDidMount(){
    let myScroll = new window.IScroll(this.refs.navBar, {
      tap: true,
      click: true,
      scrollX: true
    })
  }
  
}

