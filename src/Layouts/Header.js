import React, { Component } from 'react'
import {
  Navbar, 
  NavItem,
  Nav,
  Tooltip } from 'react-bootstrap'


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
        // if(this.props.value === "All"){
        //   textHeader = (
        //     <div className="main-title"><img src="https://www.ywc.in.th/static/img/logo.png"  /></div>
        //   )
        // }else if(this.props.value === "content"){
        //   textHeader = (
        //     <div><h1 className="main-title">Major <span className="thin">Content</span></h1></div>
        //   )
        // }else if(this.props.value === "design"){
        //   textHeader = (
        //     <div><h1 className="main-title">Major <span className="thin">Design</span></h1></div>
        //   )
        // }else if(this.props.value === "marketing"){
        //   textHeader = (
        //     <div><h1 className="main-title">Major <span className="thin">Marketing</span></h1></div>
        //   )
        // }else if(this.props.value === "programming"){
        //   textHeader = (
        //     <div><h1 className="main-title">Major <span className="thin">Programmer</span></h1></div>
        //   )
        // }
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
                    {this.props.headerContent==false ? <div style={{color:"black", fontWeight:"bold"}}>Content</div>: <div style={{color:"grey", fontWeight:"bold"}}>Content</div>}
                </NavItem>
                
                <NavItem onClick={() => { this.props.changeFilter("design"); this.props.changeDesign(); }}>
                    {this.props.headerDesign==false ? <div style={{color:"black", fontWeight:"bold"}}>Design</div>: <div style={{color:"grey", fontWeight:"bold"}}>Design</div>}
                </NavItem>
                
                <NavItem onClick={() => { this.props.changeFilter("marketing"); this.props.changeMarketing(); }}>
                    {this.props.headerMarketing==false ? <div style={{color:"black", fontWeight:"bold"}}>Marketing</div>: <div style={{color:"grey", fontWeight:"bold"}}>Marketing</div>}
                </NavItem>

                <NavItem onClick={() => { this.props.changeFilter("programming"); this.props.changeProgrammer(); }}>
                    {this.props.headerProgrammer==false ? <div style={{color:"black", fontWeight:"bold"}}>Programmer</div>: <div style={{color:"grey", fontWeight:"bold"}}>Programmer</div>}
                </NavItem>

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