import React from 'react';
import {Link} from '@reach/router';
import './Register.css';
import './Login.css';

const Register = () => (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4 font-weight-bolder">Registrate!</h3>
                  <form>
                    <div className="form-label-group">
                      <input type="string" id="userName" className="form-control" placeholder="Nombre Usuario" required
                             autoFocus/>
                      <label htmlFor="userName">Nombre Usuario</label>
                    </div>
                    <div className="form-label-group">
                      <input type="email" id="inputEmail" className="form-control" placeholder="Correo Electronico" required/>
                      <label htmlFor="inputEmail">Correo</label>
                    </div>

                    <div className="form-label-group">
                      <input type="password" id="inputPassword" className="form-control" placeholder="Constraseña"
                             required/>
                      <label htmlFor="inputPassword">Contraseña</label>
                    </div>
                    <div className="form-label-group">
                      <input type="password" id="inputConfirmarPassword" className="form-control" placeholder="Confirmar Contraseña"
                             required/>
                      <label htmlFor="inputConfirmarPassword">Confirmar Contraseña</label>
                    </div>
                    {/*<div className="custom-control custom-checkbox mb-3">*/}
                      {/*<input type="checkbox" className="custom-control-input" id="customCheck1"/>*/}
                      {/*<label className="custom-control-label" htmlFor="customCheck1">Remember password</label>*/}
                    {/*</div>*/}
                    <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                            type="submit">Registrar
                    </button>
                    <div className="text-center">
                      <Link className="small" to="/todo">Olvido Contraseña?</Link></div>
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

export default Register;
