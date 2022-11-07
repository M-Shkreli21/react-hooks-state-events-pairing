import React, { useState } from 'react';

function Comments({commentSection}) {

    let [hideComments, setHideComments] = useState(true)

    const commentDisplayUser = commentSection.map( commentSection => (
            <div key= {commentSection.id}>
            <h3 >{commentSection.user}</h3>
            <p>{commentSection.comment}</p>
            </div>
    ))

    function handleComments(){
        setHideComments((hideComments) => !hideComments)
    }

    return (
        <>
        <button onClick = {handleComments}>{hideComments ? "Hide Comments" : "Show Comments"}</button>
        {hideComments ? <div>{commentDisplayUser}</div> : null}
        </>
    )
}

export default Comments;