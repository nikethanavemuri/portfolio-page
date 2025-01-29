import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ayjup57', 'template_52ov0nr', form.current, 'WRVYoWrIGeYhz9xXa')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contactPage'>
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <span className="clientDesc">
                During my two-year tenure at ValueLabs, I had the privilege of working with two esteemed clients, Health Network Laboratories (HNL) and GfK.
                </span>

                {/* Client 1 */}
                <div className="clientContainer">
                    <div className="client">
                        <img src={Walmart} alt="Walmart" className="clientLogo" />
                        <div className="clientDescription">
                            <p>
                            Health Network Laboratories (HNL) is a leading diagnostic laboratory specializing in healthcare services and medical testing. While working with HNL, I developed and optimized solutions such as kiosk check-in systems and courier management systems using Dell Boomi and MS SQL Server. My work focused on building automated ETL pipelines, improving data processing efficiency, and ensuring seamless integration across various healthcare systems.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Client 2 */}
                <div className="clientContainer">
                    <div className="client">
                        <img src={Adobe} alt="Adobe" className="clientLogo" />
                        <div className="clientDescription">
                            <p>
                            GfK is a global leader in data and analytics, providing insights into market trends and consumer behavior. As a C# .NET intern and later a full-time employee at GfK, I contributed to software application development and enhancement. I worked on creating and maintaining web-based solutions using C#, ASP.NET, and MS SQL Server, including developing an internal website repository for Robotic Process Automation (RPA) projects. I participated in code reviews to ensure clean, maintainable code and collaborated closely with teams to deliver high-quality software solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={twitterIcon} alt="Twitter" className="link" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <img src={youtubeIcon} alt="YouTube" className="link" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" className="link" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={facebookIcon} alt="Facebook" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
