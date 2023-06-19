import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    subheading: {
        marginBottom: 3,
        fontSize: '14px',
    },

    recentSong: {
        display: 'flex',
        justifyContent: 'center',
    },

    artist: {
        fontSize: 15,
        margin: '10px 20px',
        '@media (max-width: 768px)': {
            fontSize: 24,
        },
    },

    title: {
        fontSize: 25,
        margin: '10px 20px',
        maxWidth: '20vw',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        '@media (max-width: 768px)': {
            maxWidth: '50vw',
        },
        fontWeight: 'bold',
    },

    recentSongLink: {
        textDecoration: 'none',
        color: 'gray',
        '&:hover': {
            color: 'cornflowerblue'
        },
    },

    albumArt: {
        width: 120,
        height: 120,
    },

    smallTest: {
        fontSize: 12,
        marginTop: 3,
    },
});

function RecentSong() {
    const [recentSong, setRecentSong] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://ws.audioscrobbler.com/2.0',
            params: {
                method: 'user.getrecenttracks',
                user: 'tungpham2001',
                api_key: '5502ebce9e9aa56c03eed8593d7c475f',
                format: 'json',
            },
        }).then((res) => {
            const recentTrack = res.data.recenttracks.track[0];
            const newSong = {
                artist: recentTrack.artist['#text'],
                title: recentTrack.name,
                imageSrc:recentTrack.image[2]['#text'],
                songLink: recentTrack.url,
            };
            setRecentSong(newSong);
        });
    }, []);

    if (!recentSong) {
        return null;
    }

    return (
        <>
            
            <a
                target="_blank"
                rel = "noreferrer"
                className={classes.recentSongLink}
                href={recentSong.songLink}
            >
                <div className={classes.recentSong}>
                    <img style={{width: '300px', height: '300px'}}
                        className={classes.albumArt}
                        src={recentSong.imageSrc}
                        alt="album art"
                        loading="lazy"
                    />
                </div>
                <div>
                    <h1 className={classes.subheading}>Most recently played song:</h1>
                </div>
                <div className={classes.songInfo}>
                    <p className={classes.title}>{recentSong.title}</p>
                    <h1 className={classes.artist}>{recentSong.artist}</h1>  
                </div>
            </a>
        </>
    );
}

export default RecentSong;