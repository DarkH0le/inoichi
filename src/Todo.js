import React from 'react';
import {Link} from '@reach/router';

import 'bootstrap/dist/css/bootstrap.css';
import './Todo.css';

const TODO = () => (
    <div id="notfound">
        <div className="notfound">
            <div className="notfound-404">
                <h1>4<span></span>4</h1>
            </div>
            <h2>Oops! Page Not Be Found</h2>
            <p>Estamos Trabajando en ello!</p>
            <Link to="/">Regresar a pagina principal.</Link>
        </div>
    </div>
);

export default TODO;
