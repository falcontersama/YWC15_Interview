import React, { Component } from 'react'
import AllMajorTable from './AllMajorTable'
import '../Header.css'
import '../Codepen.css'
import Background from '../../Media/Image/matrix.jpg'

class AllMajorPage extends Component {
    constructor(props) {
      super(props);

      this.state = {
        search: "",
      };
    }
    updateSearch(event){
      this.setState({search: event.target.value.substr(0,20)});
    }
  
    render() {
    
      let dataFilterd = this.props.value.filter(
        (data)=>{
          let dummy = data.firstName + " " +data.lastName
          return dummy.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
      );
      return (
        <div style={{backgroundImage: `url(${Background})`, backgroundSize:"cover"}}>
          <br />

          <div style={{display: 'flex', justifyContent: 'center', color:'black'}}>
            <input type="text"
            placeholder="Search By Name"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
            style={{width: 200, 
                    float: "left",
                    border: "3px solid #00B4CC",
                    borderRadius: "5px",
                    outline: "none",

                  }}
            />
          </div>
          <br />
          <div style={{position: "relative",
                width: "60%",
                left: "50%",
                transform: "translate(-50%,0%)",

                }}>
          <AllMajorTable value={dataFilterd} 
                         value2={this.props.value2}
                         headerContent = {this.props.headerContent}
                         headerDesign = {this.props.headerDesign}
                         headerMarketing = {this.props.headerMarketing}
                         headerProgrammer = {this.props.headerProgrammer}
                         />
          </div>
          <br />
            <br />
            <br />
        </div>
      )
    }
  }
  export default AllMajorPage