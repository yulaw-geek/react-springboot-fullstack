import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';


export default function EditUser() {

    let navigate = useNavigate();

    const {id} = useParams();

    const [user,setUser] = useState(
        {
            name:"",
            userName:"",
            email:""
        })
    const {name, userName, email} = user

        useEffect(()=>{
            loadUser();
        },[])


    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]: e.target.value});
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8084/user/${id}`, user)
        navigate("/");
    }

    const loadUser = async() =>{
        const result = await axios.get(`http://localhost:8084/user/${id}`)
        setUser(result.data)
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Edit User</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='name' className='form-label'>
                        Name
                    </label>
                    <input type='text' className='form-control' 
                    placeholder='enter your name' name='name' value={name}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='userName' className='form-label'>
                        UserName
                    </label>
                    <input type='text' className='form-control' 
                    placeholder='enter your username'  name='userName' value={userName}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>
                        Email
                    </label>
                    <input type='text' className='form-control' 
                    placeholder='enter your email'  name='email' value={email}
                    onChange={(e)=>onInputChange(e)}></input>
                </div>
                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                <Link type='submit' className='btn btn-outline-danger mx-2' to={"/"}>Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
