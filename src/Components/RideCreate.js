import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Radium from 'radium';

var styles = {
  
      usercreate: {
        fontSize: '25px',
        fontFamily:'Droid Sans',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'cyan'
    },

    h3: {
        fontSize: '35px',
        fontFamily:'Permanent Marker, cursive',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'lightgray'
    }
  };

class RideCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parkname:'',
            ridename: '',
            postedwait: '',
            actualwait: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/waittimes`, {
            method: 'POST',
            body: JSON.stringify({ waittime: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((logData) => {
            this.props.updateRidesArray();
            this.setState({
                parkname:'',
                ridename: '',
                postedwait: '',
                actualwait: ''
            })
        })
    }

    render() {
        return (
            <div>
                <h3 style={styles.h3}>Log a Ride wait time</h3>
            <hr />
            <Form style={styles.usercreate} onSubmit={this.handleSubmit} >
                <FormGroup >
                    <Label for="parkname">Which Park?</Label>
                    <Input id="parkname" type="text" name="parkname" value={this.state.parkname} placeholder="enter parkname" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="ridename">Which Ride?</Label>
                    <Input id="ridename" type="text" name="ridename" value={this.state.ridename} placeholder="enter ridename" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="postedwait">Your expected wait</Label>
                    <Input id="postedwait" type="text" name="postedwait" value={this.state.postedwait} placeholder="enter postedwait" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="actualwait">Your Actual wait</Label>
                    <Input id="actualwait" type="text" name="actualwait" value={this.state.actualwait} placeholder="enter actualwait" onChange={this.handleChange} />
                </FormGroup>
                <Button type="submit" size='large' color="primary"> Submit </Button>
            </Form>
            </div>
        )
    }
}

export default Radium(RideCreate);