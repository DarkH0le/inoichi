import 'bootstrap/dist/css/bootstrap.css';
import React, {Component} from 'react';
import firebase from './Firebase';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css'
import Modal from 'react-bootstrap/Modal';
import {Button} from "react-bootstrap";

class Home extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            msg:"",
            videos:null,
            show:false,
            actualDescription: null,
            actualTitle: null
        };

        this.like = this.like.bind(this);
    }

    // state = {msg:"",
    // videos:null,
    // show:false};



    componentDidMount() {

        let videoRef = firebase.firestore().collection("videos");
        videoRef.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                let data = doc.data();
                let docID = doc.id;
                this.setState(prevState => ({
                    videos: {
                        ...prevState.videos,
                        [docID]:data
                    }
                }))
            });
        });
    }


    getTimeElpse(endTime){

        return new Date(endTime.seconds*1000).toDateString();
    }

    playAndControl(e){
        e.target.play();
    }

    outPlayAndControl(e){
        e.target.pause();
        e.target.currentTime = 0;
    }

    fullScreen(e) {
        e.target.requestFullscreen();
    }

    handleClose() {
        this.setState({actualDescription:null});
        this.setState({actualTitle:null});
        this.setState({ show: false });
    }

    handleShow(e) {
        this.setState({actualDescription:e.target.getAttribute('description')});
        this.setState({actualTitle:e.target.getAttribute('title')});
        this.setState({ show: true });
    }

    like(e) {

        console.log(e.target.getAttribute("videoname"));
        console.log("liking");
        let currentUser = firebase.auth().currentUser.uid;
        let videoName = e.target.getAttribute("videoname");
        console.log("current user" ,  currentUser);
        console.log("videoName" ,  videoName);
        console.log(this.state.videos[videoName].likes[currentUser]);
        let videoLike = this.state.videos[videoName].likes[currentUser] === null ? false : this.state.videos[videoName].likes[currentUser];

        if(currentUser){
            firebase.firestore().collection("videos").doc(videoName).update({"likes":{[currentUser]:!videoLike}}).catch(error => {console.log("something went wrong")});
            firebase.firestore().collection("profiles").doc(currentUser).update({"likes":{[videoName]:!videoLike}}).catch(error => {console.log("something went wrong")});
        }

        // this.setState( prevState => ({
        //     ...prevState,
        //     videos:{
        //         ...prevState.videos,
        //         [videoName]:{
        //             ...prevState.videos[videoName]
        //         }
        //     }
        // }));

        this.componentDidMount();
    }

    renderVideos(){
        console.log(this.state);
        return Object.entries(this.state.videos).map(([key, value], i) => {
;
            let user = firebase.auth().currentUser ? firebase.auth().currentUser : false;
            let videoCurrent = this.state.videos[key].likes[user.uid];
            // let videoCurrent = typeof(value) !== 'undefined' || value != null
            //     ? false : this.state.videos[key].likes[firebase.auth().currentUser.uid];
            return (
                <div className="col-sm-6 col-md-4 col-lg-3 mt-4" style={{display: "inline-flex"}} key={key}>
                    <div className="card card-inverse card-info" style={{width:"300px"}} >
                        <video className="card-img-top" src={value.url} onMouseOver={this.playAndControl} onMouseOut={this.outPlayAndControl} onClick={this.fullScreen}/>
                        <div className="card-block">
                            {value.certifed && <figure className="profile">
                                <svg height="35px" viewBox="0 -10 464 464" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="m208 328h224c17.671875 0 32-14.328125 32-32v-248c0 154.769531-114.503906 280-256 280zm0 0" fill="#006df0"/><path d="m432 0h-400c-17.671875 0-32 14.328125-32 32v264c0 17.671875 14.328125 32 32 32h176c141.496094 0 256-125.230469 256-280v-16c0-17.671875-14.328125-32-32-32zm0 0" fill="#2488ff"/><path d="m312 328c0 9.761719-17.359375 16-20.878906 24.480469 0 .160156-.082032.398437-.082032.558593-3.199218 8.882813 4.082032 25.039063-2.480468 31.519532-6.558594 6.480468-22.636719-.71875-31.519532 2.480468-.160156 0-.398437.082032-.558593.082032-8.480469 3.519531-14.71875 20.878906-24.480469 20.878906s-16-17.359375-24.480469-20.878906c-.160156 0-.398437-.082032-.558593-.082032-8.882813-3.199218-25.039063 4.082032-31.519532-2.480468-6.480468-6.558594.71875-22.636719-2.480468-31.519532 0-.160156-.082032-.398437-.082032-.558593-3.519531-8.480469-20.878906-14.71875-20.878906-24.480469s17.359375-16 20.878906-24.480469c3.601563-8.800781-4.078125-25.441406 2.5625-32.078125 6.636719-6.640625 23.277344 1.039063 32.078125-2.5625 8.480469-3.519531 14.71875-20.878906 24.480469-20.878906s16 17.359375 24.480469 20.878906c8.800781 3.601563 25.441406-4.078125 32.078125 2.5625 6.640625 6.636719-1.039063 23.277344 2.5625 32.078125 3.519531 8.480469 20.878906 14.71875 20.878906 24.480469zm0 0" fill="#ffcd00"/><path d="m144 416 5.679688 28.320312 57.304687-57.304687c-8.921875-3.199219-25.039063 4.0625-31.550781-2.449219-6.511719-6.511718.734375-22.636718-2.449219-31.550781l-57.304687 57.304687zm0 0" fill="#d80027"/><path d="m288.566406 384.566406c-6.511718 6.511719-22.628906-.734375-31.550781 2.449219l57.304687 57.304687 5.679688-28.320312 28.320312-5.679688-57.304687-57.304687c-3.183594 8.921875 4.0625 25.039063-2.449219 31.550781zm0 0" fill="#d80027"/><path d="m136 56h192v32h-192zm0 0" fill="#ffcd00"/><path d="m272 328c0 22.089844-17.910156 40-40 40s-40-17.910156-40-40 17.910156-40 40-40 40 17.910156 40 40zm0 0" fill="#f7941d"/><g fill="#f1f2f2"><path d="m40 72h-16v-40c0-4.417969 3.582031-8 8-8h40v16h-32zm0 0"/><path d="m440 72h-16v-32h-32v-16h40c4.417969 0 8 3.582031 8 8zm0 0"/><path d="m72 304h-40c-4.417969 0-8-3.582031-8-8v-40h16v32h32zm0 0"/><path d="m432 304h-40v-16h32v-32h16v40c0 4.417969-3.582031 8-8 8zm0 0"/><path d="m120 128h224v16h-224zm0 0"/><path d="m88 160h288v16h-288zm0 0"/><path d="m152 192h160v16h-160zm0 0"/></g></svg>
                            </figure>}
                            <h4 className="card-title mt-3 text-wrap">{value.title}</h4>
                            <div className="meta card-text">
                                <p>By: {value.upload_by && value.upload_by} </p>
                            </div>
                            <div className="card-text">
                                <Button variant="primary" onClick={this.handleShow} title={value.title} description={value.description} className="btn btn-primary btn-block btn-lg p-1">
                                    Ver descripcion...
                                </Button>
                            </div>
                        </div>
                        <div className="card-footer p-1">
                            <div>
                                {
                                    (firebase.auth().currentUser && videoCurrent) &&
                                    <button className="btn btn-success btn-sm btn-" onClick={this.like} videoname={key}>Me Gusta!</button>
                                }

                                {(firebase.auth().currentUser && (this.state.videos[key].likes[firebase.auth().currentUser.uid] === false || this.state.videos[key].likes[firebase.auth().currentUser.uid] === undefined)) &&
                                    <button className="btn btn-info btn-sm btn-" onClick={this.like} videoname={key}>Te gusto el video?</button>
                                }
                                {!firebase.auth().currentUser &&
                                        <button className="btn btn-info btn-sm btn-">Ingresa V</button>
                                }
                            </div>
                            <div><small className="text-center p-0 m-0">Creacion: {value.upload_at &&this.getTimeElpse(value.upload_at)}</small></div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render()
    {
        return (
            <div>
                <h1>Home</h1>
                <div>
                    {this.state.videos && this.renderVideos()}
                </div>
                <>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header className="text-bold">{this.state.actualTitle}</Modal.Header>
                        <Modal.Body>{this.state.actualDescription}</Modal.Body>
                    </Modal>
                </>
            </div>

        )
    };
}


export default Home;

