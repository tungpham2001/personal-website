import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    subheading: {
        marginBottom: 3,
    },

    recentSong: {
        display: 'flex'
    },

    artist: {
        fontSize: 30,
        margin: '10px 20px',
        '@media (max-width: 768px)': {
            fontSize: 24,
        },
    },

    title: {
        fontSize: 15,
        margin: '10px 20px',
        maxWidth: '20vw',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        '@media (max-width: 768px)': {
            maxWidth: '50vw',
        },
    },

    recentSongLink: {
        textDecoration: 'none',
        color: 'gray',
        '&:hover': {
            color: 'black'
        },
    },

    albumArt: {
        width: 120,
        height: 120,
    },

    smallTest: {
        fontSize: 12,
        marginTop: 3,
    }
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
                user: 'tung',
                api_key: 'c3a5e6059899ffaeaa9c6fea7f184867',
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
                    <h1 className={classes.artist}>{recentSong.artist}</h1>
                    <p className={classes.title}>{recentSong.title}</p>
                </div>
            </a>
        </>
    );
}

export default RecentSong;