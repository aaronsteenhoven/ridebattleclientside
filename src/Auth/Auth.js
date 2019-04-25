import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import '../Auth/auth.css';
import { Jumbotron, Button, Card, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody,Media } from 'reactstrap';
import disneyLogo from '../assets/Disneylog.png';
import vsLogo from '../assets/vslogo.jpg';
import universalLogo from '../assets/Universallogo.jpg';
import headerlogo from '../assets/EditedHeader.png';
import authpicture from '../assets/Telegram.jpg';
import Radium from 'radium';

// font-family: 'Montserrat', sans-serif;
// font-family: 'Raleway', sans-serif;
// font-family: 'Open Sans Condensed', sans-serif;

    var styles = {
    headerlogo: {
      textAlign:'center',
      backgroundPosition: 'center'
    },
  
      jumbo:{
        fontFamily: 'Montserrat',
        fontSize: '24px',
        textAlign: 'center',
        color:'black'
      },

      card2: {
        marginTop: '15px',
        
      },
  
      card3: {
        marginTop: '28px',
        
      },
  
      h3: {
        fontSize: '25px',
        fontFamily:'Raleway'
      },

      auth: {
        textAlign: 'center',
        fontFamily:'Raleway',
        fontSize: '200%',
        backgroundImage: `url(${authpicture})`,

      }
  };
   
const Auth = (props) => {
    return (
        
    <div className="landingPage">
        {/* <h1>Ride Battle</h1> */}
        
        <div style={styles.jumbo}className="jumbo">
          <Jumbotron>
          <img  src={headerlogo} ></img>
        {/* <h2 style={styles.h2} className="lead">DISNEY WORLD VS UNIVERSAL STUDIOS</h2> */}
        <hr  className="my-2" />
        <p>Welcome to the ultimate theme park battle site. We're all busy people. Time is a valuable asset. Need help deciding which park to visit today? We are the only resource online that allows you to compare Disney World Florida and Universal Studios Florida to access up to the minute wait times. Don't lose precious hours of your life because of poor planning.Get started today!</p>
        <CardGroup>
      <Card>
        <CardImg className ="disneyLogo" top width="100%" padding= "2px"src={disneyLogo} alt="Card image cap" />
      </Card>
      <Card>
        <CardImg style={styles.card2}top width="100%" className ="vsLogo"src= {vsLogo} alt="Card image cap" />
      </Card>
      <Card> 
        <CardImg style={styles.card3} top width="100%" className ="universalLogo" src= {universalLogo} alt="Card image cap" />
      </Card>
    </CardGroup>
        
        
        <h3 style={styles.h3} className="display-5">Signup for <strong>FREE</strong> below to create a user page where you can access site features.</h3>
        <h3 style={styles.h3} className="display-5">Returning users can signin to see current wait times, and add an actual user experienced wait time.</h3>
      </Jumbotron>
      </div>
        <div className="auth">
        <Container  style= {styles.auth}  className="auth-container"> 
        
            <Row>
                <Col md="6">
                    <Signup setToken={props.setToken}/>
                </Col>
                <Col md="6">
                    <Login setToken={props.setToken}/>
                </Col>
            </Row>
        
        </Container>
        </div>
    </div>
    )
}
export default Radium(Auth);