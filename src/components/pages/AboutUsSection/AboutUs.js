import React from "react";
import "./AboutUs.css";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
function AboutUs() {
	return (
		<div class="page">
			<div class="container-fluid pt-3">
				<div class="row d-flex justify-content-center align-items-center ">
					<div class="person-box col-md-5 col-lg-3 col-s d-flex flex-column justify-content-center align-items-center mt-3">
						<div class="person-image-box spin circle">IMAGE</div>
						<div class="person-text-box">
							<div class="person-name">Öner İnce</div>
							<div class="person-job">Software Developer</div>
							<div class="person-link-box">
								<div class='external-link' onClick={() => {
									window.open("https://linkedin.com", "_blank");
								}}>
									<FaLinkedin />
								</div>
								<div class='external-link' onClick={() => {
									window.open("https://github.com", "_blank");
								}}>
									<AiFillGithub />
								</div>
							</div>
						</div>
					</div>
					<div class="person-box col-md-5 col-lg-3 col-s d-flex flex-column justify-content-center align-items-center mt-3">
						<div class="person-image-box spin circle m-auto">IMAGE</div>
						<div class="person-text-box">
							<div class="person-name">İbrahim Akar</div>
							<div class="person-job">Frontend Developer</div>
							<div class="person-link-box">
								<div class='external-link' onClick={() => {
									window.open("https://linkedin.com", "_blank");
								}}>
									<FaLinkedin />
								</div>
								<div class='external-link' onClick={() => {
									window.open("https://github.com", "_blank");
								}}>
									<AiFillGithub />
								</div>
							</div>
						</div>
					</div>
					<div class="person-box col-md-5 col-lg-3 col-s d-flex flex-column justify-content-center align-items-center mt-3">
						<div class="person-image-box spin circle">IMAGE</div>
						<div class="person-text-box">
							<div class="person-name">Mehmet Ali Böbeci</div>
							<div class="person-job">Software Developer</div>
							<div class="person-link-box">
								<div class='external-link' onClick={() => {
									window.open("https://linkedin.com", "_blank");
								}}>
									<FaLinkedin />
								</div>
								<div class='external-link' onClick={() => {
									window.open("https://github.com", "_blank");
								}}>
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
