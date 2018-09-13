import React, { Component } from 'react';
import SidebarLeft from '../section/SidebarLeft'
import SidebarRight from '../section/SidebarRight'
import ModalSidebar from '../section/ModalSidebar'

export default class Sidebar extends Component{
  render(){
    return(
        <React.Fragment>
            <ModalSidebar />
            <SidebarLeft />
            <SidebarRight />
        </React.Fragment>
    );
  }
}
