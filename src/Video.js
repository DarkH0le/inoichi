import React, {Component} from 'react';
import firebase from './Firebase';
import { Alert } from 'reactstrap';

import LinearProgress from '@material-ui/core/LinearProgress';
import { Badge } from 'reactstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BounceLoader} from "react-spinners";



class Video extends Component {


    state = {
        "progressPercentage":"0",
        loading:false,
        url:"",
        video:{
            url:"",
            upload_at:"",
            title:"",
            description:"",
            upload_by:""
        }
    };

    handle = (e) => {
        //Get values from event
        const field = e.target.name;
        const value = e.target.value;
        //The braket is a es6 feature that allow use to use a variable as a key in an object
        this.setState(prevState => ({
            ...prevState,
            video: {
                ...prevState.video,
                [field]:value
            }
        }))
    };


    // loadingFile = () =>{
    //     this.setState({loading:!this.state.loading})
    // };

    uploadFile = (e) => {
        if(this.state.video.description !== "" && this.state.video.title !== "") {
            //GetFile
            let file = e.target.files[0];

            //Get Firebase Storage ref
            let storageRef = firebase.storage().ref(('videos/' + file.name));

            //Upload file
            let task = storageRef.put(file);

            this.setState({
                "loading": true
            });

            //Progress
            task.on('state_changed', (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                progress = Math.round(progress);
                this.setState({progressPercentage: progress});
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                    default:
                        console.log("default");
                        break

                }
            }, function (error) {
                // Handle unsuccessful uploads
            }, () => {
                this.setState({loading: !this.state.loading});

                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                task.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    this.setState(prevState => ({...prevState, url: downloadURL}));
                    this.setState(prevState => ({
                        ...prevState, video: {
                            ...prevState.video,
                            url: downloadURL,
                            upload_at: firebase.firestore.FieldValue.serverTimestamp(),
                            upload_by: this.props.user.email,
                            likes:{}
                        }
                    }));
                    console.log(this.state);
                    this.props.registerVideo(this.state.video);
                    console.log('File available at', downloadURL);
                });
            });
        }else {
            alert("LLENA TODO LOS CAMPOS!!!")
        }

    };

        render() {
        return (
            <div className="align-content-center p-4">
                <h1><Badge color="secondary">Sube Tu Video</Badge></h1>
                <form className="pt-2 text-left">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Titulo:</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                               placeholder="Titulo de tu video" onChange={this.handle} name="title" required/>
                    </div>
                    <div className="form-group ">
                        <label htmlFor="exampleFormControlSelect2">Descripcion:</label>
                        <textarea onChangeCapture={this.handle} className="form-control" id="exampleFormControlSelect2" rows="3" placeholder="De que se trata tu video?" name="description" onChange={this.handleChange} required/>
                    </div>
                </form>

                <div>
                    <input className="p-3" type="file" value={""} id="fileButton" onChange={this.uploadFile} accept=".jpeg,.jpg,.png,.mp4"/>
                    <LinearProgress variant="determinate" value={this.state.progressPercentage} />
                    {this.state.progressPercentage}{'%'}
                </div>

                <br/>
                <div className="">
                    <div style={{margin: '0 auto'}}>
                        <BounceLoader
                            css={{display: 'table',
                                margin:'0 auto'}}
                            sizeUnit={"px"}
                            size={60}
                            color={'#123abc'}
                            loading={this.state.loading}/>

                        {this.state.loading && "Cargando..."}
                        {this.state.url && <Alert color="warning">
                            {'For instance, get the download URL: '.concat(this.state.url) }
                        </Alert>}
                    </div>
                </div>
            </div>

        );
    }
}
 export default Video;


