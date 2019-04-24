import React from 'react';
import { Table, Button } from 'reactstrap';
import Radium from 'radium';

var styles = {
  
    usertable: {
        fontSize: '25px',
        fontFamily:'Shadows Into Light, cursive',
        fontWeight: 'bold',
        backgroundColor: 'ghostwhite'
    },

    h3: {
        fontSize: '55px',
        fontFamily:'Shadows Into Light, cursive',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#D4F4DD'
    },
    tbody: {
        fontSize: '35px',
        fontFamily:'Shadows Into Light, cursive',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'D4F4DD'
    },
    thead: {
        fontSize: '35px',
        fontFamily:'Roboto',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'ghostwhite'
    },
  };

const RideTable = (props) => { 
    return (
        <div>
            <h3 style={styles.h3} important>Ride Wait Time History</h3>
            <hr />
            <Table hover>
                <thead style={styles.thead}>
                    <tr>
                        <th>#</th>
                        <th>Park Name</th>
                        <th>Ride Name</th>
                        <th>Posted Wait</th>
                        <th>Actual Wait</th>
                    </tr>
                </thead>
                <tbody>
                    {
                props.rides.map((ride, id) => { 
                    return ( 
             <tr key={id}> 
                <th scope="row">{ride.id}</th>
                <td>{ride.parkname}</td>
                <td>{ride.ridename}</td>
                <td>{ride.postedwait}</td>
                <td>{ride.actualwait}</td>
                <td>
                    
                    <Button id={ride.id} onClick={props.delete} color="danger">Delete</Button>
                    <Button id={ride.id} onClick={e => props.update(e, ride)} color="warning">Update</Button>
                </td>
            </tr>
        )
    })
}

                </tbody>
            </Table>
        </div>
    );
}


export default Radium(RideTable);