import 'whatwg-fetch'

const initialState = {
  tuiJianList: [],
  homeNavList: []
}

// 同步action 
export const setTuiJianList = (val)=>({
  type: 'setTuiJianList',
  value: val
})

export const setHomeNavList = (val)=>({
  type: 'setHomeNavList',
  value: val
})

//异步action
//请求首页主要内容数据
export const requestTuiJianData = (id)=>async (dispatch)=>{
  let response = await fetch('https://m.ximalaya.com/m-revision/page/index/queryIndexTabContent?moduleKey=tuijian');
  let {data} = await response.json();
  console.log(data);
  
  let conData = data.moduleContent.moduleRankDatas;
  let rankData = data.moduleContent.tomatoes;
  let newData = conData.map(item=>({
    title: item.title,
    conArr: item.rankingContentInfoList.rankModuleInfoList,
    rankArr: rankData
  }));
  console.log(newData);
  let action = setTuiJianList(newData);
  dispatch(action);
}

//请求首页navBar数据
export const requestNavListData = (id)=>async (dispatch)=>{
  let response = await fetch('https://m.ximalaya.com/m-revision/page/index/queryIndexTabModule');
  let {data} = await response.json();
  // console.log(data);
  
  let action = setHomeNavList(data);
  dispatch(action);
}

export default (state = initialState, action)=>{
  switch (action.type) {
    case 'setTuiJianList':
      return {
        ...state,
        tuiJianList: action.value
      }
    case 'setHomeNavList':
      return {
        ...state,
        homeNavList: action.value
      }
    default:
      return state;
  }
  
}