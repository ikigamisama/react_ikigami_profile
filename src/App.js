import React, { Component } from 'react';
import LoaderScreen from './section/LoaderScreen';
import Sidebar from './components/Sidebar'
import Header from './components/Header';
import Mainsection from './Mainsection';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <LoaderScreen />
        <Sidebar />
        <Header/>
            <Mainsection />
            
        <Footer/>
      </React.Fragment>
    );
  }
}
