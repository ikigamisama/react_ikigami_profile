import React  from 'react';
import '../assets/css/header.css';
import MainLogo from '../assets/img/logo.png';

export default props =>
  <header>
    <nav className="full-header">
      <div className="header-wrapper">
          <a className="header-brand-logo">
            <img src={MainLogo} alt="Official Logo of Ikigami Sama"/>
          </a>
          <a className="header-sidebar-trigger" id="btn_navbar">
    					<i className="fa fa-align-justify"></i>
    			</a>
          <ul className="right header-hide-on-mobile">
    					<li>
    						<a href="#home">HOME</a>
    					</li>
    					<li>
    						<a href="#about">ABOUT ME</a>
    					</li>
    					<li>
    						<a href="#skill">SKILL</a>
    					</li>
    					<li>
    						<a href="#experience">EXPERIENCE</a>
    					</li>
    					<li>
    						<a href="#service">SERVICE</a>
    					</li>
    					<li>
    						<a href="#blog">BLOG</a>
    					</li>
    					<li>
    						<a href="#contact">CONTACT</a>
    					</li>
    				</ul>
      </div>
    </nav>
  </header>
