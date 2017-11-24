import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'



function nameFormatter(cell, row) {   // String example
    return `${row.firstName}     ${row.lastName}`;
  }

class AllMajorTable extends Component{

    constructor(props){
        super(props)
        this.setText = this.setText.bind(this)
    }

    setText(){
        let datavalue = this.props.value;
        console.log(this.props.headerContent)
        if(this.props.headerContent == true){
            datavalue = datavalue.filter(item => item.major !== "content")
        }
        if(this.props.headerDesign == true){
            datavalue = datavalue.filter(item => item.major !== "design")
        }
        if(this.props.headerMarketing == true){
            datavalue = datavalue.filter(item => item.major !== "marketing")
        }
        if(this.props.headerProgrammer == true){
            datavalue = datavalue.filter(item => item.major !== "programming")
        }
        return datavalue
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
            