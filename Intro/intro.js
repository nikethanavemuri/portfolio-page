import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Nikethana Vemuri</span> <br />Software Engineer</span>
                <p className="introPara"> I am a Software Engineer with 2+ years of experience in developing robust applications <br /> using C# and .NET, designing and implementing integration solutions with Dell Boomi, <br /> and optimizing SQL-based workflows using MS SQL Server.</p>
                <Link 
                    to="skills" 
                    smooth={true} 
                    duration={500} 
                    className="btnLink"
                >
                    <button className="btn">
                        <img src={btnImg} alt="Hire" className='btnImg' /> Hire Me
                    </button>
                </Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;