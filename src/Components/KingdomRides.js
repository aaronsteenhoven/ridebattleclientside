import React from 'react';
import {Card, CardGroup, Row} from 'reactstrap'
import Radium from 'radium';

var styles = {
    div: {
        display: 'block',
        margin:'auto',
        width:'100%'
    }
}


class KingdomRides extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render(){
        let kingdomCards = this.props.rides.map(ride => {
            if(ride.waitTime >0) {
            return(
                
                <div style={styles.div}>
                    <h2>{ride.name}</h2>
                    <p>{ride.waitTime} minutes</p>
                </div>
                
            )}
        })
        
        return(
            <CardGroup>
                <Row>
                {kingdomCards}
                </Row>
            </CardGroup>
            )


    }
}

export default Radium(KingdomRides);