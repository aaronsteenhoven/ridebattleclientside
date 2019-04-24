import React, { Component } from 'react';
import RideCreate from '../Components/RideCreate';
import RideTable from '../Components/RideTable';
import RideEdit from '../Components/RideEdit';
import { Container, Row, Col } from 'reactstrap';
import Radium from 'radium';
import APIURL from '../helpers/environment';

var styles = {
  
      userstuff: {
        fontSize: '45px',
        fontFamily:'Droid Sans',
        fontWeight: 'bold',
        textAlign: 'center'
  
        
      }
  };

class RideIndex extends Component{
    constructor(props) {
        super(props)
        this.state = {
            rides: [],
            updatePressed:false,
            rideToUpdate:{}
        }
    }

    componentDidMount() {
        this.fetchrides()
    }

    fetchrides = () =>{
        fetch(`${APIURL}/waittimes`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                return this.setState({rides: logData})
            })
    }

    rideDelete = (event) => {
        fetch(`${APIURL}/waittimes/${event.target.id}`, {
      method: 'DELETE',
      body: JSON.stringify({ waittime: { id: event.target.id } }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
    .then((res) => this.fetchrides())
  }

    rideUpdate =(event, waittime) => {
        fetch(`${APIURL}/waittimes/edit/${waittime.id}`, {
            method: 'PUT',
            body: JSON.stringify({ waittime: waittime}),
            headers: new Headers({
              'Content-Type': 'application/json',
              'Authorization': this.props.token
            })
          })
          .then((res) => {
            this.setState({ updatePressed: false })
            this.fetchrides();
          })
        } 

    setUpdatedRide = (event, ride) => {
        this.setState({
            rideToUpdate: ride,
            updatePressed: true
        })
    }
            


    

    render(){
        const rides = this.state.rides.length >= 1 ? <RideTable rides={this.state.rides} delete={this.rideDelete} update={this.setUpdatedRide} /> : <h2>Log a ride wait time to see table</h2>
        return (
            <Container>
            <Row>
              <Col md="3">
                <RideCreate token={this.props.token} updateRidesArray={this.fetchrides}/>
              </Col>
              <Col md="9">
                {rides}
              </Col>
              <Col md="12">  
          {
            
            this.state.updatePressed ? <RideEdit t={this.state.updatePressed} update={this.rideUpdate} ride={this.state.rideToUpdate} /> 
            : <div></div>
          }
        </Col>
            </Row>
          </Container>
        )
    }
}

export default Radium(RideIndex);