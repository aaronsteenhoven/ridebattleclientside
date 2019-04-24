// import React, { Component } from 'react';
// import { Collapse, Button, CardBody, Card } from 'reactstrap';
// import RideIndex from '../Rides/RideIndex';

// class ToggleUser extends Component {
//   constructor(props) {
//     super(props);
//     this.toggle = this.toggle.bind(this);
//     this.state = { collapse: false };
//   }

//   toggle() {
//     this.setState(state => ({ collapse: !state.collapse }));
//   }

//   render() {
//     return (
//       <div>
//         <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
//         <Collapse isOpen={this.state.collapse}>
//           <Card>
//             <CardBody>
//             <RideIndex token={props.sessionToken} />
//             </CardBody>
//           </Card>
//         </Collapse>
//       </div>
//     );
//   }
// }

// export default ToggleUser;