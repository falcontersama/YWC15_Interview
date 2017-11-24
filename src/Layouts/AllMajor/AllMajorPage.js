import React, { Component } from 'react'
import AllMajorTable from './AllMajorTable'
import '../Header.css'
import '../Codepen.css'
import Background from '../../Media/Image/matrix.jpg';

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
          return data.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
      );
      return (
        <div style={{backgroundImage: `url(${Background})`, backgroundSize:"cover"}}>
          <br />
          <br />
          <br />
          <div style={{display: 'flex', justifyContent: 'center', color:'black'}}>
            <input type="text"
            placeholder="Search By Name"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
            style={{width: 200, }}
            />
          </div>
          <br />
          <div style={{position: "relative",
                width: "60%",
                left: "50%",
                transform: "translate(-50%,0%)",

                }}>
          <AllMajorTable value={dataFilterd} value2={this.props.value2}/>
          </div>
          <br />
            <br />
            <br />
        </div>
      )
    }
  }
  export default AllMajorPage