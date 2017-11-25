import React, { Component } from 'react'
import {
  Navbar, 
  NavItem,
  Nav,
  Image,
  Tooltip } from 'react-bootstrap'

import facebook from '../Media/Image/facebook.png'
import twitter from '../Media/Image/twitter.png'
import instagram from '../Media/Image/instagram.png'
import youtube from '../Media/Image/youtube.png'
import RandomModal from './RandomModal'

// const all = (
//   <Tooltip id="tooltip">
//     <div>ประกาศผล</div>
//   </Tooltip>
// );



class Header extends Component{

    constructor(props){
        super(props)
        this.state = {
          opacity: 0.8
        }
      }

    componentWillMount(){
      const script = document.createElement("script")
        
      script.src = "Navbar.js"
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
        
        let textHeader = (<div className="main-title"><img src="https://www.ywc.in.th/static/img/logo.png"  /></div>);
        return(
          <div>
            <Navbar fixedTop fluid={true} inverse className="opaque-navbar">
            <Navbar.Header>
              <Navbar.Brand>
                <div style={{opacity: this.state.opacity}}
                    onMouseEnter={this.mouseEnter.bind(this)}
                    onMouseLeave={this.mouseLeave.bind(this)}
                    onClick={() => {this.props.changeStart()}}
                ><span style={{color:'black'}}>YWC</span><span style={{color:'orange'}}>Announcement</span></div>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                
              <Nav>
                
                <NavItem onClick={() => { this.props.changeFilter("content"); this.props.changeContent(); }}>
                    {this.props.headerContent===false ? <div style={{color:"black", fontWeight:"bold"}}>Content</div>: <div style={{color:"grey", fontWeight:"bold"}}>Content</div>}
                </NavItem>
                
                <NavItem onClick={() => { this.props.changeFilter("design"); this.props.changeDesign(); }}>
                    {this.props.headerDesign===false ? <div style={{color:"black", fontWeight:"bold"}}>Design</div>: <div style={{color:"grey", fontWeight:"bold"}}>Design</div>}
                </NavItem>
                
                <NavItem onClick={() => { this.props.changeFilter("marketing"); this.props.changeMarketing(); }}>
                    {this.props.headerMarketing===false ? <div style={{color:"black", fontWeight:"bold"}}>Marketing</div>: <div style={{color:"grey", fontWeight:"bold"}}>Marketing</div>}
                </NavItem>

                <NavItem onClick={() => { this.props.changeFilter("programming"); this.props.changeProgrammer(); }}>
                    {this.props.headerProgrammer===false ? <div style={{color:"black", fontWeight:"bold"}}>Programmer</div>: <div style={{color:"grey", fontWeight:"bold"}}>Programmer</div>}
                </NavItem>
              </Nav>
              <Nav pullRight>
                <NavItem><RandomModal/></NavItem>
                <NavItem href="https://www.instagram.com/ywcth/"><Image src={instagram} style={{width:"30px",height:"30px"}} circle responsive/></NavItem>
                <NavItem href="https://www.youtube.com/user/ywcth"><Image src={youtube} style={{width:"30px",height:"30px"}} circle responsive/></NavItem>
                <NavItem href="https://twitter.com/ywcth"><Image src={twitter} style={{width:"30px",height:"30px"}} circle responsive/></NavItem>
                <NavItem href="https://www.facebook.com/ywcth/"><Image src={facebook} style={{width:"30px",height:"30px"}} circle responsive/></NavItem>
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