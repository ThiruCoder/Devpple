'use client';
import { Typography } from '@mui/material';
import React from 'react'
// https://www.apple.com/105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome3/large_2x.mp4
const VideoSnap = ({ video }) => {
    return (
        <div
            style={{
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                overflow: 'hidden',
                mixBlendMode: 'multiply'
            }}
        >
            <Typography></Typography>
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    display: 'block',
                }}
            >
                <source
                    src={video}
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </div>

    )
}

export default VideoSnap