import React from 'react';
import RideIndex from '../Rides/RideIndex';
import { Jumbotron, Container, Button, Card, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody } from 'reactstrap';
import disneyLogo from '../assets/Disneylog.png'
import vsLogo from '../assets/vslogo.jpg'
import universalLogo from '../assets/Universallogo.jpg'
import headerlogo from '../assets/EditedHeader.png';
import authpicture from '../assets/Telegram.jpg';
// import ToggleUser from '../Components/ToggleUser';
import dateTime from '../Components/DateTime';
import Radium from 'radium';

var styles = {
  headerlogo: {
    textAlign:'center',
    size: '200%',
    backgroundPosition: 'center',
    marginTop: '20px',
  },

  card2: {
    marginTop: '15px',
    
  },

  card3: {
    marginTop: '28px',
    
  },

  cardbutton: {
    backgroundPosition: 'center', 
    textAlign:'center',  
  },

  cardgroup1: {
    padding: '-10px'
  },

  cardtext: {
    textAlign:'center',  
    fontFamily:'Oxygen',
    fontSize:'35px',
    color:'yellowgreen'
  },

    cards: {
      backgroundColor: '#0088FF'
    },

    userstuff: {
      fontSize: '45px',
      fontFamily:'Droid Sans',
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundImage: `url(${authpicture})`

      
    }
};

const Main = (props) => {
    return (
      
      
        <div>
       
          <div style={styles.headerlogo} className="headerlogo">
          <Jumbotron fluid>
        <Container fluid>
          {/* <h1 className="display-3">Fluid jumbotron</h1> */}
          <img  src={headerlogo} ></img>
          {/* <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
        </Container>
      </Jumbotron>
        </div>
      <CardGroup style={styles.cardgroup1}>
      <Card>
        <CardImg className ="disneyRides" top width="100%" padding= "2px"src={disneyLogo} alt="Card image cap" />
        {/* <CardTitle> SPACE MOUNTAIN </CardTitle> */}
        <CardText style={styles.cardtext} >Wait Time as of {dateTime}</CardText>
      </Card>
      <Card>
      <CardImg style={styles.card2}top width="100%" className ="vsLogo"src= {vsLogo} alt="Card image cap" />
        <CardText style={styles.cardtext} > <strong><Button style= {styles.cardbutton} className="fetch" color="primary" size="lg">Pull Current Wait Times</Button>{' '}</strong> </CardText>
        </Card>
      <Card>
      <CardImg style={styles.card3} top width="100%" className ="universalLogo" src= {universalLogo} alt="Card image cap" />
        {/* <CardTitle> Universal Studios Ride </CardTitle> */}
        <CardText style={styles.cardtext} >Wait Time as of {dateTime}</CardText>
      </Card>
      
    </CardGroup>
          <div style= {styles.usercreate} className="rideindex">
            <RideIndex style= {styles.usercreate} token={props.sessionToken} />
          </div>
            {/* <ToggleUser/> */}
            {/* <Button onClick = {this.props.clickLogout}> Logout </Button>  */}
      </div>
    )
}

export default Radium(Main);