import React from "react";
import { Row } from "reactstrap";


// const footerStyle = {
//   position: fixed,
//   left: 0,
//   bottom: 0,
//   width: '100%',
//   backgroundColor: red,
//   color: white,
//   textAlign: center
// };

const Footer = () => {
  return (
    <footer>
      <Row>
      <div className= "footer" >&copy; Ride Battle 2019 </div>
     {/* style={footerStyle} */}
      </Row>
    </footer>
  );
};

export default Footer;