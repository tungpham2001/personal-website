import React, { useState, useEffect } from "react";
import 'pretty-checkbox/src/pretty-checkbox.scss';
import { createUseStyles } from 'react-jss';
import axios from 'axios';
import RecentSong from './RecentSong';

import Lucidity from "./images/Lucidity.png";
import Lottie from "lottie-react";
import MG from "./images/MG.gif";
import ADGA from "./images/ADGA.jpg";
import PPS from "./images/PPS.jpg";
import TTK from "./images/TTK.jpg"
import SFSS from "./images/SFSS.png";
import Github from "./images/Github.png";
import Weather from "./images/Weather.JPG";
import QMIND from "./images/QMIND.jpg";

import Squat from './json/squat.json';
import Bench from './json/bench.json';
import Deadlift from './json/deadlift.json'
import League from "./json/league.json";
import Valorant from "./images/valorant.gif";
import Ninja from "./images/ninja.gif";


const useStyles = createUseStyles( {
    link: {
        color: 'cornflowerblue',
        textDecoration: 'underline',
    },
    highlight: {
        backgroundColor: 'cornflowerblue'
    },
    checkboxContainer: {
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
        gap: '80px',
        flexWrap: 'wrap',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
        fontSize: '40px',
        flexDirection: 'column',
        alignItems: 'center',
    },
    message: {
        marginTop: '20px',
        fontSize: '14px',
        textAlign: 'center',
        marginLeft: '70px', // Add left margin for spacing
        marginRight: '70px', // Add right margin for spacing
    },
    projectContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '50px',
    },
    projectBox: {
        width: '300px',
        height: '300px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '30px',
        marginBottom: '20px',
        marginRight: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        border: '2px solid black',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.3s',
        cursor: 'pointer',
        '&:hover': {
        transform: 'scale(1.05)',
        },
        color: 'cornflowerblue',
        fontWeight: 'bold',
    },
    projectName: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    projectOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        opacity: 0,
        transition: 'opacity 0.3s',
        '&:hover': {
            background: 'rgba(0, 0, 0, 0.7)',
            opacity: 1,
        },
    },
    projectDetails: {
        fontSize: '18px',
    },
    projectTechStack: {
        fontSize: '16px',
    },
    hobbyContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
        flexWrap: 'wrap',
    },
    hobbyEmoji: {
        fontSize: '80px',
        margin: '5px',
        margin: '0 100px',
        position: 'relative',
        '& hover $textBox': {
            display: 'block'
        },
        cursor: 'pointer',
    },
    textBox: {
        display: 'none',
        position: 'absolute',
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '8px',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        borderRadius: '4px',
        fontSize: '14px',
        animation: '$fadeIn 0.3s ease-in-out forwards',
    },
    hobbyDescription: {
        marginTop: '100px',
        textAlign: 'center',
        fontSize: '25px',
        padding: '10px',
        borderRadius: '30px',
    },
    '@keyframes fadeIn': {
        '0%': {
          opacity: 0,
          transform: 'translateY(20px)',
        },
        '100%': {
          opacity: 1,
          transform: 'translateY(0)',
        },
    },
    // new styles for mobile devices
    '@media (max-width: 600px)': {
        container: {
            fontSize: '16px',
            marginTop: '20px',
        },
        checkboxContainer: {
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '20px',
            marginBottom: '20px',
            gap: '30px',
        },
        projectContainer: {
            flexDirection: 'column',
            gap: '10px',
            marginTop: '20px',
        },
        projectBox: {
            display: 'flex',
            width: '200px',
            height: '200px',
            marginBottom: '10px',
        },
        projectName: {
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '5px',
        },
        projectTechStack: {
            fontSize: '16px',
        },
        projectOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            flexDirection: 'column',
            opacity: 0,
            transition: 'opacity 0.3s',
            '&:hover': {
                background: 'rgba(0, 0, 0, 0.7)',
                opacity: 1,
            },
        },
        projectDetails: {
            fontSize: '14px',
        },
        hobbyEmoji: {
            fontSize: '60px',
        },
        hobbyDescription: {
            marginTop: '50px',
            fontSize: '18px',
        },
        textBox: {
            display: 'none',
            position: 'absolute',
            top: '120%',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '8px',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            borderRadius: '4px',
            fontSize: '14px',
            animation: '$fadeIn 0.3s ease-in-out forwards',
        },
        '@keyframes fadeIn': {
            '0%': {
              opacity: 0,
              transform: 'translateY(20px)',
            },
            '100%': {
              opacity: 1,
              transform: 'translateY(0)',
            },
        },
    },
});

