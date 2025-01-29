import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc"> I am Chakraraja Nikethana Vemuri, an experienced software engineer with a strong background in designing and implementing innovative software solutions. I began my professional journey at ValueLabs, where I honed my skills in developing efficient and scalable systems. After moving to the United States to pursue my Master’s in Computer Science at the University of Dayton, I recently graduated and am now excited to re-enter the job market. I am passionate about leveraging my expertise in software development and problem-solving to contribute to impactful projects and drive meaningful results.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>University of Dayton</h2>
                        <p>Graduated in May 2024 with a Master's in Computer Science and a GPA of 3.90</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Valuelabs</h2>
                        <p> Worked for 2+ years as an Integration Developer with expertise in Dell Boomi and MS SQL, specializing in seamless integrations and data workflows. Also skilled in C# .NET, with hands-on experience developing and maintaining software solutions.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Hobbies</h2>
                        <p>I have a strong passion for photography, which allows me to explore my creativity and capture meaningful moments. In my free time, I enjoy experimenting with different styles and techniques, and you can check out some of my work on my Instagram page, <a href="https://www.instagram.com/nickallery.jpg" target="_blank" rel="noopener noreferrer" className="whiteLink">@nickallery.jpg</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;