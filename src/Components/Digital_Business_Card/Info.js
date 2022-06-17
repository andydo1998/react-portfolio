import React from "react";

import profilePic from "../../Images/andy_grad_pic.JPG";
import githubImg from "../../Images/github_img.jpeg";
import linkedinImg from "../../Images/linkedin_img.png";

export default function Info() {
    return (
        <header>
            <img src={profilePic} className="profilePic" alt="profile pic" />
            <h1 className="name">Andy Do</h1>
            <h2 className="title">React Developer</h2>
            <h3 className="email">andydo1998@gmail.com</h3>
            <div className="buttons">
                <a href="https://github.com/andydo1998"><button className="button">Github<img src={githubImg} className="githubImg" alt="github img" /></button></a>
                <a href="https://www.linkedin.com"><button className="button">LinkedIn<img src={linkedinImg} className="linkedinImg" alt="linkedin img" /></button></a>
            </div>
        </header>
    )
};