import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import "./Home.css";
import styled from "styled-components";
import Video from "../../../shared/videos/video.mp4";

const VideoBg = styled.video`
	width: 100%;
	height: 660px;
	-o-object-fit: cover;
	object-fit: cover;
	background: #232a34;
`;
const HomeBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 660px;
	overflow: hidden;
`;
function Home() {
	return (
		<div>
			<HomeBg>
				<VideoBg autoPlay loop muted src={Video} playsInline type="video/mp4" />
			</HomeBg>

			<div
				className="content-box"
				onScroll={() => {
					console.log("burda");
				}}>
				<div className="text-group">
					<div className="top-text unselectable">A tool to simulate NFL matches and predict outcomes</div>
					<div className="alt-text unselectable">
						<span style={{ fontStyle: "italic", paddingRight: "10px" }}>Run It Again</span>
						predicts running games based on the data you enter using artificial intelligence.
					</div>
				</div>

				<div className="button-group">
                    <Link className='get-started-button' to='/simulation'>
                        <p>
							<span class="bg"></span>
							<span class="base"></span>
							<span class="text">Get Started</span>
						</p>
                    </Link>
					{/* <div className="go-source-button">
						<span className="rightspan">Get Started</span>
						<Link className="righta" to="/simulation">
							<GiAmericanFootballHelmet />
						</Link>
					</div>
					<div className="go-source-button">
						<span>View Source</span>
						<div
							onClick={() => {
								window.open("https://github.com/akaribrahim/nfl-react", "_blank");
							}}>
							<AiFillGithub />
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default Home;
