import React, { Component } from 'react'
import ProgrammingTable from './ProgrammingTable'

class ProgrammingPage extends Component {
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
      )
      return (
        <div>
         <br />
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <input type="text"
            placeholder="Search By Name"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
            style={{width: 200, }}
            />
          </div>
          <br />
        <ProgrammingTable value={dataFilterd} />
        </div>
      );
    }
  }
  export default ProgrammingPage