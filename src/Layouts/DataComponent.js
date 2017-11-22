import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
class DataComponent extends Component{

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
        return(
            <div>
                <Table responsive hover bordered>
                <thead align="center">
                <tr>
                    <th>  InterviewRef  </th>
                    <th>  Name  </th>
                    <th>  Major  </th>
                </tr>
                </thead>
                <tbody align="center">
                    { data_interview.map((data,i) =>
                        <tr key={i}>
                        <td>{data.interviewRef}</td>
                        <td>{data.firstName}  {data.lastName}</td>
                        <td>{data.major}</td>
                      </tr>
                    )}
                </tbody>
                </Table>
            </div>
        )
    }

}
export default DataComponent