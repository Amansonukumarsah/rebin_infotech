import React from 'react'
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <h1 className='text-center'>Login Page</h1>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-8 offset-2">
                        <form>

                            <div className="form-outline mb-4">
                                <input type="email" id="form2Example1" className="form-control" />
                                <label className="form-label" for="form2Example1">Email address</label>
                            </div>


                            <div className="form-outline mb-4">
                                <input type="password" id="form2Example2" className="form-control" />
                                <label className="form-label" for="form2Example2">Password</label>
                            </div>


                            

                             <NavLink to='/sign'>

                             <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
                             </NavLink>

                            


                            
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;
