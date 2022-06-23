import React from "react";
import { card1Img, card2Img, card3Img, card4Img } from "../constant/index";

function Home() {
  return (
    <div>
      <div className="main">
        <div className="mainLeft">
          <span className="mainHeading">
            Share Your Thoughts by Creating Articles
          </span>
          <span className="mainSubHeading">
            Publish your unique thoughts by creating articles and let the
            decentralized world know your innovative ideas.
          </span>
          <img
            src="https://imageio.forbes.com/blogs-images/bernardmarr/files/2018/05/AdobeStock_187167333-1200x527.jpeg?format=jpg&width=1200"
            alt=""
            className="mainImg"
          />
        </div>
        <div className="mainRight">
          <div className="cardHome">
            <span className="cardTitle">Login to NEAR Wallet</span>
            <img src={card1Img} alt="" className="cardImg" />
          </div>
          <div className="cardHome">
            <span className="cardTitle">
              Fill Information to Create Article
            </span>
            <img src={card2Img} alt="" className="cardImg" />
          </div>
          <div className="cardHome">
            <span className="cardTitle">Submit to NEAR Blockchain</span>
            <img src={card3Img} alt="" className="cardImg" />
          </div>
          <div className="cardHome">
            <span className="cardTitle">See Articles Created by You</span>
            <img src={card4Img} alt="" className="cardImg" />
          </div>
        </div>
      </div>
      <svg
        className="curveSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#a2d9ff"
          fill-opacity="1"
          d="M0,128L60,133.3C120,139,240,149,360,144C480,139,600,117,720,138.7C840,160,960,224,1080,240C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Home;
