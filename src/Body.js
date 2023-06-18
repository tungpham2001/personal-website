import React, { useState, useEffect } from "react";
import 'pretty-checkbox/src/pretty-checkbox.scss';
import { createUseStyles } from 'react-jss';
import Lucidity from "./images/Lucidity.png";
import MG from "./images/MG.gif";

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
});

const WORK = [
    {
        name: "Project 1",
        company: "Company 1",
        location: "Location 1",
        techStack: "Tech Stack 1",
        imageUrl: Lucidity,
    },
    {
        name: "Project 2",
        company: "Company 2",
        location: "Location 2",
        techStack: "Tech Stack 2",
        imageUrl: "https://example.com/project2-image.jpg",
    },
    {
        name: "Project 3",
        company: "Company 3",
        location: "Location 3",
        techStack: "Tech Stack 3",
        imageUrl: "https://example.com/project2-image.jpg",
    },
    {
        name: "Project 4",
        company: "Company 4",
        location: "Location 4",
        techStack: "Tech Stack 4",
        imageUrl: "https://example.com/project2-image.jpg",
    },
    {
        name: "Project 5",
        company: "Company 5",
        location: "Location 5",
        techStack: "Tech Stack 5",
        imageUrl: "https://example.com/project2-image.jpg",
    },
    {
        name: "Project 6",
        company: "Company 6",
        location: "Location 6",
        techStack: "Tech Stack 6",
        imageUrl: "https://example.com/project2-image.jpg",
    },
];
const Body = () => {
    const classes = useStyles();
    const [aboutChecked, setAboutChecked] = useState(false);
    const [workChecked, setWorkChecked] = useState(false);
    const [unknownChecked, setUnknownChecked] = useState(false);
    const [personalChecked, setPersonalChecked] = useState(false);

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

    const handleCheckboxChange = (checkboxName, isChecked) => {
        if (checkboxName === 'about') {
            setAboutChecked(isChecked);
        } else if (checkboxName === 'work') {
            setWorkChecked(isChecked);
        } else if (checkboxName === 'unknown') {
            setUnknownChecked(isChecked);
        } else if (checkboxName == 'personal') {
            setPersonalChecked(isChecked);
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
        </div>
    </div>
    );
};
  
  export default Body;