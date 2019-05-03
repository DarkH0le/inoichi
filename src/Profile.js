import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './Profile.css'
import firebase from "./Firebase";
import {Link} from "@reach/router";

class Profile extends Component {

    state = {status: "TODO:V"};


    constructor(props) {
        super(props);
        // Don't call this.setState() here!
    }


    componentDidMount() {

        console.log();

        let profile = firebase.firestore().collection('profiles').doc(this.props.user);
        let getDoc = profile.get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    console.log('Document data:', doc.data());
                    let docID = doc.id;
                    this.setState(doc.data());
                    this.setState(prevState => ({
                        ...prevState,
                        "docID": docID
                    }))
                }


            })
            .catch(err => {
                console.log('Error getting document', err);
            });

    }

    renderProfile() {
        return (
            <div>
                <h2 className="description">{this.state.career && this.state.career.toString().toUpperCase()}</h2>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <img
                                src={this.state.image && this.state.image}
                                alt="Circle Image" className="img-raised rounded img-thumbnail img-fluid"/>
                        </div>
                        <div className="col-8 text-left">
                            <div className="d-block">
                                <div className="col">
                                    <h4 className="alert-primary d-inline-block rounded text-bold p-1">{this.state.displayName && (this.state.displayName)}</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h2>{this.state.description && this.state.description} </h2>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/*Profile info and row*/}
                    {/*</div>*/}

                    <div className="row">
                        <div className="col-md-10 ml-auto mr-auto">
                            <div className="profile-tabs">
                                <ul className="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#studio" role="tab" data-toggle="tab">
                                            <i className="material-icons">Mis Videos</i>
                                            Videos
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#works" role="tab" data-toggle="tab">
                                            <i className="material-icons">Favoritos</i>
                                            (DISABLE)
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#favorite" role="tab" data-toggle="tab">
                                            <i className="material-icons">Certificados</i>
                                            (DISABLE))
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-3 mt-4" style={{display: "inline-flex"}}>
                            <div className="card card-inverse card-info">
                                <video className="card-img-top" src="" onMouseOver={this.playAndControl}
                                       onMouseOut={this.outPlayAndControl} onClick={this.fullScreen}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    } //End render

    noProfile(){
        return(<div className="container">
            <h2>Usuario no a completado su perfil...</h2>

            {firebase.auth().currentUser && <Link className="nav-link" to="/editprofile">Completar perfil!</Link>}
        </div>)
    }

    render() {
        // console.log("props" , this.props.user);
        return (
            <div>
                <div>
                    {(this.state && this.state.formComplete) && this.renderProfile()}
                    {(this.state && !this.state.formComplete) && this.noProfile()}
                </div>
            </div>
        )
    };


}

export default Profile;