const WORK = [
    {
        name: "Lucidity",
        company: "Information Technology Capstone",
        location: "Kingston, ON",
        techStack: "Unity, C#",
        imageUrl: Lucidity,
    },
    {
        name: "Stress-Free Schedule Support",
        company: "Human-Computer Interaction Project",
        location: "Kingston, ON",
        techStack: "Python, HTML, CSS, JavaScript, SQL",
        imageUrl: SFSS,
    },
    {
        name: "Time to Kill",
        company: "Game Design Project",
        location: "Kingston, ON",
        techStack: "Unity, C#",
        imageUrl: TTK,
    },
    {
        name: "Web Development",
        company: "QMIND",
        location: "Kingston, ON",
        techStack: "HTML, CSS, JavaScript, React",
        imageUrl: QMIND,
    },
    {
        name: "Waste Wizard Classification",
        company: "QMIND x PPS",
        location: "Kingston, ON",
        techStack: "HTML, CSS, ActionScript, JavaScript, Java, Jupyter Notebook",
        imageUrl: PPS,
    },
    {
        name: "Marine Object Detection",
        company: "AGDA x QMIND",
        location: "Kingston, ON",
        techStack: "Python, Faster R-CNN, SSD, EfficientNet",
        imageUrl: ADGA,
    },
    {
        name: "Weather App",
        company: "Personal Project",
        location: "Kingston, ON",
        techStack: "HTML, CSS, JavaScript, React",
        imageUrl: Weather,
    },
    {
        name: "Schedule Tracker",
        company: "Personal Project",
        location: "Kingston, ON",
        techStack: "HTML, CSS, JavaScript",
        imageUrl: Github,
    },
];

