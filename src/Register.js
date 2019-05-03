import React , {Component} from 'react';
import firebase from './Firebase';
import { DotLoader } from 'react-spinners';

import {Link} from '@reach/router';
import { Fade } from 'reactstrap';
import { Alert } from 'reactstrap';
import './Register.css';
import './Login.css';

class Register extends Component {

    state = {
        "formUserName":"",
        "formEmail":"",
        "formPassword":"",
        "formValidPassword":"",
        "passwordMatch":true,
        "fireError":null,
        "loading":false
    };

    handle = (e) => {
        //Get values from event
        const nameForm = e.target.name;
        const value = e.target.value;
        //The braket is a es6 feature that allow use to use a variable as a key in an object
        this.setState({[nameForm]:value} , () => {
            if(this.state.formPassword !== this.state.formValidPassword){
                this.setState({"passwordMatch":false});
            } else {
                this.setState({passwordMatch:true});
            }
        });
    };

    handleRegistration = (e) => {
        e.preventDefault();
        this.setState({loading:true});
        let registrationInfo = {
            displayName: this.state.formUserName,
            email: this.state.formEmail,
            password: this.state.formPassword
        };

        this.setState({fireError:null});


        firebase.auth().createUserWithEmailAndPassword(registrationInfo.email,registrationInfo.password).catch(error => {
            if(error === null){
                this.setState({fireError:null});
            } else {
                this.setState({fireError:error,loading:false})
            }
            })
            .then(() => {
                if(this.state.fireError === null) {
                    this.props.loadUser(this.state.formUserName);
                }
            });


    };


    render(){
        return(
            <div className="container-fluid">
                <div className="row no-gutter">
                    <div className="col-md-8 col-lg-6">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9 col-lg-8 mx-auto">
                                        <h3 className="login-heading mb-4 font-weight-bolder">Registrate!</h3>
                                        <form onSubmit={this.handleRegistration}>
                                            <div className="form-label-group">
                                                <input type="string" id="userName" className="form-control" placeholder="Nombre Usuario" required
                                                       autoFocus
                                                       name="formUserName" onChange={this.handle} value={this.state.value}/>
                                                <label htmlFor="userName">Nombre Usuario</label>
                                            </div>
                                            <div className="form-label-group">
                                                <input type="email" id="inputEmail" className="form-control" placeholder="Correo Electronico" required
                                                       name="formEmail" onChange={this.handle} value={this.state.value}
                                                />
                                                <label htmlFor="inputEmail">Correo</label>
                                            </div>

                                            <div className="form-label-group ">
                                                <input type="password" id="inputPassword" className="form-control" placeholder="Constraseña"
                                                       required
                                                       style={this.state.passwordMatch ? {}:{ borderColor: '#e96666',  '-webkit-box-shadow': 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(233, 102, 102, 0.6); box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(233, 102, 102, 0.6);'}}
                                                       name="formPassword" onChange={this.handle} value={this.state.value}/>
                                                <label htmlFor="inputPassword">Contraseña</label>
                                            </div>
                                            <div className="form-label-group">
                                                <input type="password" id="inputConfirmPassword" className="form-control" placeholder="Confirmar Contraseña"
                                                       required
                                                       name="formValidPassword" onChange={this.handle} value={this.state.value}/>
                                                <label htmlFor="inputConfirmPassword">Confirmar Contraseña</label>
                                            </div>
                                            {/*<div className="custom-control custom-checkbox mb-3">*/}
                                            {/*<input type="checkbox" className="custom-control-input" id="customCheck1"/>*/}
                                            {/*<label className="custom-control-label" htmlFor="customCheck1">Remember password</label>*/}
                                            {/*</div>*/}
                                            <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                                                    type="submit"
                                                    disabled={!this.state.formValidPassword}>
                                                Registrar
                                            </button>
                                            <div className="text-right">
                                                <Link className="small pr-4" to="/todo" >Olvido Contraseña?</Link></div>
                                            <Fade in={!this.state.passwordMatch} tag="h5" className="mt-auto text-danger">
                                                Contraseña no concide!
                                            </Fade>
                                            <Fade in={this.state.fireError !== null} tag="h5" className="mt-auto text-danger">
                                                <Alert color="danger">
                                                    {this.state.fireError !== null ? this.state.fireError.message : ""}
                                                </Alert>
                                            </Fade>
                                            <DotLoader
                                                css={{display: 'block',
                                                    margin: '0 auto'}}
                                                sizeUnit={"px"}
                                                size={40}
                                                color={'#123abc'}
                                                loading={this.state.loading}
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/*Fin de forma*/}
                    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image-login"/> {/*Image en css*/}
                </div>
            </div>
        );
    }
}
export default Register;
