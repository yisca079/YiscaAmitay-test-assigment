import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { Table, Card } from 'react-bootstrap'
function Home(props) {
    const [usersDetails, setUsersDetails] = useState([])
    const [userPost, setUserPost] = useState([])
    const [filterByName, setFilterByName] = useState('')
    const [filterByEmail, setFilterByEmail] = useState('')
  
 
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users", {
        }).then(res => {
            setUsersDetails(res.data);
            console.log(res.data)
        }).catch(err => {
            alert(err + " Please Try again")
        })
    }, [])

   
    return (
        <>
            <div >
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

                                    <td key={i}  >
                                        <Link to={{pathname:"/post/"/*+user.id*/, state:{id:user.id}}} style={{color:"black"}}>{user.name} </Link></td>
                                    <td>{user.email}</td>
                                    <td>{user.company.name}</td>

                                </tr>
                            })}
                    </tbody>
                </Table>


             
            </div>

        </>
    );

}
export default Home;