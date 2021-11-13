import React, { useEffect, useState } from "react";
import {Card} from 'react-bootstrap'
import axios from "axios";
import CreatePosts from './createPosts'
import { useHistory, useLocation } from "react-router";

function Post (props){
    debugger
    const location=useLocation();
    const [userPost,setUserPost]=useState([]);
    const [modalShow, setModalShow] = useState(false)
    useEffect(()=>{
        debugger
         axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + location.state.id, {
        }).then(res => {
            setUserPost(res.data);
            console.log(res.data)
        }).catch(err => {
            alert(err + " not found")
        })
    },[])
    const handleShow = () => {
        setModalShow(!modalShow);
    }
return(
    <div>
        {userPost && userPost.map((post, i) => {
                    return (
                      
                        <Card  className="row">
                            <Card.Header>{post.id}</Card.Header>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>
                                    {post.body}
                                </Card.Text>

                            </Card.Body>
                        </Card> 
                    )
                })}
               
                <button type="button" class="btn btn-primary" onClick={handleShow}>CreatePost</button>
                <CreatePosts
                show={modalShow}
                onHide={handleShow}
                handleShow={handleShow}
                setUserPost={setUserPost}
            />
    </div>
)
}
export default Post;