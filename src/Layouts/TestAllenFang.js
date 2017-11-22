import React, { Component } from 'react'
import axios from 'axios'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'



function nameFormatter(cell, row) {   // String example
    return `${row.firstName}     ${row.lastName}`;
  }

class TestAllenFang extends Component{

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

    render(){
        let data_interview = this.state.data;
        let newArray = data_interview.filter(item => item.major == "programming")
        return(
            <div>
                <BootstrapTable data={ newArray }>
                    <TableHeaderColumn  width="70" dataField='interviewRef' dataAlign="center" dataSort isKey>ID</TableHeaderColumn>
                    <TableHeaderColumn  width="120" dataFormat={nameFormatter} dataAlign="center">Name</TableHeaderColumn>
                    <TableHeaderColumn  width="120" dataField='major' dataAlign="center" dataSort>Major</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }

}
export default TestAllenFang