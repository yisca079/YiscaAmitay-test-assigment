import React, { useEffect, useState } from 'react'
import  {Link}  from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Table, Card } from 'react-bootstrap'
function Home(props) {
    const [usersDetails, setUsersDetails] = useState([])
    const [userPost, setUserPost] = useState([])
    const [filterByName, setFilterByName] = useState('')
    const [filterByEmail, setFilterByEmail] = useState('')
    // const history = useHistory();
    const [Bool,setBool]=useState(false)
    // const navigate = useNavigate();
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users", {
        }).then(res => {
            setUsersDetails(res.data);
            console.log(res.data)
        }).catch(err => {
            alert(err + " Please Try again")
        })
    }, [])

    const showPost = (Id) => {
        debugger
        axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + Id, {
        }).then(res => {
            setUserPost(res.data);
            console.log(res.data)
        }).catch(err => {
            alert(err + " not found")
        })
setBool(true)
        // navigate('/Post')
    }
    return (
        <>
            <div >
                { Bool==false ?<Link to ="/Post"></Link> :null }
               
                <Table striped bordered hover>

                    <thead>

                        <tr  >
                            {/* <th></th> */}
                            <th className="col ">name</th>
                            <th className="col">email</th>
                            <th className="col">company name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td colSpan="4">
                            <input
                                className="input-margin border"
                                type="text"
                                value={filterByName}
                                placeholder="Filter By Name"
                                onChange={e => setFilterByName(e.target.value)}
                            />
                            <input
                                className="input-margin border"
                                type="text"
                                value={filterByEmail}
                                placeholder="Filter By Email"
                                onChange={e => setFilterByEmail(e.target.value)}
                            /></td>
                        {usersDetails.filter((o => o.name.toLowerCase().startsWith(filterByName.toLowerCase()) && o.email.toLowerCase().includes(filterByEmail.toLowerCase())))
                            .map((user, i) => {
                                return <tr>

                                    <td key={i} onClick={() => { showPost(user.id) }}>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.company.name}</td>

                                </tr>
                            })}
                    </tbody>
                </Table>









                {userPost && userPost.map((post, i) => {
                    return (
                        <Card className="col-4">
                            <Card.Header>{post.id}</Card.Header>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>
                                    {post.body}
                                </Card.Text>

                            </Card.Body>
                        </Card>)


                    // return <div>
                    //     <div>{post.id}</div>
                    //     <div>{post.title}</div>
                    //     <div>{post.body}</div>
                    // </div>

                })}
            </div>

        </>
    );

}
export default Home;