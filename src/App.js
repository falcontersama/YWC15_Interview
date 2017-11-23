import React, { Component } from 'react'
import axios from 'axios'
import Header from './Layouts/Header'


import AllMajorPage from './Layouts/AllMajor/AllMajorPage'
import ContentPage from './Layouts/Content/ContentPage'
import DesignPage from './Layouts/Design/DesignPage'
import MarketingPage from './Layouts/Marketing/MarketingPage'
import ProgrammingPage from './Layouts/Programming/ProgrammingPage'
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
        data : []
    }
  }

  componentWillMount(){
    axios.get('https://ywc15.ywc.in.th/api/interview')
        .then((res)=>{
            this.setState({data:res.data})
        })
    
  }

  render() {
    return (
      <div >
        <Router >
          <div>
          <Header />
          <div>
            <Switch>
                <Route exact path='/' component={() => (<AllMajorPage value={this.state.data} />)} />
                <Route path='/content' component={() => (<ContentPage value={this.state.data} />)} />
                <Route path='/design' component={() => (<DesignPage value={this.state.data} />)} />
                <Route path='/marketing' component={() => (<MarketingPage value={this.state.data} />)} />
                <Route path='/programming' component={() => (<ProgrammingPage value={this.state.data} />)} />
            </Switch>
          </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
