"use client"
import { increment } from '@/redux/slice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Action = () => {

    const cnt = useSelector(v => v.counter.value)

    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(increment())} className='text-white bg-cyan-700 py-2 px-4 rounded-2xl'>Add</button>
            <h2 className='mt-4'>Count Numbers: {cnt}</h2>
        </div>
    );
};

export default Action;