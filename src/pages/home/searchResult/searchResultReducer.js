import 'whatwg-fetch'

const initialState = {
  searchResultList: [],
}

// 同步action 
export const setSearchResultList = (val)=>({
  type: 'setSearchList',
  value: val
})

//异步action
//search页面的导航栏
export const requestSearchResultData = (id)=>async (dispatch)=>{
  console.log(id);
  
  let response = await fetch(`https://m.ximalaya.com/m-revision/page/search?kw=${id}&core=all&page=1&rows=5`);
  let {data} = await response.json();
  console.log(data);
  let newData = {};
 
  //主播数据
  let userObj = data.userViews.users.map(item => ({
    uid: item.userInfo.uid,
    nickName: item.userInfo.nickname,
    smallPic: item.userInfo.smallPic,
    counts: item.userInfo.followers_counts,
  }))
  newData.user = userObj;
  //专辑数据
  let albumObj = data.albumViews.albums.map(item => ({
    id: item.albumInfo.id,
    title: item.albumInfo.title,
    subTitle: item.albumInfo.recommend_reason,
    nickname: item.albumInfo.nickname,
    tracks: item.albumInfo.tracks,
    play: item.albumInfo.play,
    pic: item.albumInfo.cover_path
  }))
  newData.album = albumObj;
  //声音数据
  let voiceObj = data.trackViews.tracks.map(item => ({
    id: item.trackInfo.id,
    title: item.trackInfo.title,
    playCount: item.trackInfo.count_play,
    commonentCount: item.trackInfo.count_comment,
    duration: item.trackInfo.duration,
    pic: item.trackInfo.cover_path
  }))
  newData.voice = voiceObj;
  //听单数据
  let listenObj = data.specialViews.specials.map(item => ({
    id: item.id,
    play: item.play,
    title: item.title,
    updateTime: item.updated_at,
    pic: `https://imagev2.xmcdn.com/${item.cover_path_small}`
  }))
  newData.listen = listenObj;
  
  

  let action = setSearchResultList(newData);
  console.log(newData);
  
  dispatch(action);
}



export default (state = initialState, action)=>{
  switch (action.type) {
    case 'setSearchList':
      return {
        ...state,
        searchResultList: action.value
      }
    default:
      return state;
  }
  
}