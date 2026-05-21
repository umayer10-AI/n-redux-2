"use client"
import { addUser } from '@/redux/slice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Display = () => {

    const [s,setT] = useState('')
    const data = useSelector(v => v.counter.users)
    const dispatch = useDispatch()

    const a = () => {
        dispatch(addUser(s))
    }

    return (
        <div className='ml-5 mt-5'>
            <h2>User Data:</h2>
            <input onChange={(e) => setT(e.target.value)} type="text" placeholder='Enter name' className='border'/>
            <button onClick={a} className='py-1 px-3 bg-cyan-700 rounded-2xl m-4'>Add</button>
            <h2 className='mt-10'>User Data:</h2>
            <div>
                {
                    data?.map((v,i) => (
                        <h2 key={i}><span>{v.name}</span> <span className='py-1 px-2 bg-red-500'>remove</span></h2>
                    ))
                }
            </div>
        </div>
    );
};

export default Display;