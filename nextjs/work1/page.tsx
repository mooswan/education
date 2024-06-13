'use client'

import React, { useEffect, useState } from 'react'

function page() {

    const [number_1, setNumber_1] = useState(0)
    const handlebtn = () => {
        setNumber_1(prevNumber => prevNumber + 1);
    }
    const handledel = () => {
        if (number_1 > 0) {
            setNumber_1(prevNumber => prevNumber - 1);
        }
    }
    /*    useEffect(() => {
           if (number_1 < 1) {
               setNumber_1(0);
           }
       }, [number_1]) */

    return (
        <>
            <div>{number_1}</div>
            <div className='flex w-full pt-1'>
                <div className='bg-sky-400 p-2 rounded-md text-white cursor-pointer' onClick={handlebtn}>button</div>
            </div>
            <div className='flex w-full pt-1'>
                <div className='bg-sky-400 p-2 rounded-md text-white cursor-pointer' onClick={handledel}>button</div>
            </div>
        </>
    )
}

export default page