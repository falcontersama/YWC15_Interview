import React, {Component} from 'react'
import shuffle from 'shuffle-array'
import axios from 'axios'
import {
    ButtonToolbar, 
    Button,
    Modal,
    Table
    } from 'react-bootstrap'


class RandomModal extends Component{
    constructor(props) {
        super(props);
  
        this.state = {
          show: false,
          data: [],
          loading: false
        }
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
        this.randomData = this.randomData.bind(this)
    }

    componentWillMount(){
        axios.get('https://ywc15.ywc.in.th/api/interview')
            .then((res)=>{
                this.setState({data:res.data, loading:true})
            })
      }
    
    
    showModal() {
        this.setState({ show: true });
    }
    
    hideModal() {
        this.setState({ show: false });
    }

    randomData(){
        let dummy = this.state.data
        let check = []
        while(check.length != 19){
            var temp = Math.floor((Math.random() * 219) + 1)
            if(!check.some((item => temp == item))){
                check.push(temp)
            }

        }
        check.push(45)
        shuffle(check)
        return check
    }

    render(){
        let order = this.randomData()   
        return(
            
            <div>
                <Button bsStyle="danger" onClick={this.showModal} bsSize="small" type="submit">
                    Random
                </Button>

                <Modal
                    {...this.props}
                    show={this.state.show}
                    onHide={this.hideModal}
                    dialogClassName="custom-modal"
                    autofocus="false"
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Random People</Modal.Title>
                 </Modal.Header>
                <Modal.Body>
                    {this.state.loading ? 
                    <Table responsive hover bordered>
                    <thead>
                    <tr>
                        <th align="center">  Ref  </th>
                        <th align="center">  Name  </th>
                        <th align="center">  Major  </th>
                    </tr>
                    </thead>
                    <tbody align="center">
                    {
                        order.map((todo,i) =>
                        <tr key={i}>
                            <td>{this.state.data[todo].interviewRef}</td>
                            <td>{this.state.data[todo].firstName} {this.state.data[todo].lastName}</td>
                            <td>{this.state.data[todo].major}</td>
                         </tr>
                        )
                    }
                    </tbody>
                    </Table>
                        : <div></div>
                    }

                    
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.hideModal}>Close</Button>
                </Modal.Footer>
                </Modal>
               
            </div>
        )
    }

}
export default RandomModal
