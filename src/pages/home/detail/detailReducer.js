import 'whatwg-fetch'

const initialState = {
  detailList: [],
  
}

// 同步action 
export const setDetailList = (val)=>({
  type: 'setDetailList',
  value: val
})



//异步action


//请求数据
export const requestDetailData = (id)=>async (dispatch)=>{
  let response = await fetch(`https://m.ximalaya.com/m-revision/common/album/queryAlbumTrackRecordsByPage?albumId=${id}&page=1&pageSize=10&asc=true`);
  let {data} = await response.json();
  console.log(data);
  let newData = {};
  let dataArr = data.trackDetailInfos.map(item => ({
    id: data.id,
    albumId: item.trackInfo.id,
    title: item.trackInfo.title,
    time: item.trackInfo.createdAt,
    video: item.trackInfo.playPath,
    pic: `https://fdfs.xmcdn.com/${item.trackInfo.cover}`
  }))
  newData.arr = dataArr;
  newData.count =  data.totalCount;
  let action = setDetailList(newData);
  dispatch(action);
}

export default (state = initialState, action)=>{
  switch (action.type) {
    case 'setDetailList':
      return {
        ...state,
        detailList: action.value
      }
    default:
      return state;
  }
  
}