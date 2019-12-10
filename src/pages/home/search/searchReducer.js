import 'whatwg-fetch'

const initialState = {
  searchList: [],
  searchMainList: []
}

// 同步action 
export const setSearchNavList = (val)=>({
  type: 'setNavList',
  value: val
})
export const setSearchMainList = (val)=>({
  type: 'setSearchMainList',
  value: val
})

//异步action
//search页面的导航栏
export const requestNavData = (id)=>async (dispatch)=>{
  let response = await fetch('https://m.ximalaya.com/hotWordBillboardCategory');
  let {category} = await response.json();
  // console.log(category);
  
  let action = setSearchNavList(category);
  dispatch(action);
}
//search页面的主要部分
export const requestMainData = (id)=>async (dispatch)=>{
  let response = await fetch('https://search.ximalaya.com/hotWordBillboard/list/2.0?categoryId=-1&size=24');
  let {hotWordResultList : data} = await response.json();
  // console.log(data);
  let newData = data.map(item => ({
    'shift': item.shift,
    'word': item.word
  }))
  let action = setSearchMainList(newData);
  dispatch(action);
}


export default (state = initialState, action)=>{
  switch (action.type) {
    case 'setNavList':
      return {
        ...state,
        searchList: action.value
      }
    case 'setSearchMainList':
      return {
        ...state,
        searchMainList: action.value
      }
    default:
      return state;
  }
  
}