import React from 'react';
import {Card, CardGroup, Row} from 'reactstrap'


class UniversalRides extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render(){
        let universalCards = this.props.rides.map(ride => {
            if(ride.waitTime >0){
            return(
                <Row>
                <div>
                    <h2>{ride.name}</h2>
                    <p>{ride.waitTime} minutes</p>
                </div>
                </Row>
            )}})
        
        return(
            
            <div>
                {universalCards}
            </div>
            )


    }
}

export default UniversalRides;