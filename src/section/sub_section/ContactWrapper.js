import React from 'react';
import '../../assets/css/section.css';
import '../../assets/css/contactwrapper.css';


export default props =>
    <section className="contact-wrapper">
            
          <a name="contact"></a>
          <h4 className="section-title">CONTACT</h4>
          <div className="contact-card-wrapper">
              <div className="contact-card">
                  <div className="row">
                      <div className="col-sm-12 col-md-6 col-lg-6">
                          <div className="contact-content">
                              <h5>CONTACT INFO</h5>
                              <p>There are many variations of passages of communicate me. For some projects and consulting regarding on their web app or website, Just contact me and i will see directly</p>

                              <div className="contact-content-poster">
                                  <div className="contact-content-description-logo theme-bg">
                                      <i className="fa fa-map-marker"></i>
                                  </div>
                                  <div className="contact-content-description-content">
                                      <p className="content-description-contact-label">ADDRESS</p>
                                      <p className="content-description-contact">Davao City, Philippines</p>
                                  </div>
                              </div>
                              <div className="contact-content-poster">
                                  <div className="contact-content-description-logo theme-bg">
                                      <i className="fa fa-phone"></i>
                                  </div>
                                  <div className="contact-content-description-content">
                                      <p className="content-description-contact-label">CONTACT</p>
                                      <p className="content-description-contact">+639108636160</p>
                                  </div>
                              </div>
                              <div className="contact-content-poster">
                                  <div className="contact-content-description-logo theme-bg">
                                      <i className="fa fa-envelope"></i>
                                  </div>
                                  <div className="contact-content-description-content">
                                      <p className="content-description-contact-label">EMAIL</p>
                                      <a href="mailto:">dev@ikigamidevs.com</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6">
                          <div className="contact-content">
                              <h5>SEND MESSAGE</h5>
                              <form method="post">
                                  <div className="form-contact">
                                      <input type="text" name="contact_name" id="contact_name" required="1" className="theme-form-bg" />
                                      <label htmlFor="contact_name" className="">Name</label>
                                  </div>
                                  <div className="form-contact">
                                      <input type="text" name="contact_email" id="contact_email" required="1"  className="theme-form-bg" />
                                      <label htmlFor="contact_email" className="">Email</label>
                                  </div>
                                  <div className="form-contact">
                                      <input type="text" name="contact_subject" id="contact_subject" required="1"  className="theme-form-bg" />
                                      <label htmlFor="contact_subject" className="">Subject</label>
                                  </div>
                                  <div className="form-contact">
                                      <textarea id="contact_messsage" name="contact_message" required="1"  className="theme-form-bg"></textarea>
                                      <label htmlFor="contact_messagee" className="">Message</label>
                                  </div>
                                  <div className="form-contact">
                                      <button type="submit" className="theme-bg btn-submit">SUBMIT</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
