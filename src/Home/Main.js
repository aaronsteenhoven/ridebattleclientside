import React, {Component} from 'react';
import RideIndex from '../Rides/RideIndex';
import { Jumbotron, Container, Button, Card, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, Col, Row } from 'reactstrap';
import disneyLogo from '../assets/Disneylog.png'
import vsLogo from '../assets/vslogo.jpg'
import universalLogo from '../assets/Universallogo.jpg'
import headerlogo from '../assets/EditedHeader.png';
import authpicture from '../assets/Telegram.jpg';
import ridepicture from '../assets/Metallic Toad.jpg';
import dateTime from '../Components/DateTime';
import Radium from 'radium';
import KingdomRides from '../Components/KingdomRides';
import UniversalRides from '../Components/UniversalRides';
import APIURL from '../helpers/environment';



var styles = {

  body: {
    backgroundImage: `url(${ridepicture})`
      },
  headerlogo: {
    textAlign:'center',
    size: '200%',
    backgroundPosition: 'center',
  },

  card2: {
    marginTop: '15px',
    
  },

  card3: {
    marginTop: '60px',
    
  },

  cardbutton: {
    backgroundPosition: 'center', 
    textAlign:'center', 
    marginTop: '33px', 
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

    p: { 
      fontFamily:'Oxygen',
      fontSize:'40px',
      color:'black',
      borderColor: 'black',
      borderWidth: '3px',
      borderStyle: 'solid',
      backgroundColor: 'cyan'
    },

    usercreate: {
      backgroundImage: `url(${ridepicture})`
    },
  

    userstuff: {
      fontSize: '45px',
      fontFamily:'Droid Sans',
      fontWeight: 'bold',
      textAlign: 'center',
      

      
    }
};

class Main extends Component {
  constructor(props) {
      super(props)
      this.state = {
        kingdomRides: [],
        universalRides: [],
        showrides: false
      }};


        componentDidMount(){
          this.fetchKingdom();
          this.fetchUniversal();
          console.log(this.state.kingdomRides)
        }

        fetchKingdom= (props) => {
          fetch(`${APIURL}/parks/magicKingdom`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                this.setState({kingdomRides: logData})
            })
        }

        fetchUniversal= (props) => {
          fetch(`${APIURL}/parks/universalStudios`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                return this.setState({universalRides: logData})
            })
        }

          toggle= () => {

            this.state.showrides == false ?
            this.setState({
            showrides: true
            }) : this.setState({showrides: false})}

      render() {           

      return (
      
        <div style={styles.body}>
          <div style={styles.headerlogo} className="headerlogo">
          <Jumbotron fluid>
        <Container fluid>
          <img  src={headerlogo} ></img>
        </Container>
      </Jumbotron>
        </div>
      <CardGroup style={styles.cardgroup1}>
      <Card>
        <CardImg className ="disneyRides" top width="100%" padding= "2px"src={disneyLogo} alt="Card image cap" />
        <CardText style={styles.cardtext} >Wait Time as of {dateTime}</CardText>
      </Card>
      <Card>
      <CardImg style={styles.card2}top width="100%" className ="vsLogo"src= {vsLogo} alt="Card image cap" />
        
          <Button style= {styles.cardbutton} onClick={this.toggle} className="fetch" color="primary" size="lg">Pull Current Wait Times</Button>{' '} 
        
        </Card>
      <Card>
      <CardImg style={styles.card3} top width="100%" className ="universalLogo" src= {universalLogo} alt="Card image cap" />
        <CardText style={styles.cardtext} >Wait Time as of {dateTime}</CardText>
      </Card>
      
    </CardGroup>
    {this.state.showrides == true ? 

    <Container>
        <Row>
          <Col sm='6'>
            <KingdomRides  rides = {this.state.kingdomRides} />
          </Col>

          <Col sm='6'>
            <UniversalRides  rides = {this.state.universalRides} />
          </Col>
        </Row>
        
    </Container> 
    : null }
         

          <div>
            <p style={styles.p}>Our data analysts are always looking to improve our user experience. If the wait times that we are providing don't match up, please let us know below!</p>
          </div>
          <div style= {styles.usercreate} className="rideindex">
            <RideIndex style= {styles.usercreate} token={this.props.sessionToken} />
          </div>
            {/* <ToggleUser/> */}
            {/* <Button onClick = {this.props.clickLogout}> Logout </Button>  */}
      </div>
    )
}

}

export default Radium(Main);