import React  from 'react';
import '../assets/css/loader.css';


export default props =>
     <div className="loading-screen">
       <div className="loading-screen-content">
         <div className="loader-spinner"></div>
         <div className="loader-count">
           <h5 className="text-center" id="percent_count">100%</h5>
         </div>
       </div>
     </div>
