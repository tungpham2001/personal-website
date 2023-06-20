import React, { useState, useEffect, useRef } from "react";
import 'pretty-checkbox/src/pretty-checkbox.scss';
import { createUseStyles } from 'react-jss';
import axios from 'axios';
import RecentSong from './RecentSong';
import { TypeAnimation } from "react-type-animation";

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
import Orientation from "./images/orientation.png";
import CUCAI from "./images/cucai.jpg";
import Computing from "./images/computing.png";

import Squat from './json/squat.json';
import Bench from './json/bench.json';
import Deadlift from './json/deadlift.json'
import League from "./json/league.json";
import Valorant from "./images/valorant.gif";
import Ninja from "./images/ninja.gif";
import Paris from "./images/paris.gif";
import Pisa from "./images/pisa.gif";
import Sydney from "./images/sydney.gif";
import Shibuya from "./images/shibuya.gif";


const useStyles = createUseStyles( {
    travelGrid: {
        paddingLeft: '2rem',
        paddingRight: '2rem',
    },
    subheading: {
        fontSize: '25px',
        fontWeight: 'lighter',
        paddingLeft: '2rem',
        paddingTop: '5rem',
    },
    subtitle: {
        paddingBottom: '2rem',
    },
    link: {
        color: 'cornflowerblue',
        textDecoration: 'underline',
        transition: 'opacity 1s',
        '&:hover': {
            backgroundColor: 'lightgreen',
        },

    },
    highlight: {
        backgroundColor: 'cornflowerblue'
    },
    checkboxContainer: {
        padding: '1rem',
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
    projectDescriptionContent: {
        padding: '1rem',
    },
    projectName: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    projectSummary: {
        fontSize: '20px',
        fontWeight: 'bolder',
        fontFamily: 'Poppins, monospace',
        color: 'lightcoral',
        padding: '0.3rem',
    },
    projectLocation: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '5px',
        padding: '0.5rem',
    },
    projectDescription: {
        fontSize: '20px',
        paddingTop: '1rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',
    },
    projectBulletPoints: {
        fontSize: '22px',
        padding: '0.5rem',
        color: 'cornflowerblue',
        fontWeight: 'bolder',
    },
    projectLink: {
        fontFamily: 'Poppins, monospace',
        fontSize: '16px',
        fontWeight: 'bolder',
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
        fontSize: '20px',
        color: 'cornflowerblue',
        fontWeight: 'bolder',
        padding: '0.3rem',
    },
    descriptionBox: {
        border: '2px solid black',
        width: '57%',
        borderRadius: '40px',
        margin: '0 auto', // Center the box horizontally
        background: 'linear-gradient(to right, lightblue, lightgreen)',
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
            display: 'block',
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

const Body = () => {
    const classes = useStyles();

    const [aboutChecked, setAboutChecked] = useState(false);
    const [workChecked, setWorkChecked] = useState(false);
    const [unknownChecked, setUnknownChecked] = useState(false);
    const [personalChecked, setPersonalChecked] = useState(false);
    
    const [selectedHobby, setSelectedHobby] = useState(null);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
    const [showRecentSong, setShowRecentSong] = useState(true);
    const projectContainerRef = useRef(null);
    const descriptionBoxRef = useRef(null);

    const handleHobbyClick = (index) => {
        setSelectedHobby(PERSONAL[index]);
    };

    const handleProjectClick = (index) => {
        setSelectedProjectIndex(index);
    };

    useEffect(() => {
        if (selectedProjectIndex !== null && descriptionBoxRef.current) {
          descriptionBoxRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [selectedProjectIndex]);

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

const WORK = [
    {
        name: "Lucidity",
        company: "Information Technology Capstone",
        location: "Kingston, ON",
        techStack: "Unity, C#",
        imageUrl: Lucidity,
        descList: {
            summary: "Full Stack Engineer - Generating a 3D Navigable Map from a 2D Fantasy World",
            description: "Lucidity is a tool that helps you explore your imagination and "+
            "share it with others. Lucidity provides you with all the tools you need to " +
            "build a 2D fantasy map and then turn it into a 3D navigable world! " +
            "Whether you need a better way to describe to your players what they are seeing " +
            "in your next Dungeons and Dragons game or you are doing some world building for " +
            "a new fantasy novel, Lucidity is here to help you every step of the way! " +
            "Lucidity is only in its Beta launch and with that, we get that some things " +
            "are a bit buggy and some features are missing. We'd love to hear feedback " +
            "from you so we can continue to make Lucidity better and better!",
            bulletPoints: {
                bullets:
                <ul>
                    <li className={classes.projectBulletPoints}>
                        Responsible for developing gameplay mechanics using C# and Unity, collaborating with the art team for asset integration
                    </li>
                    <li className={classes.projectBulletPoints}>
                        Utilize Unity's tools and features to enhance visuals, audio, and performance
                    </li>
                    <li className={classes.projectBulletPoints}>
                        Achieve milestones including the initial prototype, advanced feature implementation, and final testing and preparation for distribution
                    </li>
                </ul>,
            },
            link: "https://www.luciditymap.com/",
        }
    },
    {
        name: "Stress-Free Schedule Support",
        company: "Human-Computer Interaction Project",
        location: "Kingston, ON",
        techStack: "Python, HTML, CSS, JavaScript, SQL",
        imageUrl: SFSS,
        descList: {
            summary: "Full Stack Engineer - Course Recommendation System and Timetable Builder",
            description: "Stress-Free Schedule Support (SFSS) provide students " +
            "an interactive and intuitive medium through which they can plan their " +
            "course schedules in a tailored way that takes their needs and desires " +
            "into account. Our work focuses on user experience through making " +
            "this formerly stressful process satisfying, accessible, empowering, " +
            "rewarding and most importantly, easy to use.",
            bulletPoints: {
                bullets:
                <ul>
                    <li className={classes.projectBulletPoints}>
                        Utilized SQL, Python and JavaScript for robust backend development and database management;
                        implemented HTML/CSS for frontend development, ensuring an intuitive and visually appealing UX/UI
                    </li>
                    <li className={classes.projectBulletPoints}>
                        Tailored the system to individual needs and desires, relieving the stress with scheduling
                    </li>
                    <li className={classes.projectBulletPoints}>
                        Enhanced accessibility and usability for users by simplifying system configuration and minimizing downtime
                    </li>
                </ul>,
            },
            link: "https://github.com/beckydvn/stress-free-schedule-support",
        }
    },
    {
        name: "Time to Kill",
        company: "Game Design Project",
        location: "Kingston, ON",
        techStack: "Unity, C#",
        imageUrl: TTK,
        descList: {
            summary: "Unity Developer - 2D Top Down RPG Single Player Game",
            description: "Time to Kill is a thrilling 2D top down RPG game " +
            "where the player sets out on a journey to save the Earth in time " +
            "from evil alien invaders. The player must traverse different planets, " +
            "defeat all the aliens at the end of each level in order to beat the game. " +
            "But unlike other RPGs, the player is not given the weapon to defeat " +
            "the final boss so easily. The player must solve puzzles that will reward " +
            "them with combo moves that they can use against the final boss. " +
            "Each planet (or level) is split into two parts: an Overworld; " +
            "and a Final Boss fight. In the overworld, the player runs around and " +
            "solves puzzles, as well as overcomes various obstacles. " +
            "As the player navigates the Overworld, they must be aware because " +
            "TIME IS TICKING. The player has a total amount of time to clear each planet, " +
            "including the boss fight at the end. If time runs out at any point, " +
            "or the player didn't learn the combo move quickly enough and is " +
            "defeated by one of the bosses, then the player will lose the game. " +
            "There is NO TIME TO KILL, but it is certainly TIME TO KILL " +
            "if you wish to save your home planet. Try Time to Kill today and let " +
            "me know what you think.",
            bulletPoints: {
                bullets:
                <ul>
                    <li className={classes.projectBulletPoints}>
                        Utilized C# in Unity framework to implement gameplay mechanics, puzzles and alien encounters
                    </li>
                    <li className={classes.projectBulletPoints}>
                        Incorporated time limits to create urgency and enhance gameplay immersion, designed combo moves
                        for immersive levels with distinct atmospheres and challenges
                    </li>
                    <li className={classes.projectBulletPoints}>
                        Coordinated asset integration, including graphics and audio, refined mechanics and balanced difficulty
                    </li>
                </ul>,
            },
            link: "https://tungpham2001.github.io/",
        }
    },
    {
        name: "Web Development",
        company: "QMIND",
        location: "Kingston, ON",
        techStack: "HTML, CSS, JavaScript, React",
        imageUrl: QMIND,
        descList: {
            summary: "Web Development Manager + Web Developer - Frontend Project",
            description: "The Web Development Manager position at QMIND from September 2021 " +
            "to May 2023 involved overseeing the club's website. The website underwent a remarkable " +
            "transformation in overall engagement. " +
            "Throughout the tenure, this position prioritized professionalism " +
            "and delivered high-quality web development solutions. " +
            "Tung played a key role in driving engagement, " +
            "by leveraging a diverse range of technologies and frameworks, " +
            "and improving communication.",
            bulletPoints: {
                bullets:
                <ul>
                    <li className={classes.projectBulletPoints}>
                        Revitalized the club website by implementing HTML, CSS and JavaScript on React framework, resulting in a remarkable 200%
                    surge in overall engagement
                    </li>
                    <li className={classes.projectBulletPoints}>
                        Developed and integrated React Mailchimp to facilitate newsletter subscription and unsubscribe options for members
                    </li>
                    <li className={classes.projectBulletPoints}>
                        Leveraged Firebase Authentication and Firebase Database to construct a members-only resource hub, providing exclusive access
                    to valuable resources
                    </li>
                </ul>,
            },
            link: "https://www.qmind.ca/",
        }
    },
    {
        name: "Waste Wizard Classification",
        company: "QMIND x PPS",
        location: "Kingston, ON",
        techStack: "HTML, CSS, ActionScript, JavaScript, Java, Jupyter Notebook",
        imageUrl: PPS,
        descList: {
            summary: "Computer Vision Developer - Recycling Waste Classification",
            description: "Queen's Facilities (formerly Physical Plant Services or PPS) proudly builds, " +
            "maintains and improves campus facilities at Queen's University to create a safe environment " +
            "for students to thrive in and excel in their careers. QMIND x PPS from September 2020 " +
            "to May 2021 involved overseeing the recycling and waste discarding process. " +
            "The gradual growth of solid waste in the urban area has been and is becoming a " +
            "great concern for human health, and could result in environmental pollution and " +
            "may be hazardous to humanity if not properly disposed. With that being said, " +
            "an advanced waste management system is necessary to manage a variety of waste " +
            "materials. By implementing a Convolutional Neural Network, along with " +
            "cutting-edge computer vision technology, the newly AI-empowered waste " +
            "classification process was a big success.",
            bulletPoints: {
                bullets:
                <ul>
                    <li className={classes.projectBulletPoints}>
                    Utilized and upgraded an EfficientNet B3 TensorFlow Keras model to distinguish recycle items
                    </li>
                    <li className={classes.projectBulletPoints}>
                    Attained 87% accuracy in 2D Object Classification, by training a Deep Learning Convolutional Neural Network on 15,000+ images
                    </li>
                    <li className={classes.projectBulletPoints}>
                    Utilized Python with NumPy and Pandas libraries to train and test the Lite model, as well as HTML/CSS and JavaScript
                    for a web appplication on Android Studio
                    </li>
                </ul>,
            },
            link: "https://www.qmind.ca/static/media/Android%20Waste%20Collection.6eeb1c6107655e7e83dd.pdf",
        }
    },
    {
        name: "Marine Object Detection",
        company: "AGDA x QMIND",
        location: "Kingston, ON",
        techStack: "Python, Faster R-CNN, SSD, CenterNet",
        imageUrl: ADGA,
        descList: {
            summary: "Computer Vision Developer - Marine Object Detection",
            description: "QMIND was tasked by a cybersecurity and space intelligence " +
            "consulting firm, The ADGA Group, to perform an analysis between diverse " +
            "object detection algorithms. Recently, ADGA has developed a machine learning " +
            "platform called Amari to detect characteristics near land and at sea, " +
            "all from earth observation datasets. This platform can be leveraged to " +
            "detect marine objects, oil spills or icebergs, aid in analyzing current " +
            "port capacity status, and classify agriculture. For research, the team " +
            "focused on detecting marine objects near ports and at sea. " +
            "Using the TensorFlow Object Detection API, the team created an object detector " +
            "that can be easily fitted multiple algorithms to output a trained model. " +
            "Upon completion of training and testing, the models created by the detector " +
            "were comparatively assessed by the team and a recommendation was provided " +
            "to the client.",
            bulletPoints: {
                bullets:
                <ul>
                    <li className={classes.projectBulletPoints}>
                    Adapted and leveraged Faster R-CNN, SSD and CenterNet models for marine object detection
                    </li>
                    <li className={classes.projectBulletPoints}>
                    Accomplished 84% accuracy in 2D Object Classification with Faster R-CNN, trained with a database of 7,000+ images provided by
                    ADGA
                    </li>
                    <li className={classes.projectBulletPoints}>
                    Utilized Python with NumPy and Pandas libraries to train and test the models
                    </li>
                </ul>,
            },
            link: "https://www.qmind.ca/static/media/qmind-project-lookbook-2021.6708d82ffe4bf8507108.pdf",
        }
    },
    {
        name: "University Teaching Assistant",
        company: "Queen's School of Computing",
        location: "Kingston, ON",
        techStack: "Python, Java, Data Structures, Algorithms",
        imageUrl: Computing,
        descList: {
            summary: "Undergraduate Teaching Assistant - Education and Teaching",
            description: "The School of Computing at Queen’s University " +
            "invites applications from suitably qualified candidates interested " +
            "in teaching courses shown below. The University invites applications " +
            "from all qualified individuals. Queen’s University is committed to " +
            "employment equity and diversity in the workplace and welcomes " +
            "applications from women, visible minorities, aboriginal people, " +
            "persons with disabilities, and persons of any sexual orientation or " +
            "gender identity. All qualified candidates are encouraged to apply; " +
            "however, Canadians and permanent residents will be given priority.",
            bulletPoints: {
                bullets:
                <ul>
                    <uL>
                        <h3>CISC 235: Data Structure</h3>
                        <li className={classes.projectBulletPoints}>
                        Conducted weekly synchronous Python Data Structure tutorial sessions for 30 students, provided feedback on assessments and exams, and offered additional support outside of lecture time
                        </li>
                        <li className={classes.projectBulletPoints}>
                        Assessed students' proficiency in Time Complexity, Stacks and Queues, Heap Tables, Trees and Graphs
                        </li>
                        <li className={classes.projectBulletPoints}>
                        Achieved a 12% increase in the overall class average compared to previous years
                        </li>
                    </uL>
                    <uL>
                        <h3>CISC 203: Discrete Mathematics for Computing II</h3>
                        <li className={classes.projectBulletPoints}>
                        Assisted 323 students weekly with Proof Methods and Combinatorics
                        </li>
                        <li className={classes.projectBulletPoints}>
                        Implemented Latex and Overleaf for Discrete Probability, Recurrence Relations & Graph and Trees
                        </li>
                    </uL>
                    <uL>
                        <h3>CISC 124: Introduction to Java II</h3>
                        <li className={classes.projectBulletPoints}>
                        Conducted comprehensive assessments of students’ proficiency in Java Object-Oriented Design, Architecture and Programming                        </li>
                        <li className={classes.projectBulletPoints}>
                        Managed weekly evaluations of 358 students on Python materials and related technologies, ensuring accurate grading and prompt feedback
                        </li>
                        <li className={classes.projectBulletPoints}>
                        Boosted overall class average by an impressive 20%, surpassing results from previous years                        </li>
                    </uL>
                    <uL>
                        <h3>CISC 121: Introduction to Python I</h3>
                        <li className={classes.projectBulletPoints}>
                        Assisted 358 students weekly with Python materials and related technologies and implementation                        </li>
                        <li className={classes.projectBulletPoints}>
                        Assist the professor with Designated Lectures, Discussion Forum and Office Hours                        </li>
                        <li className={classes.projectBulletPoints}>
                        Grade assignments + course evaluations                        </li>
                    </uL>
                </ul>,
            },
            link: "https://www.cs.queensu.ca/",
        }
    },
    {
        name: "WeatherNow",
        company: "Personal Project",
        location: "Kingston, ON",
        techStack: "HTML, CSS, JavaScript, React",
        imageUrl: Weather,
        descList: {
            summary: "Frontend Developer - Weather Forecast App",
            description: "WeatherNow is a personal project Tung developed that " +
            "provides users with accurate and up-to-date weather information " +
            "based on their location input. The app leverages user-friendly " +
            "functionality and utilizes a public database from the " +
            "Open Map Weather Organization to retrieve the necessary weather data. " +
            "By integrating location-based services, users can conveniently " +
            "input their desired location and obtain relevant weather information " +
            "in real-time. The app's intuitive interface allows for a " +
            "seamless user experience, ensuring easy access to the weather " +
            "data they seek. The core functionality of WeatherNow relies on " +
            "retrieving weather information from the reliable and comprehensive " +
            "database provided by the Open Map Weather Organization. " +
            "This ensures that users receive accurate and dependable weather updates, " +
            "enabling them to plan their activities accordingly.",
            bulletPoints: {
                bullets:
                <ul>
                    <li className={classes.projectBulletPoints}>
                    Developed a responsive weather application utilizing HTML/CSS and JavaScript to generate accurate weather information based
                    on user location input
                    </li>
                    <li className={classes.projectBulletPoints}>
                    Incorporated intuitive UX/UI features to enhance user experience
                    </li>
                </ul>,
            },
            link: "https://github.com/tungpham2001/Weather-App",
        }
    },
    {
        name: "ScheduleChecked",
        company: "Personal Project",
        location: "Kingston, ON",
        techStack: "HTML, CSS, JavaScript, React",
        imageUrl: Github,
        descList: {
            summary: "React Developer - Schedule Tracking and Management System",
            description: "ScheduleChecked is a personal project which offered users " +
            "an intuitive and efficient online schedule and task management platform. " +
            "This application empowers users to seamlessly organize their tasks, " +
            "add or remove items from their schedule, and mark tasks as completed. " +
            "With ScheduleChecked, users can create a personalized schedule by easily " +
            "adding tasks, setting deadlines, and prioritizing their activities. " +
            "The user-friendly interface ensures a smooth task management experience, " +
            "enabling users to stay organized and focused on their goals. " +
            "An essential aspect of ScheduleChecked is its robust data management system. " +
            "All tasks entered by the user are securely saved and stored, " +
            "providing users with the flexibility to access their schedule " +
            "and task list at any time and from any device.",
            bulletPoints: {
                bullets:
                <ul>
                    <li className={classes.projectBulletPoints}>
                    Developed an intuitive platform using JavaScript, HTML, CSS on React framework 
                    to enable users to organize their schedules effectively
                    </li>
                    <li className={classes.projectBulletPoints}>
                    Implemented functionality for users to add, remove, and prioritize tasks, as for a seamless task management experience
                    </li>
                    <li className={classes.projectBulletPoints}>
                    Enabled users to access their schedule and task list from any device, allowing them to review, update, and track their tasks conveniently
                    </li>
                </ul>,
            },
            link: "https://github.com/tungpham2001/SCHEDULE_TRACKER",
        }
    },
    {
        name: "The Canadian Undergraduate Conference on AI (CUCAI)",
        company: "QMIND",
        location: "Kingston, ON",
        techStack: "Microsoft Office Suite, Zoom",
        imageUrl: CUCAI,
        descList: {
            summary: "Logistics Manager - Event Planning and Hospitality Services",
            description: "Designed to connect passionate and talented undergraduate students " +
            "with industry trailblazers, the Canadian Undergraduate Conference on Artificial " +
            "Intelligence (CUCAI) is a national-scale conference aimed to inspire the future " +
            "leaders of AI. 🍿 Get a glimpse into the future of AI as students showcase their cutting-edge AI projects at the AI project showcase. 🤖 Explore the latest advancements and immerse yourself in interactive workshops presented by leading sponsor companies. 🚀 Don't miss this opportunity to network with top AI professionals and discover the latest innovations shaping our world.",
            bulletPoints: {
                bullets:
                <ul>
                    <li className={classes.projectBulletPoints}>
                    Led transition to in person conference, planned and scheduled events adhering to the compliance standards
                    </li>
                    <li className={classes.projectBulletPoints}>
                    Planned and scheduled inspections, meetings, equipment testing, and regular venue maintenance for 500+ delegates                    </li>
                    <li className={classes.projectBulletPoints}>
                    Oversaw venue contract, as well as documentations regarding transportations, metrics, health and safety, and food                    </li>
                </ul>,
            },
            link: "https://www.cucai.ca/",
        }
    },
    {
        name: "Queen's Computing Orientation Committee",
        company: "Queen's School of Computing",
        location: "Kingston, ON",
        techStack: "Microsoft Office Suite, Zoom",
        imageUrl: Orientation,
        descList: {
            summary: "Logistics Chair - Event Planning and Hospitality Services",
            description: "Welcome to the exciting world of Computing at Queen's University! " +
            "Prepare for an unforgettable journey beyond coding and algorithms. " +
            "This is a chance to embrace the endless possibilities that await as you " +
            "begin this exciting new chapter. Celebrating our twentieth anniversary " +
            "this year, Computing Orientation is an experience that is bound " +
            "to stick with you far beyond your first year. " +
            "Discover a world of opportunities as a Computing student at Queen's University, " +
            "where engaging events and activities await you. " +
            "Build lasting connections with fellow students and orientation " +
            "leaders as we eagerly anticipate the beginning of your exciting journey. " +
            "Get ready to dive into the world of Computing at Queen's University. " +
            "We can't wait to get started!",
            bulletPoints: {
                bullets:
                <ul>
                    <li className={classes.projectBulletPoints}>
                    Oversaw the planning process for Computing Orientation Week 2021, re-designed Orientation 2021 
                    to be delivered and attended through a virtual platform; overlooked all deadlines and regulations for all events
                    </li>
                    <li className={classes.projectBulletPoints}>
                    Oversaw the planning process for Computing Orientation Week 2021, re-designed Orientation 2021 
                    to be delivered and attended through a virtual platform
                    </li>
                    <li className={classes.projectBulletPoints}>
                    Completed training in AccessForward, Positive Space, ORT Summer Training 101, Human Rights 101, and LIT Training
                    </li>
                </ul>,
            },
            link: "http://qcomputingorientation.ca/",
        }
    },
];

    const PERSONAL = [
        {
            emoji: '🏋️',
            description: (
                <div style={{ display: 'flex' }}>
                    <h1 className={classes.subheading} style={{ flex: 0.25, display: 'flex', justifyContent: 'center' }}>
                        <TypeAnimation
                            sequence={[
                                "Tung is also a Powerbuilder, a mix of Powerlifting and Bodybuilder. Here are his SBD stats:"
                            ]}
                            style={{ fontSize: '1em' }}
                            speed={80}
                        />
                    </h1>
                    <div style={{ flex: 0.33, display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '300px', height: '300px' }}>
                            <Lottie animationData={Squat} />
                            <h1 className={classes.subtitle}>430lbs</h1>
                        </div>
                    </div>
                    <div style={{ flex: 0.33, display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '342px', height: '342px' }}>
                            <Lottie animationData={Bench} />
                            <h1 className={classes.subtitle}>275lbs</h1>
                        </div>
                    </div>
                    <div style={{ flex: 0.33, display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '250px', height: '250px' }}>
                            <Lottie animationData={Deadlift} />
                            <h1 className={classes.subtitle}>495lbs</h1>
                        </div>
                    </div>
                </div>
            ),
        },
        { 
            emoji: '🎮', 
            description: (
                <div style={{ display: 'flex' }}>
                    <h2 className={classes.subheading} style={{ flex: 0.20, display: 'flex', justifyContent: 'center' }}>
                        <TypeAnimation
                            sequence={[
                                "Some games that Tung has been playing recently:"
                            ]}
                            style={{ fontSize: '1em' }}
                            speed={80}
                        />
                    </h2>
                    <div style={{ flex: 0.33, display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '300px', height: '300px' }}>
                            <Lottie animationData={League} />
                            <h3 className={classes.subtitle}>League of Legends</h3>
                        </div>
                    </div>
                    <div style={{ flex: 0.33, display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '330px', height: '330px' }}>
                            <img src={Valorant} alt="loading..." style={{ width: '322px', height: '300px' }}/>
                            <h3 className={classes.subtitle}>VALORANT</h3>
                        </div>
                    </div>
                    <div style={{ flex: 0.33, display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '250px', height: '250px' }}>
                            <img src={Ninja} alt="loading..." style={{ width: '250px', height: '300px' }}/>
                            <h3 className={classes.subtitle}>Ninja Storm 4</h3>
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
                    <div style={{ flex: 0.57, display: 'flex', justifyContent: 'center' }}>
                        <TypeAnimation
                            sequence={[
                                "Tung's taste in music spans across various genres, "+
                                "with a diverse appreciation for captivating melodies "+
                                "and rhythms. Among his favorite genres, "+
                                "EDM holds a special place, particularly Progressive House artists "+
                                "like Martin Garrix and Avicii. The uplifting beats and euphoric "+
                                "vibes resonate deeply with Tung, creating an immersive and exhilarating experience. "+
                                "In addition to EDM, Tung finds solace in the soulful tunes of Korean RnB, "+
                                "with a particular fondness for artists such as Colde and Zion T. "+
                                "Their soul-stirring vocals and heartfelt lyrics evoke a range of emotions, "+
                                "drawing him into a world of introspection. "+
                                "If you happen to share a similar affinity for these music genres and artists, "+
                                "Tung looks forward to connecting with you on Spotify. "+
                                "Feel free to drop him a follow to discover more enthralling tracks, "+
                                "and share in the joy of music."
                            ]}
                            style={{ fontSize: '1em' }}
                            speed={80}
                        />
                    </div>
                </div>
            ),
        },
        // { emoji: '🛏️', description: 'Interior Design' },
        { 
            emoji: '🧳', 
            description: (
                <div style={{ display: 'flex' }}>
                    <h3 className={classes.subheading} style={{ flex: 0.25, display: 'flex', justifyContent: 'center' }}>
                        <TypeAnimation
                            sequence={[
                                "Tung's current travel bucket list:"
                            ]}
                            style={{ fontSize: '1em' }}
                            speed={80}
                        />
                    </h3>
                    <div className={classes.travelGrid} style={{ flex: 0.20, display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '300px', height: '300px' }}>
                            <img src={Paris} alt="loading..." style={{ width: '300px', height: '300px' }}/>
                            <h3 className={classes.subtitle}>France</h3>
                        </div>
                    </div>
                    <div className={classes.travelGrid} style={{ flex: 0.20, display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '300px', height: '300px' }}>
                            <img src={Pisa} alt="loading..." style={{ width: '300px', height: '300px' }}/>
                            <h3 className={classes.subtitle}>Italy</h3>
                        </div>
                    </div>
                    <div className={classes.travelGrid} style={{ flex: 0.20, display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '300px', height: '300px' }}>
                            <img src={Sydney} alt="loading..." style={{ width: '300px', height: '300px' }}/>
                            <h3 className={classes.subtitle}>Australia</h3>
                        </div>
                    </div>
                    <div className={classes.travelGrid} style={{ flex: 0.20, display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '300px', height: '300px' }}>
                            <img src={Shibuya} alt="loading..." style={{ width: '300px', height: '300px' }}/>
                            <h3 className={classes.subtitle}>Japan</h3>
                        </div>
                    </div>
                </div>
            ),
        },
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
            <div>
                {selectedProjectIndex !== null && (
                <div className={classes.descriptionBox} ref={descriptionBoxRef}>
                    <div className={classes.projectDescriptionContent}>
                        <div className={classes.projectName}>
                            {WORK[selectedProjectIndex].name}
                        </div>
                        <div className={classes.projectLocation}>
                            {WORK[selectedProjectIndex].location}
                        </div>
                        <div className={classes.projectSummary}>
                            {WORK[selectedProjectIndex].descList.summary}
                        </div>
                        <div className={classes.projectTechStack}>
                            {WORK[selectedProjectIndex].techStack}
                        </div>
                        <div className={classes.projectDescription}>
                            {WORK[selectedProjectIndex].descList.description}
                        </div>
                        <div className={classes.projectBulletPoints}>
                            {WORK[selectedProjectIndex].descList.bulletPoints.bullets}
                        </div>
                        <div className={classes.projectLink}>
                            <p>
                                Click here to learn more about <a className={classes.link} href={WORK[selectedProjectIndex].descList.link}>
                                    {WORK[selectedProjectIndex].name}
                                </a>
                            </p>  
                        </div>
                        <div className={classes.projectLink}>
                            <p>Scroll down to check out more projects!</p>
                        </div>
                    </div>
                </div>
                )}
                <div className={classes.projectContainer} ref={projectContainerRef}>
                    {WORK.map((project, index) => (
                    <div 
                        className={classes.projectBox} 
                        key={index} 
                        style={{ backgroundImage: `url(${project.imageUrl})` }}
                        onClick={() => handleProjectClick(index)}
                    >
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