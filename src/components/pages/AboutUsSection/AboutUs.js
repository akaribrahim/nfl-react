import React from "react";
import "./AboutUs.css";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import OnerPhoto from "../../../shared/images/team/oner.png";
import IboPhoto from "../../../shared/images/team/ibo.png";
import MaliPhoto from "../../../shared/images/team/mehmetali.jpeg";
function AboutUs() {
   return (
      <div class="page">
         <div class="container-fluid pt-3 ">
            <div className='about-us-header'>
               <div className='header-line'></div>
               <div className='header-text'>About Us</div>
               <div className='header-line'></div>
            </div>
            <div class="row d-flex justify-content-around align-items-center px-5">
               <div class="person-box col-md-5 col-lg-3 col-sm-8 col-10 d-flex flex-column justify-content-center align-items-center mt-3">
                  <div class="person-image-box spin circle">
                     <img className="person-image" src={OnerPhoto} alt='image'></img>
                  </div>
                  <div class="person-text-box">
                     <div class="person-name">Öner İnce</div>
                     <div class="person-job">Software Developer</div>
                     <div class="person-link-box">
                        <div
                           class="external-link"
                           onClick={() => {
                              window.open("https://www.linkedin.com/in/oner-ince/", "_blank");
                           }}
                        >
                           <FaLinkedin />
                        </div>
                        <div
                           class="external-link"
                           onClick={() => {
                              window.open("https://github.com/OnerInce", "_blank");
                           }}
                        >
                           <AiFillGithub />
                        </div>
                     </div>
                  </div>
               </div>
               <div class="person-box col-md-5 col-lg-3 col-sm-8 col-10 d-flex flex-column justify-content-center align-items-center mt-3">
                  <div class="person-image-box spin circle">
                     <img className="person-image" src={IboPhoto} alt='image'></img>
                  </div>
                  <div class="person-text-box">
                     <div class="person-name">İbrahim Akar</div>
                     <div class="person-job">Software Developer</div>
                     <div class="person-link-box">
                        <div
                           class="external-link"
                           onClick={() => {
                              window.open("https://linkedin.com/in/bilalcanakar", "_blank");
                           }}
                        >
                           <FaLinkedin />
                        </div>
                        <div
                           class="external-link"
                           onClick={() => {
                              window.open("https://github.com/akaribrahim", "_blank");
                           }}
                        >
                           <AiFillGithub />
                        </div>
                     </div>
                  </div>
               </div>
               <div class="person-box col-md-5 col-lg-3 col-sm-8 col-10 d-flex flex-column justify-content-center align-items-center mt-3">
                  <div class="person-image-box spin circle">
                     <img className="person-image" src={MaliPhoto} alt='image'></img>
                  </div>
                  <div class="person-text-box">
                     <div class="person-name">Mehmet Ali Böbeci</div>
                     <div class="person-job">Software Developer</div>
                     <div class="person-link-box">
                        <div
                           class="external-link"
                           onClick={() => {
                              window.open("https://www.linkedin.com/in/mehmet-ali-b%C3%B6beci-82207520a/", "_blank");
                           }}
                        >
                           <FaLinkedin />
                        </div>
                        <div
                           class="external-link"
                           onClick={() => {
                              window.open("https://github.com/BOBECI", "_blank");
                           }}
                        >
                           <AiFillGithub />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default AboutUs;
