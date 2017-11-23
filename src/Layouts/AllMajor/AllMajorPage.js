import React, { Component } from 'react'
import AllMajorTable from './AllMajorTable'
import '../Header.css'
import '../Codepen.css'
import Background from '../../Media/Image/test.jpg';

class AllMajorPage extends Component {
    constructor(props) {
      super(props);
      this.products = this.props.value
      this.state = {
        data: this.props.value,
        search: '',
      };
    }
    updateSearch(event){
      this.setState({search: event.target.value.substr(0,20)});
    }
  
    render() {
      let dataFilterd = this.state.data.filter(
        (data)=>{
          return data.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
      );
      return (
        <div style={{backgroundImage: `url(${Background})`}}>
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
                backgroundColor: "white",
                }}>
          <AllMajorTable value={dataFilterd} />
          </div>
          <br />
            <br />
            <br />
        </div>
      )
    }
  }
  export default AllMajorPage