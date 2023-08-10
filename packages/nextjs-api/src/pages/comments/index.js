import { useState } from "react";

function CommentsPage() {

    const [comments,setComments] = useState([]);
    const [comment,setComment] = useState('');

    const fetchComments = async ()=>{
        const response = await fetch('api/comments');
        const data = await response.json();
        setComments(data);
    }

    const submitComment = async ()=>{
        const response = await fetch('api/comments',{
            method: 'POST',
            body : JSON.stringify({comment}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        fetchComments();
    }

    const deleteComment = async (commentId)=>{
        const response = await fetch(`api/comments/${commentId}`,{
            method: 'DELETE'
        });
        const data = await response.json();
        fetchComments();
    }

    return (<>
        <input type="text" value={comment} onChange={e=>setComment(e.target.value)}/>
        <button onClick={submitComment}>Submit Comment</button>
        <button onClick={fetchComments}>Load Comments</button>
        {
            comments.map(comment=>{
                return (<div key={comment.id}>
                    <h2>
                        {comment.id} {comment.text}
                    </h2>
                    <button onClick={()=>deleteComment(comment.id)}>Delete Comment</button>
                </div>)
            })
        }
    </>)
}

export default CommentsPage;