import 'bootstrap/dist/css/bootstrap.css';
import React, {Component} from 'react';
import firebase from './Firebase';
import './GetCertification.css'

class GetCertification extends Component {
	render(){
		return(
			<div class="container">
                <h1>¡Hazte un Certificador!</h1>
                <hr />

                <div>
	                 <p align="center">
		            	"¿Tienes conocimiento profundo en un tema? Únete a los certificadores, ayúdanos a crear una comunidad con contenido validado por 
		            	expertos. Solo tienes que decirnos por qué quieres ser un certificador, en qué tema y la experiencia que tienes en dicho tema, así de fácil"
	                </p>
                </div>

                <hr />

                <div id = "textArea">
		            <textarea rows="7" cols="80" maxlength="500">
		            </textarea>
                </div>

	            <div id = "button">
	            	<input type="button" class="btn btn-primary" value="Enviar"></input>
	            </div>
               



            </div>
		);
	}
}

export default GetCertification;  