import React from 'react'
import Stepper from '../Stepper'

const Form2 = () => {
    return (
        <div>
            <Stepper/>

        <div className='flex justify-center mt-8'>
            <div className='bg-white w-96 h-96 rounded-md '>
            <p className='text-slate-500 text-center mt-6 text-lg tracking-wide'>SOCIAL PROFILES</p>
            <p className='text-slate-500 text-center mt-2'>Your presence on the social network</p>
            <form className='mt-6 mx-12'>
                <input type='text' placeholder='Twitter' className='mt-1 mb-4 px-3 py-2 border w-72 rounded-sm focus:outline-none focus:border-sky-500' />
                <input type='text' placeholder='Facebook' className='mt-1 mb-4 px-3 py-2 border w-72 rounded-sm focus:outline-none focus:border-sky-500' />
                <input type='text' placeholder='Google Plus' className='mt-1 mb-4 px-3 py-2 border w-72 rounded-sm focus:outline-none focus:border-sky-500' />
                <div className='flex justify-center'>
                <button className='mt-2 mx-4 text-white bg-green-500 hover:bg-green-500/75 px-8 py-2 rounded-sm'>Previous</button>
                <button className='mt-2 text-white bg-green-500 hover:bg-green-500/75 px-8 py-2 rounded-sm'>Next</button>
                </div>
            </form>
            </div>
        </div>
        </div>
    )
}

export default Form2