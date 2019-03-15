import React, { Component } from 'react';

//Animations
import { Router, Link, Location } from '@reach/router';
import posed, { PoseGroup } from 'react-pose';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import {Router} from '@reach/router';
import Menu from './Menu';
import Login from './Login';
import Register from './Register';
import TODO from './Todo';

class App extends Component {

    state = {"user": null};

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
                    <Register path="/register" />
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
