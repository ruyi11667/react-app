import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import homeReducer from '../pages/home/home/homeReducer'
import searchReducer from '../pages/home/search/searchReducer'
import searchResultReducer from '../pages/home/searchResult/searchResultReducer'
import detailReducer from '../pages/home/detail/detailReducer'

const reducer = combineReducers({
  homeReducer,
  searchReducer,
  searchResultReducer,
  detailReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;