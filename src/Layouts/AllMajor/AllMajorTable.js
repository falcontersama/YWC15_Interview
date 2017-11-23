import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'



function nameFormatter(cell, row) {   // String example
    return `${row.firstName}     ${row.lastName}`;
  }

class AllMajorTable extends Component{

    constructor(props){
        super(props)
        this.state = {
            data : []
        }
      }


    render(){
        let data = this.props.value
        return(
            <div>
                <div>
                <BootstrapTable data={ data}  scrollTop={ 'Top' } height="550px" bordered={ false } >
                    <TableHeaderColumn  width="70" dataField='interviewRef' dataAlign="center" dataSort={true} isKey>ID</TableHeaderColumn>
                    <TableHeaderColumn  width="120" dataField='firstName' dataFormat={nameFormatter} dataAlign="center">Name</TableHeaderColumn>
                    <TableHeaderColumn  width="120" dataField='major' dataAlign="center">Major</TableHeaderColumn>
                </BootstrapTable>
            </div> 

            </div>
        )
    }

}
export default AllMajorTable
            