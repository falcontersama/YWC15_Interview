import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

function nameFormatter(cell, row) {  
    return `${row.firstName}     ${row.lastName}`;
  }

class ProgrammingTable extends Component{

    constructor(props){
        super(props)
        this.state = {
            data : []
        }
      }

    render(){
        let data_programming = this.props.value.filter(item => item.major === "programming")
        return(

            <div style={{position: "absolute",
            left: "50%",
            width: "60%",
            transform: "translate(-50%,0%)",}}>
                <BootstrapTable data={ data_programming } >
                    <TableHeaderColumn  width="70" dataField='interviewRef' dataAlign="center" isKey>ID</TableHeaderColumn>
                    <TableHeaderColumn  width="120" dataField='firstName' dataFormat={nameFormatter} dataAlign="center">Name</TableHeaderColumn>
                    <TableHeaderColumn  width="120" dataField='major' dataAlign="center">Major</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }

}
export default ProgrammingTable