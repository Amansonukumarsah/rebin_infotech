import React from 'react'
import data from './Userdata'
import { useState } from 'react'
import Section from './Section'
const User = () => {

    const [c, setc] = useState();
    const [act, setact] = useState(false);
    const [de, setde] = useState(false);
    const [all, setall] = useState(false);

    const click = (event) => {
        setc(event.target.value)
        console.log(c)
        if (c == 'active') {
            setact(true)
            setde(false)
            setall(false)
        }
        if (c == 'deactive') {
            setact(false)
            setde(true)
            setall(false)
        }
        if (c == 'all') {
            setact(false)
            setde(false)
            setall(true)
        }
    }
    return (

        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <div class="container-fluid">
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>

                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Logout</a>
                        </li>
                    </ul>

                </div >
            </nav>

            <div className='container-fluid'>
                 <div className="row">
                    <div className="col-6">
                        <select name="" id="" value={click}>
                            {
                                Section.map((val)=>{
                                    <option value={val.value}>{val.value}</option>
                                })
                            }
                        </select>
                    </div>

                 </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-8 offset-2 my-5">
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First_Name</th>
                                    <th scope="col">Last_Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Color</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                        </table>
                        {
                            data.map((val, key) => {
                                return (
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>{val.first_name}</td>
                                            <td>{val.last_name}</td>
                                            <td>{val.email}</td>
                                            <td>{val.gender}</td>
                                            <td>{val.color}</td>

                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default User;


