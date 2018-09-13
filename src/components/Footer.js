import React  from 'react';
import MainLogo from '../assets/img/logo.png';
import '../assets/css/footer.css';

export default props =>
  <footer className="theme-bg">
          <div className="footer-card-wrapper">
              <div className="footer-content">
                  <div className="footer-main-logo">
                      <img src={MainLogo} alt="Logo" />
                  </div>
                  <div className="profile-social-media-wrapper">
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
      </footer>
