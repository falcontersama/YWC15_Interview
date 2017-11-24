import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'



function nameFormatter(cell, row) {   // String example
    return `${row.firstName}     ${row.lastName}`;
  }

class AllMajorTable extends Component{

    constructor(props){
        super(props)
    }

    setText(){
        if(this.props.value2 == "All"){
            return this.props.value
        }
        return this.props.value.filter(item => item.major === this.props.value2)
    }

    render(){

        let data = this.setText()
        return(

            <div>
                <div>
                <BootstrapTable data={ data}  scrollTop={ 'Top' } containerStyle={ {height: '78vh' } } tableStyle={ { height: 'calc(78vh - 41px)' } } bordered={ false } >
                    <TableHeaderColumn   dataField='interviewRef' dataAlign="center" dataSort={true} isKey>ID</TableHeaderColumn>
                    <TableHeaderColumn  dataField='firstName' dataFormat={nameFormatter} dataAlign="center">Name</TableHeaderColumn>
                    <TableHeaderColumn   dataField='major' dataAlign="center">Major</TableHeaderColumn>
                </BootstrapTable>
            </div> 

            </div>
        )
    }

}
export default AllMajorTable
            