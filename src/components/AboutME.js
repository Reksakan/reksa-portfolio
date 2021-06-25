import React from "react";
import author from "../me.jpg";

const AboutME = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>Hi! My name is Asker. I've been developing websites for over 1 year. I'm Front-end Web Developer. Technologies I use is MERN (MongoDB, Express, ReactJS and NodeJS)</p>
        </div>
      </div> 
    </div>
  )
}

export default AboutME
