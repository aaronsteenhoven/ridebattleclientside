import React, { Component } from 'react';
import { Link } from "react-router-dom";
import RideIndex from '../Rides/RideIndex';
import { Jumbotron, Button, Card, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody } from 'reactstrap';
import disneyLogo from '../assets/Disneylog.png'
import vsLogo from '../assets/vslogo.jpg'
import universalLogo from '../assets/Universallogo.jpg'

const Landing = (props) => {
  return (
      <div>
          <Jumbotron>
        <h1 className="display-4">Ride Battle</h1>
        <h2 className="lead">DISNEY WORLD VS UNIVERSAL STUDIOS</h2>
        <hr className="my-2" />
        <p>Welcome to the ultimate theme park battle site. Have you ever wondered who would come out on top if Walt Disney World's Florida theme parks took on Universal Studios Florida parks head to head? Well, you're about to find out!</p>
        <CardGroup>
      <Card>
        <CardImg className ="disneyLogo" top width="100%" padding= "2px"src={disneyLogo} alt="Card image cap" />
      </Card>
      <Card>
        <CardImg top width="100%" className ="vsLogo"src= {vsLogo} alt="Card image cap" />
      </Card>
      <Card>
        <CardImg top width="100%" className ="universalLogo" src= {universalLogo} alt="Card image cap" />
      </Card>
    </CardGroup>
        
        
        <h3 className="display-5">Signup for <strong>FREE</strong> below to create a user page where you can access site features.</h3>
        {/* <p className="lead">
          <Button color="primary">Get Started</Button> 
        </p> */}
      </Jumbotron>
          {/* <RideIndex token= {props.sessionToken} /> */}
          {/* <div className="disclaimer">
            <h4>***Disclaimer***</h4>
        <p> <i>We are still in the testing phase of our web app. Please check back often as we will continue to add more Disney and Universal content related to rides, shows, restaurants, character meets, and more!</i></p>
            </div> */}
      </div>
  ) 
}

export default Landing;