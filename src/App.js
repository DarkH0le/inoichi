import React, { Component } from 'react';
// import {Router} from '@reach/router';
import firebase from './Firebase';


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
import Video from './Video';
import Home from './Home';
import Profile from './Profile';
import EditProfile from './EditProfile';
import GetCertification from './GetCertification';


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
      navigate("/");
    };

    logOutUser = e => {
        e.preventDefault();
        this.setState({
            displayName: null,
            userID: null,
            user: null
        });

        firebase
            .auth()
            .signOut()
            .then(() => {
                navigate('/login');
            });
    };

    registerVideoToFireStore = (newVideo) => {
        let ref = firebase
            .firestore()
            .collection("videos");
        ref.add(newVideo);
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(fireUser => {
            if (fireUser) {
                this.setState({
                    user: fireUser,
                    displayName: fireUser.displayName,
                    userID: fireUser.uid
                });
            }
        });
    }

    render() {
        return (
            <div className="App">
                <Menu title={"Inoichi"} logOutUser={this.logOutUser} user={this.state.user}/>
                {/*<Router>*/}
                    {/*<Login path="/login"/>*/}
                    {/*<Register path="/register"/>*/}
                    {/*<TODO path="/todo"/>*/}
                    {/*<Video path="/upload"/>*/}
                {/*</Router>*/}
                <PosedRouter>
                    <Login path="/login" />
                    <Register path="/register" loadUser={this.loadUser} user={this.state.user}/>
                    <TODO path="/todo"/>
                    <Video style={{overFlow:'hidden'}} path="/upload" user={this.state.user} registerVideo={this.registerVideoToFireStore}/>
                    <Home path="/" user={this.state.user}/>
                    <EditProfile path="/editprofile"/>
                    <GetCertification path="/getcertification"/>
                    <Profile path="/profile" user={this.state.user}/>
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
