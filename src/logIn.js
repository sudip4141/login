// import React, { useState } from 'react'




// const logIn = () => {

//     const [userLogin, setUserLogin] = useState({
//         email: "",
//         password: ""
//     });

//     const [records, setRecords] = useState([]);

//     const handleInput = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         console.log(name, value);
//         setUserLogin({ ...userLogin, [name]: value });

//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const newRecord = { ...userLogin, id: new Date().getTime().toString() }
//         console.log(records);
//         setRecords([...records, newRecord]);
//         console.log(records);
//     }




//     return (
//         <div>
//             <form action='' onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor='Email'>Email</label>
//                     <input type='text' autoComplete='off'
//                         value={userLogin.email}
//                         onChange={handleInput}
//                         name='Email' id='Email' />
//                 </div>

//                 <div>
//                     <label htmlFor='password'>password</label>
//                     <input type='password' autoComplete='off'
//                         value={userLogin.password}
//                         onChange={handleInput}
//                         name='password' id='password' />
//                 </div>
//                 <button type='submit'>Registration</button>
//             </form>
//         </div>
//     )
// }


// export default logIn