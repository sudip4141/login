import React, { useState } from 'react';
import "./signup.css"

const signup = () => {

    const [userSignUp, setUserSignUp] = useState({
        user_name: "",
        email: "",
        password: "",
        Re_password: ""
    });

    const [records, setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setUserSignUp({ ...userSignUp, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = { ...userSignUp, id: new Date().getTime().toString() }
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);
    }

    return (
        <div className="main">
            <div className="form">
                <h1>Create account</h1>

                <form action='' onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor='user_name'></label>
                        <input type='text' autoComplete='off'
                            placeholder='&#xF199; Your Name'
                            value={userSignUp.user_name}
                            onChange={handleInput}
                            name='user_name' id='user_name' />
                    </div>

                    <div>
                        <label htmlFor='email'></label>
                        <input type='text' autoComplete='off'
                            placeholder='&#xF199; Email'
                            value={userSignUp.email}
                            onChange={handleInput}
                            name='email' id='email' />
                    </div>

                    <div>
                        <label htmlFor='password'></label>
                        <input type='password' autoComplete='off'
                            placeholder="&#xf023; password"
                            value={userSignUp.password}
                            onChange={handleInput}
                            name='password' id='password' />
                    </div>

                    <div>
                        <label htmlFor='Re_password'></label>
                        <input type='Re_password' autoComplete='off'
                            placeholder="&#xf023; Re-enter your password"
                            value={userSignUp.Re_password}
                            onChange={handleInput}
                            name='Re_password' id='Re_password' />
                    </div>
                    <button className='btn' type='submit'><b>Login</b></button>
                </form>
            </div>
        </div>
    )

}

export default signup;