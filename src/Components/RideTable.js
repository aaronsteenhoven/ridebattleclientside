import React from 'react';
import { Table, Button } from 'reactstrap';
import Radium from 'radium';

var styles = {

    h3: {
        fontSize: '35px',
        fontFamily:'Permanent Marker, cursive',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'lightgray'
    },
    tbody: {
        fontSize: '35px',
        fontFamily:'Shadows Into Light, cursive',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'ghostwhite'
    },
    thead: {
        fontSize: '35px',
        fontFamily:'Roboto',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'cyan'
    },

  };

const RideTable = (props) => { 
    return (
        <div>
            <h4 style={styles.h3} important>Ride Wait Time History</h4>
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
                <td style={styles.td}>
                    
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