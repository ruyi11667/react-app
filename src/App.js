import React, { Component, lazy, Suspense } from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Loading from './components/loading/loading'
import Tabs from './components/tabs/tabs'

const Home = lazy(() => import('./pages/home/home/home'));
const Discover = lazy (() => import('./pages/discover/discover/discover'));
const Listen = lazy (() => import('./pages/listen/listen/listen'));
const User = lazy (() => import('./pages/user/user/user'));
const Search = lazy (() => import('./pages/home/search/search'));
const SearchResult = lazy (() => import('./pages/home/searchResult/searchResult'));
const Detail = lazy (() => import('./pages/home/detail/detail'))
const Play = lazy (() => import('./pages/home/detail/play/play'))

export default class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<Loading/>}>
          
          <Switch>
            <Route path='/' exact render={()=>{
              return <Redirect to='/home'></Redirect>
            }}/>
            <Route path="/home" component={Home}/>
            <Route path='/discover' component={Discover}/>
            <Route path='/listen' component={Listen}/>
            <Route path='/user' component={User}/>


          </Switch>

          <>
            <Route path='/search' component={Search}/>
            <Route path='/search/searchResult/:id' component={SearchResult}/>
            <Route path='/detail/:id' exact component={Detail}/>
            <Route path='/detail/:id/:playId' exact component={Play}/>
            
            
          </>
          <>
            
          </>
          <Tabs/>
        </Suspense>
      </Router>
    )
  }
}
