import React, { useState } from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.jpg';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const flashcards = [
    { id: 1, question: Portfolio1, answer: 'This project demonstrates a simple yet powerful QR Code Generator built using Python. It allows users to create custom QR codes for text, URLs, or other data, providing an efficient way to share information securely and conveniently.' },
    { id: 2, question: Portfolio2, answer: 'This project utilizes the Google Text-to-Speech (gTTS) library in Python to convert written text into speech. It offers a simple and efficient way to generate audio files, making it ideal for voice-based applications and accessibility enhancements.' },
    { id: 3, question: Portfolio3, answer: 'This project leverages Pythons smtplib library to automate email sending. It allows users to compose and send personalized emails efficiently, streamlining communication for tasks like notifications, updates, or reminders.' },
    { id: 4, question: Portfolio4, answer: 'This project uses Beautiful Soup for web scraping and Pandas for data manipulation to track and compare the prices of various iPhone models. By scraping product listings from online stores, it organizes the price data into a structured format and visualizes the price trends, making it easy to analyze and compare across different models.' },
    { id: 5, question: Portfolio5, answer: 'This project is an Online Food Ordering Management System built using MySQL for database management. It allows users to browse menus, place orders, and manage transactions, while administrators can update menus, track orders, and manage customer data, providing a seamless food ordering experience.' },
    { id: 6, question: Portfolio6, answer: 'This project focuses on mobile application development using Android Studio. It covers the creation of intuitive and functional Android apps, from design to deployment, using Java with an emphasis on delivering a seamless user experience and integrating various mobile features.' },
];

const Works = () => {
    const [flippedCards, setFlippedCards] = useState({});

    const handleFlip = (id) => {
        setFlippedCards((prev) => ({
            ...prev,
            [id]: !prev[id], // Toggle the flipped state for the clicked card
        }));
    };

    return (
        <section id='works'>
            <h2 className="worksTitle">My Projects</h2>
            <span className="worksDesc">Here’s a showcase of some of the projects I’ve worked on, highlighting my skills and creativity. Explore my work below to get a glimpse of my expertise and passion for development.<br/></span>
            <div className="worksImgs">
                {flashcards.map((card) => (
                    <div
                        key={card.id}
                        className={`flashcard ${flippedCards[card.id] ? 'flipped' : ''}`}
                        onClick={() => handleFlip(card.id)}
                    >
                        <div className="flashcard-inner">
                            <div className="flashcard-front">
                                <img src={card.question} alt={`Question ${card.id}`} className="flashcard-img" />
                            </div>
                            <div className="flashcard-back">
                                <p>{card.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Works;
