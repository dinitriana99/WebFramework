import React, {Component} from 'react';
import i1 from './images/11.jpg';
import i2 from './images/12.jpg';
import i3 from './images/13.jpg';
import i4 from './images/14.jpg';
import i5 from './images/15.jpg';
import i6 from './images/16.jpg';
import dini from './images/dini.jpg';
class Subheader extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
                    <div className="container">
                    <a className="navbar-brand" href="index.html"><span>D</span>ini TD</a>
                    <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav nav ml-auto">
                            <li className="nav-item"><a href="#home-section" className="nav-link"><span>Home</span></a></li>
                            <li className="nav-item"><a href="#about-section" className="nav-link"><span>About</span></a></li>
                            <li className="nav-item"><a href="#resume-section" className="nav-link"><span>Resume</span></a></li>
                            <li className="nav-item"><a href="#gallery-section" className="nav-link"><span>Gallery</span></a></li>
                            <li className="nav-item"><a href="#contact-section" className="nav-link"><span>Contact</span></a></li>
                        </ul>
                    </div>
                    </div>
                </nav>

                <section className="hero-wrap js-fullheight">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text  justify-content-center align-items-center">
                        <div className="col-lg-8 col-md-6 d-flex align-items-center">
                            <div className="text text-center">
                                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                <span className="subheading">Hey! I am</span>
                                    <h1>Dini Triana Dewi</h1>
                                    <br/><br/><br/><br/>
                                    <br/><br/><br/><br/>
                                    <br/><br/><br/><br/>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>            
            
                <section className="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
                    <div className="container">
                        <div className="row d-flex no-gutters">
                            <div className="col-md-6 col-lg-6 d-flex">
                                <div className="img-about img d-flex align-items-stretch">
                                    <div className="overlay"></div>
                                    <div className="img d-flex align-self-stretch align-items-center">
                                    <img src={dini} width="500"/></div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 pl-md-5 py-5">
                                <div className="row justify-content-start pb-3">
                                    <div className="col-md-12 heading-section ">
                                <br/><br/><br/><br/><br/><br/><br/><br/>
                                        <h1 className="big">About</h1>
                                        <h2 className="mb-4">About Me</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum rutrum velit, ac pulvinar ipsum aliquet sed.</p>
                                        <ul className="about-info mt-4 px-md-0 px-2">
                                            <li className="d-flex"><span>Name:</span> <span>Dini Triana Dewi</span></li>
                                            <li className="d-flex"><span>Date of birth:</span> <span>January 11, 1999</span></li>
                                            <li className="d-flex"><span>Address:</span> <span>Jl. Kembang Turi No. 20A, Gg. IIIA, Jatimulyo, Lowokwaru, Kota Malang</span></li>
                                            <li className="d-flex"><span>Email:</span> <span>dinitd25@gmail.com</span></li>
                                            <li className="d-flex"><span>Phone: </span> <span>+62895366941094</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            
                <section className="ftco-section ftco-no-pb goto-here" id="resume-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <nav id="navi">
                                    <ul>
                                    <li><a href="#page-1">Education</a></li>
                                    <li><a href="#page-3">Skills</a></li>
                                    </ul>
                                </nav>
                                </div>
                                <div className="col-md-9">
                                <div id="page-1" className= "page one">
                                    <h2 className="heading">Education</h2>
                                    <div className="resume-wrap d-flex ">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon-ideas"></span>
                                        </div>
                                        <div className="text pl-3">
                                            <span className="date">2005-2011</span>
                                            <h2>SDN Gempol 3</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum rutrum velit, ac pulvinar ipsum aliquet sed.</p>
                                        </div>
                                    </div>
                                    <div className="resume-wrap d-flex ">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon-ideas"></span>
                                        </div>
                                        <div className="text pl-3">
                                            <span className="date">2011-2014</span>
                                            <h2>SMPN 1 Gempol</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum rutrum velit, ac pulvinar ipsum aliquet sed.</p>
                                        </div>
                                    </div>
                                    <div className="resume-wrap d-flex ">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon-ideas"></span>
                                        </div>
                                        <div className="text pl-3">
                                            <span className="date">2014-2017</span>
                                            <h2>SMKN 1 Bangil</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum rutrum velit, ac pulvinar ipsum aliquet sed.</p>
                                        </div>
                                    </div>
                                    <div className="resume-wrap d-flex">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon-ideas"></span>
                                        </div>
                                        <div className="text pl-3">
                                            <span className="date">2017-Now</span>
                                            <h2>Polytechnic of Malang</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum rutrum velit, ac pulvinar ipsum aliquet sed.</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="page-3" className= "page three">
                                    <h2 className="heading">Skills</h2>
                                    <div className="row progress-circle mb-5">
                                        <div className="col-lg-4 mb-4">
                                        <div className="bg-white rounded-lg shadow p-4">
                                            <h2 className="h5 font-weight-bold text-center mb-4">Graphic Design</h2>

                                            <div className="progress mx-auto" data-value='95'>
                                            <span className="progress-left">
                                                <span className="progress-bar border-primary"></span>
                                            </span>
                                            <span className="progress-right">
                                                <span className="progress-bar border-primary"></span>
                                            </span>
                                            <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                                <div className="h2 font-weight-bold">95<sup className="small">%</sup></div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>

                                        <div className="col-lg-4 mb-4">
                                        <div className="bg-white rounded-lg shadow p-4">
                                            <h2 className="h5 font-weight-bold text-center mb-4">HTML</h2>

                                            <div className="progress mx-auto" data-value='85'>
                                            <span className="progress-left">
                                                <span className="progress-bar border-primary"></span>
                                            </span>
                                            <span className="progress-right">
                                                <span className="progress-bar border-primary"></span>
                                            </span>
                                            <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                                <div className="h2 font-weight-bold">85<sup className="small">%</sup></div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>

                                        <div className="col-lg-4 mb-4">
                                        <div className="bg-white rounded-lg shadow p-4">
                                            <h2 className="h5 font-weight-bold text-center mb-4">Java</h2>

                                            <div className="progress mx-auto" data-value='75'>
                                            <span className="progress-left">
                                                <span className="progress-bar border-primary"></span>
                                            </span>
                                            <span className="progress-right">
                                                <span className="progress-bar border-primary"></span>
                                            </span>
                                            <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                                <div className="h2 font-weight-bold">75<sup className="small">%</sup></div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="ftco-section ftco-galerry" id="gallery-section">
                    <div className="container-fluid px-md-0">
                        <div className="row no-gutters justify-content-center pb-5">
                        <div className="col-md-12 heading-section text-center">
                            <h2 className="mb-4">Gallery</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <div className="project img d-flex justify-content-center align-items-center" style={{backgroundimage: (i1)}}>
                                    <img src={i1} width="450"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="project img d-flex justify-content-center align-items-center" style={{backgroundimage: (i2)}}>
                                    <img src={i2} width="450"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="project img d-flex justify-content-center align-items-center" style={{backgroundimage: (i3)}}>
                                    <img src={i3} width="450"/> 
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="project img d-flex justify-content-center align-items-center" style={{backgroundimage: (i4)}}>
                                    <img src={i4} width="450"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="project img d-flex justify-content-center align-items-center" style={{backgroundimage: (i5)}}>
                                    <img src={i5} width="450"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="project img d-flex justify-content-center align-items-center" style={{backgroundimage: (i6)}}>
                                    <img src={i6} width="450"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center">
                            <h1 className="big big-2">Contact</h1>
                            <h2 className="mb-4">Contact Me</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum rutrum velit, ac pulvinar ipsum aliquet sed.</p>
                        </div>
                        </div>

                        <div className="row d-flex contact-info mb-5">
                        <div className="col-md-6 col-lg-3 d-flex">
                            <div className="align-self-stretch box text-center p-4 shadow">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="icon-map-signs"></span>
                                </div>
                                <div>
                                    <h3 className="mb-4">Address</h3>
                                    <p>Jl. Kembang Turi No. 20A, Gg. IIIA, Jatimulyo, Lowokwaru, Kota Malang</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex">
                            <div className="align-self-stretch box text-center p-4 shadow">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="icon-phone2"></span>
                                </div>
                                <div>
                                    <h3 className="mb-4">Contact Number</h3>
                                    <p>+62895366941094</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex ">
                            <div className="align-self-stretch box text-center p-4 shadow">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="icon-paper-plane"></span>
                                </div>
                                <div>
                                    <h3 className="mb-4">Email Address</h3>
                                    <p>dinitd25@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex">
                            <div className="align-self-stretch box text-center p-4 shadow">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="icon-globe"></span>
                                </div>
                                <div>
                                    <h3 className="mb-4">Website</h3>
                                    <p><a href="#">instagram.com/dinidtd</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
                
                <footer className="ftco-footer ftco-section">
                    <div className="container">
                        <div className="row mb-5">
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">About</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Have a Questions?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                <li><span className="icon icon-map-marker"></span><span className="text">Jl. Kembang Turi No. 20A, Gg. IIIA, Jatimulyo, Lowokwaru, Kota Malang</span></li>
                                <li><a href="#"><span className="icon icon-phone"></span><span className="text">+62895366941094</span></a></li>
                                <li><a href="#"><span className="icon icon-envelope"></span><span className="text">dinitd25@gmail.com</span></a></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-12 text-center">
                        <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script></p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
} 

export default Subheader;