import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

import axios from 'axios';

function CreatePosts(props) {
    const { handleShow ,setUserPost ,} = props;
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
  
    


    const createPost = () => {
        handleShow();
        let post = {
            "title": postTitle,
            "body": postBody
        }
        axios({
            method: "post",
            url: " https://jsonplaceholder.typicode.com/posts ",
            data: JSON.stringify(post),
        }).then(res => {
            setUserPost(posts=>[...posts,post])
            console.log(res.data)
        })
        .catch(error => alert('failed to save data error description: ' + error))
        setPostTitle("")
        setPostBody("")
        }

    return (
            <>
                <Modal
                    {...props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Create Post
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="form-group">
                            <label htmlFor="example3">Title</label>
                            <input type="text" id="example3" className="form-control form-control-sm" onChange={(e) => { setPostTitle(e.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">
                                Body
                            </label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="5"
                                onChange={(e) => {setPostBody(e.target.value) }}
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-color" onClick={handleShow}>
                            Close
                        </Button>
                        <Button onClick={createPost} >
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );

    }
    export default CreatePosts;