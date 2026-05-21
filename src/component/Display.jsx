"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Display = () => {

    const [s,setT] = useState('')
    const cnt = useSelector(v => v.counter.users)
    const dispatch = useDispatch()

    const a = () => {
        
    }

    return (
        <div className='ml-5 mt-5'>
            <h2>User Data:</h2>
            <input onChange={(e) => setT(e.target.value)} type="text" placeholder='Enter name' className='border'/>
            <button onClick={a} className='py-1 px-3 bg-cyan-700 rounded-2xl m-4'>Add</button>
            <h2 className='mt-10'>User Data:</h2>
            <div>

            </div>
        </div>
    );
};

export default Display;