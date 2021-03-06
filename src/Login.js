import React, {Component} from 'react';
import {Link, navigate} from '@reach/router';
import firebase from './Firebase';

import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
import {Alert, Fade} from "reactstrap";
import {DotLoader} from "react-spinners";


class Login extends Component {

    state = {
        formEmail: "",
        formPassword: '',
        fireError: null,
        loading: false
    };

    handleChange = (e) => {
        const itemName = e.target.name;
        const itemValue = e.target.value;

        this.setState({[itemName]: itemValue});
    };

    handleSubmit = (e) => {
        this.setState({loading: true});
        let registrationInfo = {
            email: this.state.formEmail,
            password: this.state.formPassword
        };
        e.preventDefault();

        this.setState({fireError: null});

        firebase
            .auth()
            .signInWithEmailAndPassword(
                registrationInfo.email,
                registrationInfo.password
            )
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                    this.setState({fireError:error,loading:false})

            });
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row no-gutter">
                    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image-register"/>
                    <div className="col-md-8 col-lg-6">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9 col-lg-8 mx-auto">
                                        <h3 className="login-heading mb-4 font-weight-bold">Ingresar!</h3>
                                        <form onSubmit={this.handleSubmit} className="pb-2">
                                            <div className="form-label-group">
                                                <input type="email" id="inputEmail" className="form-control"
                                                       placeholder="Email address"
                                                       name="formEmail"
                                                       onChange={this.handleChange}
                                                       value={this.state.value} autoFocus required/>
                                                <label htmlFor="inputEmail">Email address</label>
                                            </div>

                                            <div className="form-label-group">
                                                <input type="password" id="inputPassword" className="form-control"
                                                       placeholder="Password"
                                                       name="formPassword"
                                                       onChange={this.handleChange} required/>
                                                <label htmlFor="inputPassword">Password</label>
                                            </div>

                                            {/*<div className="custom-control custom-checkbox mb-3">*/}
                                            {/*<input type="checkbox" className="custom-control-input" id="customCheck1"/>*/}
                                            {/*<label className="custom-control-label" htmlFor="customCheck1">Remember password</label>*/}
                                            {/*</div>*/}
                                            <button
                                                className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                                                type="submit">Ingresar
                                            </button>
                                            <div className="text-center">
                                                <Link className="small" to="/todo">Olvidaste tu Contrasena?</Link></div>

                                            <div className="text-center">
                                                <Link className="small" to="/register">No tienes Cuenta aun?</Link>
                                            </div>
                                        </form>

                                        <Fade in={this.state.fireError !== null} tag="h5"
                                              className="mt-auto text-danger">
                                            <Alert color="danger">
                                                {this.state.fireError !== null ? this.state.fireError.message : ""}
                                            </Alert>
                                        </Fade>
                                        <DotLoader
                                            css={{
                                                display: 'block',
                                                margin: '0 auto'
                                            }}
                                            sizeUnit={"px"}
                                            size={40}
                                            color={'#123abc'}
                                            loading={this.state.loading}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Login;
