import React, { Component } from 'react'
import {
  Navbar, 
  NavItem,
  NavDropdown,
  Nav,
  MenuItem,
  Button,
  OverlayTrigger,
  Tooltip } from 'react-bootstrap'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


const all = (
  <Tooltip id="tooltip">
    <div>ประกาศผล</div>
  </Tooltip>
);



class Header extends Component{

    constructor(props){
        super(props)
        this.state = {
          opacity: 0.8
        }
      }

    componentWillMount(){
      const script = document.createElement("script");
        
      script.src = "Navbar.js";
      script.async = true;
        
      document.body.appendChild(script);
    }

    mouseEnter() {
        console.log('mouse enter')
        this.setState({opacity: 1})
    }
  
    mouseLeave() {
        console.log('mouse leave')
        this.setState({opacity: 0.8})
    }
  

    render(){
        let textHeader;
        if(this.props.value == "All"){
          textHeader = (
            <div className="main-title"><img src="https://www.ywc.in.th/static/img/logo.png"  /></div>
          )
        }else if(this.props.value == "content"){
          textHeader = (
            <div><h1 className="main-title">Major <span className="thin">Content</span></h1></div>
          )
        }else if(this.props.value == "design"){
          textHeader = (
            <div><h1 className="main-title">Major <span className="thin">Design</span></h1></div>
          )
        }else if(this.props.value == "marketing"){
          textHeader = (
            <div><h1 className="main-title">Major <span className="thin">Marketing</span></h1></div>
          )
        }else if(this.props.value == "programming"){
          textHeader = (
            <div><h1 className="main-title">Major <span className="thin">Programmer</span></h1></div>
          )
        }
        return(
          <div>
            <Navbar fixedTop fluid={true} inverse className="opaque-navbar">
            <Navbar.Header>
              <Navbar.Brand>
                <div style={{opacity: this.state.opacity}}
                    onMouseEnter={this.mouseEnter.bind(this)}
                    onMouseLeave={this.mouseLeave.bind(this)}
                >YWC<span style={{color:'orange'}}>Announcement</span></div>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                
              <Nav>
                 
                <NavItem onClick={() => this.props.changeFilter("All")}><div style={{color:"black"}}>Start</div></NavItem>
                
                <NavItem onClick={() => this.props.changeFilter("content")}>Content</NavItem>
                <NavItem onClick={() => this.props.changeFilter("design")}>Design</NavItem>
                <NavItem onClick={() => this.props.changeFilter("marketing")}>Marketing</NavItem>
                <NavItem onClick={() => this.props.changeFilter("programming")}>Programmer</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <section className="banner">
              <div id="large-header" className="large-header">
              <canvas id="demo-canvas"></canvas>
                {textHeader}
              </div>
        </section>


          </div>
        )
    }
}
export default Header