import React , {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './Profile.css'
import firebase from "./Firebase";
class Profile extends Component {

    state = {status:"TODO:V"};


    constructor(props) {
        super(props);
        // Don't call this.setState() here!
    }


    componentDidMount() {

        // let videoRef = firebase.firestore().collection("profiles").doc("ivan").get();
        // // videoRef.get().then((querySnapshot) => {
        //     // querySnapshot.forEach((doc) => {
        //         // doc.data() is never undefined for query doc snapshots
        //         // console.log(doc.id, " => ", doc.data());
        //         let data = videoRef.data();
        //         let docID = data.id;
        //         this.setState(prevState => ({
        //             videos: {
        //                 ...prevState.videos,
        //                 [docID]:data
        //             }
        //         }))
        //     // });
        // // });

        let profile = firebase.firestore().collection('profiles').doc('ivan');
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
                        "docID":docID
                    }))
                }


            })
            .catch(err => {
                console.log('Error getting document', err);
            });
    }

    renderProfile() {
        // return Object.entries(this.state.videos).map(([key, value], i) => {
            return (
                <div>
                <h2 className="description">USER NAME OVER HEREE</h2>
                <div className="container-fluid">
                    {/*<div className="profile-page" style={{"marginTop": "10px"}}>*/}
                        <div className="row">
                            <div className="col-4">
                                {/*<div className="profile2">*/}
                                {/*    <div className="avatar text-center">*/}
                                        <img
                                            src={this.state.image && this.state.image}
                                            alt="Circle Image" className="img-raised rounded img-thumbnail img-fluid"/>
                                            {/*alt="Circle Image" className="img-raised rounded-circle img-fluid float-right"/>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            </div>
                                <div className="col-8 text-left">
                                    <div className="d-block">
                                        <div className="col">
                                            <h4 className="alert-primary d-inline-block rounded text-bold p-1">Real name</h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <h2>Description should be here{this.state.description && this.state.description} </h2>
                                        </div>

                                    </div>
                                </div>
                        </div> {/*Profile info and row*/}
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
                            <div className="card card-inverse card-info" >
                                <video className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/inoichi-97330.appspot.com/o/videos%2FWhatsApp%20Video%202019-03-07%20at%2011.31.55%20AM.mp4?alt=media&token=fa027708-da7b-4831-8214-fa012b7f9a05" onMouseOver={this.playAndControl} onMouseOut={this.outPlayAndControl} onClick={this.fullScreen}/>
                                {/*<div className="card-footer">*/}
                                {/*    <small>Creacion: AYER</small>*/}
                                {/*    <button className="btn btn-info float-right btn-sm">Follow</button>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 mt-4" style={{display: "inline-flex"}}>
                            <div className="card card-inverse card-info" >
                                <video className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/inoichi-97330.appspot.com/o/videos%2FWhatsApp%20Video%202019-03-07%20at%2011.31.55%20AM.mp4?alt=media&token=fa027708-da7b-4831-8214-fa012b7f9a05" onMouseOver={this.playAndControl} onMouseOut={this.outPlayAndControl} onClick={this.fullScreen}/>
                                {/*<div className="card-footer">*/}
                                {/*    <small>Creacion: AYER</small>*/}
                                {/*    <button className="btn btn-info float-right btn-sm">Follow</button>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 mt-4" style={{display: "inline-flex"}}>
                            <div className="card card-inverse card-info" >
                                <video className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/inoichi-97330.appspot.com/o/videos%2FWhatsApp%20Video%202019-03-07%20at%2011.31.55%20AM.mp4?alt=media&token=fa027708-da7b-4831-8214-fa012b7f9a05" onMouseOver={this.playAndControl} onMouseOut={this.outPlayAndControl} onClick={this.fullScreen}/>
                                {/*<div className="card-footer">*/}
                                {/*    <small>Creacion: AYER</small>*/}
                                {/*    <button className="btn btn-info float-right btn-sm">Follow</button>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 mt-4" style={{display: "inline-flex"}}>
                            <div className="card card-inverse card-info" >
                                <video className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/inoichi-97330.appspot.com/o/videos%2FWhatsApp%20Video%202019-03-07%20at%2011.31.55%20AM.mp4?alt=media&token=fa027708-da7b-4831-8214-fa012b7f9a05" onMouseOver={this.playAndControl} onMouseOut={this.outPlayAndControl} onClick={this.fullScreen}/>
                                {/*<div className="card-footer">*/}
                                {/*    <small>Creacion: AYER</small>*/}
                                {/*    <button className="btn btn-info float-right btn-sm">Follow</button>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 mt-4" style={{display: "inline-flex"}}>
                            <div className="card card-inverse card-info" >
                                <video className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/inoichi-97330.appspot.com/o/videos%2FWhatsApp%20Video%202019-03-07%20at%2011.31.55%20AM.mp4?alt=media&token=fa027708-da7b-4831-8214-fa012b7f9a05" onMouseOver={this.playAndControl} onMouseOut={this.outPlayAndControl} onClick={this.fullScreen}/>
                                {/*<div className="card-footer">*/}
                                {/*    <small>Creacion: AYER</small>*/}
                                {/*    <button className="btn btn-info float-right btn-sm">Follow</button>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 mt-4" style={{display: "inline-flex"}}>
                            <div className="card card-inverse card-info" >
                                <video className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/inoichi-97330.appspot.com/o/videos%2FWhatsApp%20Video%202019-03-07%20at%2011.31.55%20AM.mp4?alt=media&token=fa027708-da7b-4831-8214-fa012b7f9a05" onMouseOver={this.playAndControl} onMouseOut={this.outPlayAndControl} onClick={this.fullScreen}/>
                                {/*<div className="card-footer">*/}
                                {/*    <small>Creacion: AYER</small>*/}
                                {/*    <button className="btn btn-info float-right btn-sm">Follow</button>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
        </div>
                </div>)
        // })
    } //End render


    render()
    {
        // console.log("props" , this.props.user);
        return (
            <div>
                <div>
                    {this.state && this.renderProfile()}
                </div>


            </div>
        )
    };



}
export default Profile;





