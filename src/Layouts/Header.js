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

import TextAll from './AllMajor/TextAll'
import TextContent from './Content/TextContent'
import TextDesign from './Design/TextDesign'
import TextMarket from './Marketing/TextMarket'
import TextProgram from './Programming/TextProgram'

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
                 
                <NavItem><OverlayTrigger placement="bottom" overlay={all}><Link to='/'><div >Start</div></Link></OverlayTrigger></NavItem>
                
                <NavItem><Link to='/content'>Content</Link></NavItem>
                <NavItem><Link to='/design'>Design</Link></NavItem>
                <NavItem><Link to='/marketing'>Marketing</Link></NavItem>
                <NavItem><Link to='/programming'>Programmer</Link></NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <section className="banner">
              <div id="large-header" className="large-header">
              <canvas id="demo-canvas"></canvas>
  
                <Switch>
                  <Route exact path='/' component={TextAll} />
                  <Route path='/content' component={TextContent}/>
                  <Route path='/design'  component={TextDesign}/>
                  <Route path='/marketing'  component={TextMarket}/>
                  <Route path='/programming'  component={TextProgram}/>
                </Switch>
                
              </div>
        </section>
          

          </div>
        )
    }
}
export default Header