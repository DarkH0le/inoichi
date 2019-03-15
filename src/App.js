import React, { Component } from 'react';
import firebase from './Firebase';
// import {Router} from '@reach/router';

//Animations
import { Router, navigate, Location } from '@reach/router';
import posed, { PoseGroup } from 'react-pose';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

//Components
import Menu from './Menu';
import Login from './Login';
import Register from './Register';
import TODO from './Todo';

class App extends Component {

    state = {
        "user": null,
        "displayName": null,
        userID: null
    };

    loadUser = (userName) => {
        firebase.auth().onAuthStateChanged(fireUser => {
            fireUser.updateProfile({displayName:userName}).then(() => {
                this.setState({
                    user: fireUser,
                    displayName:fireUser.displayName,
                    userID:fireUser.uid
                });
            });
        });
      navigate("/login");
    };

    componentDidMount() {
        //ref to database
        const ref = firebase.database().ref('user');

        ref.on('value' , snapshot => {
            let fireUser = snapshot.val();
            this.setState({"user":fireUser});
        });

    }

    render() {
        return (
            <div className="App">
                <Menu title={"Inoichi"}/>
                {/*<Router>*/}
                    {/*<Login path="/login"/>*/}
                    {/*<Register path="/register"/>*/}
                    {/*<TODOo path="/todoo"/>*/}
                {/*</Router>*/}
                <PosedRouter>
                    <Login path="/login" />
                    <Register path="/register" loadUser={this.loadUser}/>
                    <TODO path="todo"/>
                </PosedRouter>
            </div>
        );
      }
}


const RouteContainer = posed.div({
    enter: { opacity: 1, delay: 100, beforeChildren: 300 },
    exit: { opacity: 0 }
});

const PosedRouter = ({ children }) => (
    <Location>
        {({ location }) => (
            <PoseGroup>
                <RouteContainer key={location.key}>
                    <Router location={location}>{children}</Router>
                </RouteContainer>
            </PoseGroup>
        )}
    </Location>
);


export default App;
