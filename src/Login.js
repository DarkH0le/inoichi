import React, {Component} from 'react';
import {Link,navigate} from '@reach/router';
import firebase from './Firebase';

import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';


class Login extends Component {

  state = {
    formEmail: "",
    formPassword: '',
    fireError: null
  };

  handleChange = (e) => {
    const itemName = e.target.name;
    const itemValue = e.target.value;

    this.setState({ [itemName]: itemValue });
  };

  handleSubmit = (e) => {
    let registrationInfo = {
      email: this.state.formEmail,
      password: this.state.formPassword
    };
    e.preventDefault();

    firebase
        .auth()
        .signInWithEmailAndPassword(
            registrationInfo.email,
            registrationInfo.password
        )
        .then(() => {
          navigate('/meetings');
        })
        .catch(error => {
          if (error.message !== null) {
            this.setState({ fireError: error});
          } else {
            this.setState({ fireError: null });
          }
        });
  };

  render(){
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
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                               name="formEmail"
                               onChange={this.handleChange}
                               value={this.state.value} autoFocus required/>
                        <label htmlFor="inputEmail">Email address</label>
                      </div>

                      <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                               name="formPassword"
                               onChange={this.handleChange} required/>
                        <label htmlFor="inputPassword">Password</label>
                      </div>

                      <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                        <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                      </div>
                      <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
                      <div className="text-center">
                        <Link className="small" to="/todo">Forgot password?</Link></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )};
}

export default Login;
