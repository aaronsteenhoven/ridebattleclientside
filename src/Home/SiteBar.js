import React, {Component} from 'react';
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     NavLink,
//     Nav,
//     NavItem,
//     Button
// } from 'reactstrap';

import {
    Route,
    Link,
    Switch
} from 'react-router-dom'

// import Landing from './Landing';
import Main from './Main';

import Auth from '../Auth/Auth';


export default class SiteBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }



    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    // toggleNavbar() {
    //     this.setState({
    //       collapsed: this.state.collapsed
    //     });
    //   }


    render() {
        return ( 
                <div className = "sitebar" >
                    <div className = "sitebar-list-styling" >
                            {/* <button >< Link to="/" > Home </Link></button > */}
                            <button >< Link to="/main" > Wait Times </Link></button >
                            <button >< Link to="/auth" > Signup/Login </Link></button >
                            {/* <button >< Link to="/ridetable" > My Stuff </Link></button > */}
                    </div>
                    <div className = "sitebar-route" >
                        <Switch >
                            {/* <Route exact path = "/" > <Landing / > </Route>  */}
                            <Route exact path = "/main" component={Main} /> 
                            <Route exact path = "/auth" component={Auth} />  
                            {/* <Route exact path = "/ridetable" component={RideTable} />  */}
                        </Switch> 
                    </div> 
                </div>
        );
    }
}