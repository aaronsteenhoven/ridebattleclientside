import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Radium from 'radium';

var styles = {
  
      userstuff: {
        fontSize: '45px',
        fontFamily:'Droid Sans',
        fontWeight: 'bold',
        textAlign: 'center'        
      }
  };

class RideEdit extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            parkname: '', 
            ridename: '',
            postedwait: '',
            actualwait: ''
        };
    }

    componentDidMount() {
        this.setState({ 
            id: this.props.ride.id, 
            parkname: this.props.ride.parkname,
            ridename: this.props.ride.ridename,
            postedwait: this.props.ride.postedwait,
            actualwait: this.props.ride.actualwait
        })
    }


    handleChange = (event) => { 
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

   
    render() {
        return (
            <div>
                <Modal isOpen={true} > 
                <ModalHeader >Log a Ride Wait Time</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleSubmit} >
                        <FormGroup>
                            <Label for="parkname">Park Name</Label>
                            <Input id="parkname" type="text" name="parkname" value={this.state.parkname} 
                            placeholder="enter parkname" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="ridename">Ride Name</Label>
                            <Input id="ridename" type="text" name="ridename" value={this.state.ridename} 
                            placeholder="enter ridename" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="postedwait">Posted Wait</Label>
                            <Input id="postedwait" type="text" name="postedwait" value={this.state.postedwait} placeholder="enter postedwait" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="actualwait">Actual Wait</Label>
                            <Input id="actualwait" type="text" name="actualwait" value={this.state.actualwait} 
                            placeholder="enter actualwait" onChange={this.handleChange} />
                        </FormGroup>
                        <Button type="submit" color="primary"> Submit </Button>
                    </Form>
                </ModalBody>

            </Modal>

            </div>
        )
    }
}

export default Radium(RideEdit);