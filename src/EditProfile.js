import 'bootstrap/dist/css/bootstrap.css';
import React, {Component} from 'react';
import firebase from './Firebase';

class EditProfile extends Component {




	render()
    {
        return (
            <div class="container">
                <h1>Edita tu Perfil</h1>
                
                <div class="row">
                    {/*left column*/}
                    <div class="col-md-3">
                        <div class="text-center">
                            <img src="//placehold.it/100" class="avatar img-circle" alt="avatar"/>
                            <h6>Upload a different photo...</h6>

                            <input type="file" class="form-control"></input>
                        </div>
                    </div>

                    {/*<!-- edit form column -->*/}
                    <div class="col-md-9 personal-info">
                        
                        <h3>Información Personal</h3>

                        <form class="form-horizontal">
                            <div class="form-group">
                                <label class="col-lg-3 control-label">Nombre:</label>
                                <div class="col-lg-8">
                                    <input class="form-control" type="text" value="Jane"></input>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-3 control-label">Apellido:</label>
                                <div class="col-lg-8">
                                    <input class="form-control" type="text" value="Bishop"></input>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-3 control-label">Email:</label>
                                <div class="col-lg-8">
                                    <input class="form-control" type="text" value="janesemail@gmail.com"></input>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label class="col-md-3 control-label">Usuario:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="text" value="janeuser"></input>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-3 control-label">Contraseña:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="password" value="11111122333"></input>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-3 control-label">Confirmar contraseña:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="password" value="11111122333"></input>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-3 control-label"></label>
                                <div class="col-md-8">
                                    <input type="button" class="btn btn-primary" value="Guardar Cambios"></input>
                                    <span></span>
                                    <input type="reset" class="btn btn-default" value="Cancelar"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

           
        )
    };
}

export default EditProfile;