const Body = () => {
    const classes = useStyles();

    const [aboutChecked, setAboutChecked] = useState(false);
    const [workChecked, setWorkChecked] = useState(false);
    const [unknownChecked, setUnknownChecked] = useState(false);
    const [personalChecked, setPersonalChecked] = useState(false);
    
    const [selectedHobby, setSelectedHobby] = useState(null);
    const [showRecentSong, setShowRecentSong] = useState(true);

    const handleHobbyClick = (index) => {
        setSelectedHobby(PERSONAL[index]);
    };

    const handleMusicIconClick = () => {
        setShowRecentSong(showRecentSong);
    };

    const ABOUT = 
    <h1>
        Tung Pham is a dedicated Computer Science graduate from <a className={classes.link} href="https://www.queensu.ca/">Queen's University</a>, 
        specializing in <span className={classes.highlight}>Software Design</span>. At the age of 21, Tung possesses a passion for Software Engineering and Web Development, 
        with a desire to excel in various fields, including Cyber Security, Quality Assurance, Data Science, Consulting, and FinTech. 
        With a solid foundation in Computer Science and an insatiable curiosity for emerging technologies, 
        he is well-versed in both frontend and backend development, showcasing proficiency across a diverse range of tech stacks. 
        Tung's technical expertise has been honed through previous experiences as a <span className={classes.highlight}>Web Developer</span> and <span className={classes.highlight}>Computer Vision Developer</span> at <a className={classes.link} href="https://www.qmind.ca/">QMIND</a>, 
        where he had successfully tackled complex challenges and contributed to innovative projects. Beyond technical experiences,
        Tung has also displayed exceptional leadership abilities through various positions such as <span className={classes.highlight}>Logistics Manager</span> at <a className={classes.link} href="https://www.cucai.ca/">CUCAI</a>, 
        and <span className={classes.highlight}>Logistics Chair</span> for <a className={classes.link} href="http://qcomputingorientation.ca">Queen's Computing Orientation</a>. 
        Tung learned the importance of organization and communication, thus he always wants to foster a collaborative and inclusive environment 
        for any role that he takes on. Driven by an unwavering passion for innovation and a strong desire to make a meaningful impact in the world of technology, 
        Tung is poised to thrive as a Software Engineer, Web Developer, or in various other technical roles. 
        With a comprehensive skill set, as well as the ability to work efficiently under pressure, and a versatile mindset, 
        Tung is primed to take on diverse challenges and contribute to the success of any team or organization.
    </h1>

const PERSONAL = [
    {
        emoji: '🏋️',
        description: (
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 0.33, display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '300px', height: '300px' }}>
                        <Lottie animationData={Squat} />
                        <h1>430lbs</h1>
                    </div>
                </div>
                <div style={{ flex: 0.33, display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '342px', height: '342px' }}>
                        <Lottie animationData={Bench} />
                        <h1>275lbs</h1>
                    </div>
                </div>
                <div style={{ flex: 0.33, display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '250px', height: '250px' }}>
                        <Lottie animationData={Deadlift} />
                        <h1>495lbs</h1>
                    </div>
                </div>
            </div>
        ),
    },
    { 
        emoji: '🎮', 
        description: (
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 0.33, display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '300px', height: '300px' }}>
                        <Lottie animationData={League} />
                        <h3>League of Legends</h3>
                    </div>
                </div>
                <div style={{ flex: 0.33, display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '342px', height: '342px' }}>
                        <img src={Valorant} alt="loading..." style={{ width: '322px', height: '300px' }}/>
                        <h3>VALORANT</h3>
                    </div>
                </div>
                <div style={{ flex: 0.33, display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '250px', height: '250px' }}>
                        <img src={Ninja} alt="loading..." style={{ width: '250px', height: '300px' }}/>
                        <h3>Ninja Storm 4</h3>
                    </div>
                </div>
            </div>
        ),
    },
    { 
        emoji: '🎵',
        description: (
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 0.33, display: 'flex', justifyContent: 'center' }}>
                <div>
                    {showRecentSong && <RecentSong />}
                </div>
                </div>
                <div style={{ flex: 0.33, display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '342px', height: '342px' }}>
                        <img src={Valorant} alt="loading..." style={{ width: '322px', height: '300px' }}/>
                        <h3>VALORANT</h3>
                    </div>
                </div>
                <div style={{ flex: 0.33, display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '250px', height: '250px' }}>
                        <img src={Ninja} alt="loading..." style={{ width: '250px', height: '300px' }}/>
                        <h3>Ninja Storm 4</h3>
                    </div>
                </div>
            </div>
        ),
    },
    { emoji: '🏀', description: 'Basketball' },
    { emoji: '🧳', description: 'Travelling' },
  ];

    const handleCheckboxChange = (checkboxName, isChecked) => {
        if (checkboxName === 'about') {
            setAboutChecked(isChecked);
        } else if (checkboxName === 'work') {
            setWorkChecked(isChecked);
        } else if (checkboxName === 'unknown') {
            setUnknownChecked(isChecked);
        } else if (checkboxName == 'personal') {
            setPersonalChecked(isChecked);
            setSelectedHobby(null);
        }
        };

    return (
    <div className={classes.container}>
        <div className={classes.checkboxContainer}>
            <div className={`${classes.checkbox} pretty p-switch p-fill`}>
                <input type="checkbox" 
                checked={aboutChecked} 
                onChange={ (e) => handleCheckboxChange('about', e.target.checked)} />
                <div className="state p-primary">
                    <label>ABOUT</label>
                </div>
            </div>
            <div className={`${classes.checkbox} pretty p-switch p-fill`}>
                <input type="checkbox"
                checked={workChecked}
                onChange={(e) => handleCheckboxChange('work', e.target.checked)} />
                <div className="state p-warning">
                    <label>WORK</label>
                </div>
            </div>
            <div className={`${classes.checkbox} pretty p-switch p-fill`}>
                <input type="checkbox"
                checked={unknownChecked}
                onChange={(e) => handleCheckboxChange('unknown', e.target.checked)} />
                <div className="state p-danger">
                    <label>???</label>
                </div>
            </div>
            <div className={`${classes.checkbox} pretty p-switch p-fill`}>
                <input type="checkbox"
                checked={personalChecked}
                onChange={(e) => handleCheckboxChange('personal', e.target.checked)} />
                <div className="state p-success">
                    <label>PERSONAL INTERESTS</label>
                </div>
            </div>
        </div>
        <div className={classes.message}>
            {aboutChecked && <div className={classes.message}>{ABOUT}</div>}
            {workChecked && (
            <div className={classes.projectContainer}>
                {WORK.map((project, index) => (
                <div className={classes.projectBox} key={index} style={{ backgroundImage: `url(${project.imageUrl})` }}>
                    <div className={classes.projectOverlay}>
                        <div className={classes.projectDetails}>
                            <div className={classes.projectName}>{project.name}</div>
                            <div className={classes.projectCompany}>{project.company}</div>
                            <div className={classes.projectLocation}>{project.location}</div>
                            <div className={classes.projectTechStack}>{project.techStack}</div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            )}
            {unknownChecked && (
                <style>
                {`
                    body {
                        background: url(${MG}) center/cover fixed no-repeat;
                        color: red;
                    }
                `}
                </style>
            )}
            {personalChecked && (
            <div className={classes.hobbyContainer}>
                {PERSONAL.map((hobby, index) => (
                <span 
                    className={classes.hobbyEmoji} 
                    key={index} 
                    onClick={() => handleHobbyClick(index)}
                >
                    {hobby.emoji}
                    {selectedHobby === PERSONAL[index] && (
                        <span className={`${classes.textBox}`}>
                            {PERSONAL[index].description}
                        </span>
                    )}
                </span>
                ))}
            </div>  
            )}
            {selectedHobby && (
                <div className={classes.hobbyDescription}>
                    {selectedHobby.description}
                </div>
            )}
        </div>
    </div>
    );
};
  
export default Body;