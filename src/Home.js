import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    animation: {
        fontSize: 18,
        fontFamily: 'Inconsolata',
    },
    logo: {
        fontSize: 55,
        background: 'linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        backgroundSize: '200%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: '$gradientAnimation 8s ease infinite',
    },
    '@keyframes gradientAnimation': {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' },
    },
    content: {
        marginLeft: 50,
        marginRight: 50
    },
    bio: {
        marginTop: 30
    },
    icon: {
        marginRight: 20,
        marginTop: 30,
        transition: 'transform 1s ease',
        '&:hover': {
            transform: 'scale(1.2) rotate(360deg)',
        },
    },
    iconContainer: {
        display: 'flex',
    },
    description: {
        position: 'absolute',
        fontSize: '1em',
        marginTop: '0.5em',
        opacity: 0,
        visibility: 'hidden',
        transition: 'opacity 0.3s ease',
    },
    iconWrapper: {
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer',
        '&:hover $description': {
          opacity: 1,
          visibility: 'visible',
        },
        fontSize: '15px',
        fontWeight: 'bolder',
        color: 'red',
    },
    largeIcon: {
        marginRight: 20,
        marginTop: 27,
        transition: 'transform 1s ease',
        '&:hover': {
            transform: 'scale(1.2) rotate(360deg)',
        },
        width: "35px",
        height: "35px",
    },
    '@media (max-width: 480px)': {
        content: {
          marginLeft: 10,
          marginRight: 10,
        },
        logo: {
          fontSize: 40,
        },
        animation: {
          fontSize: 14,
        },
        icon: {
          marginRight: 10,
          marginTop: 20,
        },
    },
});

const ICONS = [
    {
        link: "https://www.linkedin.com/in/tung-pham-1b01571b7/",
        icon: "https://imgs.search.brave.com/_h2cUFzpOVe2SBVybuOuXDHgANKiUr9zHbfZRqhTFBs/rs:fit:980:980:1/g:ce/aHR0cHM6Ly9jZG4u/b25saW5ld2ViZm9u/dHMuY29tL3N2Zy9p/bWdfNDQ3MjMucG5n",
        desc: "LinkedIn"
    },
    {
        link: "https://github.com/tungpham2001",
        icon: "https://imgs.search.brave.com/xzKOD-4sj1kj_paDDdS1eZmHyBACOXggT4F73QwEGnM/rs:fit:981:956:1/g:ce/aHR0cHM6Ly9jZG4u/b25saW5ld2ViZm9u/dHMuY29tL3N2Zy9p/bWdfNDQ2MDUucG5n",
        desc: "GitHub"
    },
    {
        link: "mailto:tungphamtys@gmail.com",
        icon: "https://static.vecteezy.com/system/resources/previews/020/009/614/original/email-and-mail-icon-black-free-png.png",
        desc: "Email"
    },
    {
        link: "https://drive.google.com/file/d/1y35ABpLcPd8uHYmoa5jak8PJvfeXtddr/view?usp=drive_link",
        icon: "https://imgs.search.brave.com/XS1PQDToIq7-koaLvS4HMci3SEhL_a5HtgER77P5OnM/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZGlnaXRhbC1t/YXJrZXRpbmctMi0x/My81MC8xMjItNTEy/LnBuZw",
        desc: "Resume"
    },
    {
        link: "https://open.spotify.com/user/71r447sxo99gaak72p2jcb5xm?si=522e30d1044b4c36",
        icon: "https://static.vecteezy.com/system/resources/previews/018/930/579/original/spotify-app-logo-spotify-icon-transparent-free-png.png",
        desc: "Spotify"
    },
    {
        link: "https://rooms.xyz/tungphamtys/bedroom",
        icon: "https://cdn-icons-png.flaticon.com/512/78/78257.png",
        desc: "Rooms.xyz"
    },
]

const Home = () => {
    const classes = useStyles();
    const [hoveredIcon, setHoveredIcon] = useState('');

    const handleIconHover = (desc) => {
        setHoveredIcon(desc);
    };

    const handleIconLeave = () => {
        setHoveredIcon('');
    };

    return (
        <div className={classes.content}>
            <h1 className={classes.logo}>
                Tung Pham
            </h1>
            <h2 className={classes.animation}><TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Aspiring Software Engineer',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Aspiring Web Developer',
                    1000,
                    'Aspiring Game Developer',
                    1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
            />{' '} | QueensU CS</h2>

            <div className={classes.iconContainer}>
                {ICONS.map(({link, icon, desc}) => (
                    <a
                        target = "_blank"
                        rel = "noreferrer"
                        href = {link}
                        key={desc}
                    >
                        <div
                            className={classes.iconWrapper}
                            onMouseEnter={() => handleIconHover(desc)}
                            onMouseLeave={handleIconLeave}
                        >
                            <img
                                src={icon}
                                className={desc === 'Email' || desc === 'Spotify' ? classes.largeIcon : classes.icon}
                                width = "30"
                                height = "30"
                                alt= {desc}
                            />
                            {hoveredIcon === desc && (
                                <p className={classes.description}>{desc}</p>
                            )}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
export default Home;