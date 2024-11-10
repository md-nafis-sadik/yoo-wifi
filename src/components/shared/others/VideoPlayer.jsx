import React from 'react';

const VideoPlayer = ({
    videoUrl = "https://www.youtube.com/embed/Vr9WoWXkKeE?si=HhDVOC3LF3MK2DE7", title
}) => {
    return (
        <iframe
            width="560"
            height="315"
            src={videoUrl} title={title || "YouTube video player"}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
            className='w-full h-[347px] lg:h-full rounded-xl md:rounded-3xl'
        ></iframe>
    );
};

export default VideoPlayer;
