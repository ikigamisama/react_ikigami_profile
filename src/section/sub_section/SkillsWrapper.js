import React from 'react';
import '../../assets/css/section.css';
import '../../assets/css/skillswrapper.css';


export default props =>

  <section className="skill-wrapper">
       <a name="about"></a>
       <h4 className="section-title">MY SKILLS</h4>
       <div className="skill-card-wrapper">
           <div className="skill-card">
               <div className="row">
                   <div className="col-sm-12 col-md-6 col-lg-6">
                       <div className="skill-content">
                           <div className="skill-content-description">
                               <h5>WEB DEVELOPMENT SKILLS</h5>
                               <p>The role is responsible fo designing, coding and modifying websites, from layout to function and according to a client's specifications. Strive to create visually appealing sites that feature user-friendly design and clear navigation.   </p>
                           </div>
                            <div className="skill-marginb"></div>
                            <div className="skill-progress">
                                 <p>HTML &amp; CSS</p>
                                 <div className="skill-progress-wrap">
                                     <div className="skill-progress theme-bg skill-a-1">
                                         <p>90%</p>
                                     </div>
                                 </div>
                             </div>
                             <div className="skill-progress">
                                 <p>JavaScript / jQuery</p>
                                 <div className="skill-progress-wrap">
                                     <div className="skill-progress theme-bg skill-a-2">
                                         <p>80%</p>
                                     </div>
                                 </div>
                             </div>
                             <div className="skill-progress">
                                 <p>PHP / NodeJS / Django</p>
                                 <div className="skill-progress-wrap">
                                     <div className="skill-progress theme-bg skill-a-3">
                                         <p>85%</p>
                                     </div>
                                 </div>
                             </div>
                              <div className="skill-progress">
                                 <p>MySQL / MongoDB / PostgreSQL</p>
                                 <div className="skill-progress-wrap">
                                     <div className="skill-progress theme-bg skill-a-4">
                                         <p>78%</p>
                                     </div>
                                 </div>
                             </div>
                       </div>
                   </div>
                   <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="skill-content-description">
                               <h5>WEB DESIGN SKILLS</h5>
                               <p>Encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization</p>
                         </div>
                         <div className="skill-progress">
                                 <p>RESPONSIVE LAYOUT</p>
                                 <div className="skill-progress-wrap">
                                     <div className="skill-progress theme-bg skill-b-1">
                                         <p>90%</p>
                                     </div>
                                 </div>
                             </div>
                             <div className="skill-progress">
                                 <p>PHOTOSHOP</p>
                                 <div className="skill-progress-wrap">
                                     <div className="skill-progress theme-bg skill-b-2">
                                         <p>85%</p>
                                     </div>
                                 </div>
                             </div>
                             <div className="skill-progress">
                                 <p>ILLUSTATOR</p>
                                 <div className="skill-progress-wrap">
                                     <div className="skill-progress theme-bg skill-b-3">
                                         <p>75%</p>
                                     </div>
                                 </div>
                             </div>
                             <div className="skill-progress">
                                 <p>UI / UX DESIGN</p>
                                 <div className="skill-progress-wrap">
                                     <div className="skill-progress theme-bg skill-b-4">
                                         <p>80%</p>
                                     </div>
                                 </div>
                             </div>
                   </div>
               </div>
           </div>
       </div>
   </section>
