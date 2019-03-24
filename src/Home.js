import 'bootstrap/dist/css/bootstrap.css';
import React, {Component} from 'react';
import firebase from './Firebase';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css'


class Home extends Component {

    state = {msg:"",
    videos:null};

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
        return endTime.seconds;
    }



    renderVideos(){
        return Object.entries(this.state.videos).map(([key, value], i) => {
            return (
                    <div className="col-sm-6 col-md-4 col-lg-3 mt-4" style={{display: "inline-flex"}}>
                        <div className="card card-inverse card-info" >
                            <video className="card-img-top" src={value.url}/>
                                <div className="card-block">
                                    <figure className="profile">
                                        <video src={value.url} className="profile-avatar"
                                             alt=""/>
                                    </figure>
                                    <h4 className="card-title mt-3">{value.title}</h4>
                                    <div className="meta card-text">
                                        <a>By: {value.upload_by} </a>
                                    </div>
                                    <div className="card-text">
                                        {value.description}
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <small>Creacion: {this.getTimeElpse(value.upload_at)}</small>
                                    <button className="btn btn-info float-right btn-sm">Follow</button>
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


            </div>
        )
    };
}


export default Home;
