import React, {useState} from 'react';


function VideoDisplay({title, views, uploaded, upvotes, downvotes}) {

    const [isLiked, setIsLiked] = useState(upvotes)
    const [isDisliked, setIsDisliked] = useState(downvotes)

    function updateLikes() {
        setIsLiked((isLiked) => isLiked + 1);
    }

    function updateDislikes() {
        setIsDisliked((isDisliked) => isDisliked + 1);
    }

    return (
    <>
    <h1>{title}</h1>
    <h3>{views} Views | Uploaded: {uploaded}</h3>
    <button onClick={updateLikes}>{isLiked} 👍</button>
    <button onClick={updateDislikes}>{isDisliked}👎</button>
    
    </>
    )
}

export default VideoDisplay;