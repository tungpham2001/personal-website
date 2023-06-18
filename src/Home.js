import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    logo: {
        fontSize: 50,
    },
    content: {
        marginLeft: 50,
        marginRight: 50
    },
    bio: {
        marginTop: 30
    },
    icon: {
        marginRight: 20
    }
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
        link: "https://drive.google.com/file/d/1swR5uOCB1l6EGPhbskJ84UR5IpoYXOGA/view?usp=drive_link",
        icon: "https://imgs.search.brave.com/XS1PQDToIq7-koaLvS4HMci3SEhL_a5HtgER77P5OnM/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZGlnaXRhbC1t/YXJrZXRpbmctMi0x/My81MC8xMjItNTEy/LnBuZw",
        desc: "Resume"
    },
]

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <h1 className={classes.logo}>Tung Pham</h1>

            <h2>Aspiring Software Engineer & Web Developer | QueensU CS</h2>

            <div>
                {ICONS.map(({link, icon, desc}) => (
                    <a
                        target = "_blank"
                        rel = "noreferrer"
                        href = {link}
                    >
                        <img
                            src={icon}
                            className={classes.icon}
                            width = "30"
                            height = "30"
                            alt= {desc}
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}
export default Home;