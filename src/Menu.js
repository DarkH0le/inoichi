import React , {Component} from 'react';
import {Link} from '@reach/router';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class Menu extends Component {
    render(){
        const { user, logOutUser , title } = this.props;

        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top py-0">
                <div class="container">
                    <Link className="navbar-brand font-weight-bold py-0" style={{fontSize:2+'em'}} to="/">{title}</Link>
                    <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarResponsive" ariaControls="navbarResponsive" ariaExpanded="false" ariaLabel="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">{title}
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/videos">Videos</Link>
                            </li>
                            {!user && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Ingresar</Link>
                                </li>)
                            }
                            {!user && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Registrarse</Link>
                                </li>)
                            }

                            {user && (
                                <li className="nav-item font-weight-bold ">
                                    <Link
                                        className="nav-item nav-link text-danger"
                                        to="/login"
                                        onClick={e => logOutUser(e)}>
                                        Salir
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>)}
}

export default Menu;
