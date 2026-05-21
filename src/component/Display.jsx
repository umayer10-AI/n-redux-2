import React from 'react';

const Display = () => {
    return (
        <div>
            <h2>User Data:</h2>
            <input type="text" placeholder='Enter name' className='border'/>
            <button className='py-1 px-3 bg-cyan-700 rounded-2xl m-4'>Add</button>
            <h2 className='mt-10'>User Data:</h2>
            <div>
                
            </div>
        </div>
    );
};

export default Display;