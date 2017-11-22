import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

function nameFormatter(cell, row) {  
    return `${row.firstName}     ${row.lastName}`;
  }

class ContentTable extends Component{

    constructor(props){
        super(props)
        this.state = {
            data : []
        }
      }

    render(){
        let data = this.props.value.filter(item => item.major === "content")
        return(
            <div>
                <BootstrapTable data={ data } hover>
                    <TableHeaderColumn  width="70" dataField='interviewRef' dataAlign="center" dataSort={true} isKey>ID</TableHeaderColumn>
                    <TableHeaderColumn  width="120" dataFormat={nameFormatter} dataAlign="center">Name</TableHeaderColumn>
                    <TableHeaderColumn  width="120" dataField='major' dataAlign="center">Major</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }

}
export default ContentTable