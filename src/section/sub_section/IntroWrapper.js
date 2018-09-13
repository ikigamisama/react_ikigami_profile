import React, { Component } from 'react';
import MainProfileImg from '../../assets/img/meh.jpg';
import '../../assets/css/section.css';
import '../../assets/css/introwrapper.css';





export default class IntroWrapper extends Component{
  computeAge(){
    const date = new Date(),
        getCurrentAge = date.getFullYear() - 1996;

    return getCurrentAge;
  }
  render(){
    return (
      <section className="intro-wrapper">
          <div className="container">
              <div className="profile-card-wrapper">
                  <div className="profile-card">
                      <div className="row">
                          <div className="col-sm-12 col-md-12 col-lg-5">
                              <div className="card-img-display">
                                  <img src={MainProfileImg} alt="main-img" />
                              </div>
                          </div>
                          <div className="col-sm-12 col-md-12 col-lg-7">
                              <div className="card-profile-display">
                                  <h4>HI IM <span className="theme-text">FRANZ MONZALES</span></h4>
                                  <h6>Full Stack Web Developer / Programmer</h6>
                                  <hr />
                                  <div className="card-profile-info">
                                      <ul>
                                          <li>
                                              <p><strong>AGE</strong></p>
                                          </li>
                                          <li>
                                              <p><strong>NATIONALITY</strong></p>
                                          </li>
                                          <li>
                                              <p><strong>ADDRESS</strong></p>
                                          </li>
                                          <li>
                                              <p><strong>PHONE</strong></p>
                                          </li>
                                          <li>
                                              <p><strong>EMAIL</strong></p>
                                          </li>
                                          <li>
                                              <p><strong>WEBSITE</strong></p>
                                          </li>
                                      </ul>
                                      <ul>
                                          <li>
                                              <p>{this.computeAge()}</p>
                                          </li>
                                          <li>
                                              <p>FILIPINO</p>
                                          </li>
                                          <li>
                                              <p>Davao City, PH</p>
                                          </li>
                                          <li>
                                               <p>+639108636160</p>
                                          </li>
                                          <li>
                                              <p>kotascross22@gmail.com</p>
                                          </li>
                                          <li>
                                              <p>
                                              <a href="http://ikigamidevs.ml" target="_blank" rel="noopener noreferrer" className="link-profile">ikigamidevs.ml</a>
                                                  </p>
                                          </li>
                                      </ul>
                                  </div>
                                  <div>
                                      <ul className="profile-social-media-links">
                                              <li>
                                                  <a href="https://www.facebook.com/ikigamisama" className="social-facebook" target="_blank" rel="noopener noreferrer">
                                                      <i className="fa fa-facebook"></i>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="https://twitter.com/ikigamisan" className="social-twitter" target="_blank" rel="noopener noreferrer">
                                                      <i className="fa fa-twitter"></i>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="https://www.instagram.com/iikigami/" className="social-instagram" target="_blank" rel="noopener noreferrer">
                                                      <i className="fa fa-instagram"></i>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="https://github.com/ikigamisama" className="social-github" target="_blank" rel="noopener noreferrer">
                                                      <i className="fa fa-github"></i>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="https://plus.google.com/u/0/107866496734690661429" className="social-google-plus" target="_blank" rel="noopener noreferrer">
                                                      <i className="fa fa-google-plus"></i>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="https://www.linkedin.com/in/franz-monzales-671775135/" className="social-linkedin" target="_blank" rel="noopener noreferrer">
                                                      <i className="fa fa-linkedin"></i>
                                                  </a>
                                              </li>
                                                  <li>
                                                  <a href="" className="social-skype" target="_blank" rel="noopener noreferrer">
                                                      <i className="fa fa-skype"></i>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="" className="social-pinterest" target="_blank" rel="noopener noreferrer">
                                                      <i className="fa fa-pinterest"></i>
                                                  </a>
                                              </li>
                                          </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
    );
  }
}
