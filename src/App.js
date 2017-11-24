import React, { Component } from 'react'
import axios from 'axios'
import Header from './Layouts/Header'


import AllMajorPage from './Layouts/AllMajor/AllMajorPage'
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
        data : [],
        filter : 'All',
    }
    this.changeFilter = this.changeFilter.bind(this)
  }

  componentWillMount(){
    axios.get('https://ywc15.ywc.in.th/api/interview')
        .then((res)=>{
            this.setState({data:res.data})
        })
    
  }

  changeFilter(filtertext){
    this.setState({filter:filtertext})
  }

  render() {
    return (
      <div >
        <Router >
          <div>
          <Header changeFilter={this.changeFilter} value={this.state.filter}/>
          <div>
            <AllMajorPage value={this.state.data} value2={this.state.filter}/>
            {/* <Switch>
                <Route exact path='/' component={() => (<AllMajorPage value={this.state.data} />)} />
                <Route path='/content' component={() => (<ContentPage value={this.state.data} />)} />
                <Route path='/design' component={() => (<DesignPage value={this.state.data} />)} />
                <Route path='/marketing' component={() => (<MarketingPage value={this.state.data} />)} />
                <Route path='/programming' component={() => (<ProgrammingPage value={this.state.data} />)} />
            </Switch> */}
          </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
