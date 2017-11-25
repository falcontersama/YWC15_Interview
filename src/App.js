import React, { Component } from 'react'
import axios from 'axios'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'

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
        headerStart: false,
        headerContent: false,
        headerDesign: false,
        headerMarketing: false,
        headerProgrammer: false,
    }
    this.changeFilter = this.changeFilter.bind(this)
    this.changeStart = this.changeStart.bind(this)
    this.changeContent = this.changeContent.bind(this)
    this.changeDesign = this.changeDesign.bind(this)
    this.changeMarketing = this.changeMarketing.bind(this)
    this.changeProgrammer = this.changeProgrammer.bind(this)
  }

  componentWillMount(){
    axios.get('https://ywc15.ywc.in.th/api/interview')
        .then((res)=>{
            this.setState({data:res.data})
        })
  }

  changeStart(){
    console.log(this.state.headerStart)
    this.setState({headerContent: false, 
                  headerContent: false, 
                  headerDesign: false, 
                  headerMarketing: false, 
                  headerProgrammer: false
                })
  }

  changeContent(){
    console.log(this.state.headerContent)
    if(this.state.headerContent == false){
      this.setState({ headerContent: true })
    }else{
      this.setState({ headerContent: false })
    }
  }

  changeDesign(){
    console.log(this.state.headerDesign)
    if(this.state.headerDesign == false){
      this.setState({ headerDesign: true })
    }else{
      this.setState({ headerDesign: false })
    }
  }

  changeMarketing(){
    console.log(this.state.headerMarketing)
    if(this.state.headerMarketing == false){
      this.setState({ headerMarketing: true })
    }else{
      this.setState({ headerMarketing: false })
    }
  }

  changeProgrammer(){
    console.log(this.state.headerProgrammer)
    if(this.state.headerProgrammer == false){
      this.setState({ headerProgrammer: true })
    }else{
      this.setState({ headerProgrammer: false })
    }
  }


  changeFilter(filtertext){
    this.setState({filter:filtertext})
  }

  render() {
    return (
      <div >
          <div>
          <Header changeFilter = {this.changeFilter} 
                  changeStart = {this.changeStart}
                  changeContent = {this.changeContent}
                  changeDesign = {this.changeDesign}
                  changeMarketing = {this.changeMarketing}
                  changeProgrammer = {this.changeProgrammer} 
                  headerStart = {this.state.headerStart}
                  headerContent = {this.state.headerContent}
                  headerDesign = {this.state.headerDesign}
                  headerMarketing = {this.state.headerMarketing}
                  headerProgrammer = {this.state.headerProgrammer}
                  value={this.state.filter}
                  />
          </div>
          <div>
            <AllMajorPage value={this.state.data} 
                          value2={this.state.filter}
                          headerContent = {this.state.headerContent}
                          headerDesign = {this.state.headerDesign}
                          headerMarketing = {this.state.headerMarketing}
                          headerProgrammer = {this.state.headerProgrammer}
                          />
          </div>
          <div>
            <Footer />
          </div>
        </div>
    );
  }
}

export default App;
