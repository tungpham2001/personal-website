import React, { useState } from "react";
import 'pretty-checkbox/src/pretty-checkbox.scss';
import { createUseStyles } from 'react-jss';
import Lucidity from "./images/Lucidity.png";

const useStyles = createUseStyles( {
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
        fontSize: '40px',
        textAlign: 'center'
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
        border: '1px solid black',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.3s',
        cursor: 'pointer',
        '&:hover': {
        transform: 'scale(1.05)',
        },
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
        transition: 'opacity 0.3s',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        fontSize: '18px',
        opacity: 0,
        transition: 'opacity 0.3s',
        '&:hover': {
            opacity: 1,
        },
    },
    projectDetails: {
        fontSize: '18px',
        marginBottom: '5px',
        opacity: 1,
        transition: 'opacity 0.3s',
        '&: hover': {
            opacity: 0,
        },
    },
    projectTechStack: {
        fontSize: '16px',
    },
});

const ABOUT = "will add more here";

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

    const handleCheckboxChange = (checkboxName, isChecked) => {
        if (checkboxName === 'about') {
            setAboutChecked(isChecked);
        } else if (checkboxName === 'work') {
            setWorkChecked(isChecked);
        } else if (checkboxName === 'unknown') {
            setUnknownChecked(isChecked);
        }
        };
    
    return (
    <div className={classes.container}>
        <div className="checkbox-container">
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
            {unknownChecked && (<style>{`body { background-color: yellow; }`}</style>)}
        </div>
    </div>
    );
};
  
  export default Body;