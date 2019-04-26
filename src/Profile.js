import React , {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './Profile.css'
class Profile extends Component {

    render() {
        return (<div className="profile-page" style={{"marginTop": "70px"}}>
        {/*<nav className="navbar navbar-color-on-scroll navbar-transparent    fixed-top  navbar-expand-lg "*/}
        {/*     colorOnScroll="100" id="sectionsNav">*/}
        {/*    <div className="container">*/}
        {/*        <div className="navbar-translate">*/}
        {/*            <a className="navbar-brand" href="../index.html">Material Kit </a>*/}
        {/*            <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false"*/}
        {/*                    aria-label="Toggle navigation">*/}
        {/*                <span className="navbar-toggler-icon"/>*/}
        {/*                <span className="navbar-toggler-icon"/>*/}
        {/*                <span className="navbar-toggler-icon"/>*/}
        {/*            </button>*/}
        {/*        </div>*/}

        {/*        <div className="collapse navbar-collapse">*/}
        {/*            <ul className="navbar-nav ml-auto">*/}
        {/*                <li className="dropdown nav-item">*/}
        {/*                    <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown"*/}
        {/*                       aria-expanded="false">*/}
        {/*                        <i className="material-icons">apps</i> Components*/}
        {/*                    </a>*/}
        {/*                    <div className="dropdown-menu dropdown-with-icons">*/}
        {/*                        <a href="../index.html" className="dropdown-item">*/}
        {/*                            <i className="material-icons">layers</i> All Components*/}
        {/*                        </a>*/}

        {/*                        <a href="http://demos.creative-tim.com/material-kit/docs/2.0/getting-started/introduction.html"*/}
        {/*                           className="dropdown-item">*/}
        {/*                            <i className="material-icons">content_paste</i> Documentation*/}
        {/*                        </a>*/}
        {/*                    </div>*/}
        {/*                </li>*/}
        {/*                <li className="nav-item">*/}
        {/*                    <a className="nav-link" href="javascript:void(0)">*/}
        {/*                        <i className="material-icons">cloud_download</i> Download*/}
        {/*                    </a>*/}
        {/*                </li>*/}
        {/*                <li className="nav-item">*/}
        {/*                    <a className="nav-link" href="https://twitter.com/CreativeTim" target="_blank">*/}
        {/*                        <i className="fa fa-twitter"/>*/}
        {/*                    </a>*/}
        {/*                </li>*/}
        {/*                <li className="nav-item">*/}
        {/*                    <a className="nav-link" href="https://www.facebook.com/CreativeTim" target="_blank">*/}
        {/*                        <i className="fa fa-facebook-square"/>*/}
        {/*                    </a>*/}
        {/*                </li>*/}
        {/*                <li className="nav-item">*/}
        {/*                    <a className="nav-link" href="https://www.instagram.com/CreativeTimOfficial"*/}
        {/*                       target="_blank">*/}
        {/*                        <i className="fa fa-instagram"/>*/}
        {/*                    </a>*/}
        {/*                </li>*/}
        {/*            </ul>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</nav>*/}

        <div className="main main-raised">
            <div className="profile-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ml-auto mr-auto">
                            <div className="profile2">
                                <div className="avatar">
                                    <img
                                        src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0NjQzOTk4OTQ4OTkyMzQy/ansel-elgort-poses-for-a-portrait-during-the-baby-driver-premiere-2017-sxsw-conference-and-festivals-on-march-11-2017-in-austin-texas-photo-by-matt-winkelmeyer_getty-imagesfor-sxsw-square.jpg"
                                        alt="Circle Image" className="img-raised rounded-circle img-fluid"/>
                                </div>
                                <div className="name">
                                    <h3 className="title">Christian Louboutin</h3>
                                    <h6>Designer</h6>
                                    <a href="#pablo" className="btn btn-just-icon btn-link btn-dribbble"><i
                                        className="fa fa-dribbble"/></a>
                                    <a href="#pablo" className="btn btn-just-icon btn-link btn-twitter"><i
    className="fa fa-twitter"/></a>
                                    <a href="#pablo" className="btn btn-just-icon btn-link btn-pinterest"><i
                                        className="fa fa-pinterest"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="description text-center">
                        <p>An artist of considerable range, Chet Faker — the name taken by Melbourne-raised,
                            Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a
                            warm, intimate feel with a solid groove structure. </p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 ml-auto mr-auto">
                            <div className="profile-tabs">
                                <ul className="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#studio" role="tab" data-toggle="tab">
                                            <i className="material-icons">camera</i>
                                            Studio
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#works" role="tab" data-toggle="tab">
                                            <i className="material-icons">palette</i>
                                            Work
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#favorite" role="tab" data-toggle="tab">
                                            <i className="material-icons">favorite</i>
                                            Favorite
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="tab-content tab-space">
                        <div className="tab-pane active text-center gallery" id="studio">
                            <div className="row">
                                <div className="col-md-3 ml-auto">
                                    <img alt=""
                                        src="https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83079913579babb9d2c94a5941b2e69d&auto=format&fit=crop&w=751&q=80"
                                        className="rounded"/>
                                        <img alt=""
                                            src="https://images.unsplash.com/photo-1528249227670-9ba48616014f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=66b8e7db17b83084f16fdeadfc93b95b&auto=format&fit=crop&w=357&q=80"
                                            className="rounded"/>
                                </div>
                                <div className="col-md-3 mr-auto">
                                    <img alt=""
                                        src="https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=72da2f550f8cbd0ec252ad6fb89c96b2&auto=format&fit=crop&w=334&q=80"
                                        className="rounded"/>
                                        <img alt=""
                                            src="https://images.unsplash.com/photo-1506667527953-22eca67dd919?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6326214b7ce18d74dde5e88db4a12dd5&auto=format&fit=crop&w=750&q=80"
                                            className="rounded"/>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane text-center gallery" id="works">
                            <div className="row">
                                <div className="col-md-3 ml-auto">
                                    <img alt=""
                                        src="https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83079913579babb9d2c94a5941b2e69d&auto=format&fit=crop&w=751&q=80"
                                        className="rounded"/>
                                        <img alt=""
                                            src="https://images.unsplash.com/photo-1506667527953-22eca67dd919?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6326214b7ce18d74dde5e88db4a12dd5&auto=format&fit=crop&w=750&q=80"
                                            className="rounded"/>
                                            <img alt=""
                                                src="https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec2bdc92a9687b6af5089b335691830e&auto=format&fit=crop&w=750&q=80"
                                                className="rounded"/></div>
                                <div className="col-md-3 mr-auto">
                                    <img alt=""
                                        src="https://images.unsplash.com/photo-1504346466600-714572c4b726?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6754ded479383b7e3144de310fa88277&auto=format&fit=crop&w=750&q=80"
                                        className="rounded"/>
                                        <img alt=""
                                            src="https://images.unsplash.com/photo-1494028698538-2cd52a400b17?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83bf0e71786922a80c420c17b664a1f5&auto=format&fit=crop&w=334&q=80"
                                            className="rounded"/>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane text-center gallery" id="favorite">
                            <div className="row">
                                <div className="col-md-3 ml-auto">
                                    <img alt=""
                                        src="https://images.unsplash.com/photo-1504346466600-714572c4b726?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6754ded479383b7e3144de310fa88277&auto=format&fit=crop&w=750&q=80"
                                        className="rounded"/>
                                        <img alt=""
                                            src="https://images.unsplash.com/photo-1494028698538-2cd52a400b17?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83bf0e71786922a80c420c17b664a1f5&auto=format&fit=crop&w=334&q=80"
                                            className="rounded"/>
                                </div>
                                <div className="col-md-3 mr-auto">
                                    <img alt=""
                                        src="https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec2bdc92a9687b6af5089b335691830e&auto=format&fit=crop&w=750&q=80"
                                        className="rounded"/>
                                        <img alt=""
                                            src="https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83079913579babb9d2c94a5941b2e69d&auto=format&fit=crop&w=751&q=80"
                                            className="rounded"/>
                                            <img alt=""
                                                src="https://images.unsplash.com/photo-1506667527953-22eca67dd919?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6326214b7ce18d74dde5e88db4a12dd5&auto=format&fit=crop&w=750&q=80"
                                                className="rounded"/>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

        {/*<script src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js"*/}
        {/*        integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U"*/}
        {/*        crossOrigin="anonymous"></script>*/}
        {/*<script src="https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js"*/}
        {/*        integrity="sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9"*/}
        {/*        crossOrigin="anonymous"></script>*/}

        </div>)
    }
}
export default Profile;





