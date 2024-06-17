import React from 'react'
import InputBox from '../../components/Common/InputBox/InputBox'
import SimpleButton from '../../components/Common/Buttons/SimpleBtn'
import { FaRegFile } from "react-icons/fa";

const CreateProject = () => {


  return (
    <div className='flex justify-center bg-gray-200 h-[100vh]'>
    <div className=' justify-center flex flex-col items-center rounded-2xl bg-white h-fit w-1/3'>
        <h2 className=' text-2xl font-bold mt-16'>Project Name</h2><br/>
        <InputBox label={<span className='flex items-center'><FaRegFile/> &nbsp; Project Name</span>}/>
        <h2 className=' text-2xl font-bold my-4'>Define your space</h2>
        
        <div className=' flex items-center flex-col'>
        <div className='text-sm mb-1 bg-gray-300 rounded-lg px-2'>3.6m</div>
        <div className='flex items-center'>
            <div className=' h-20 w-36 border-black border-4'></div>
            <div className='text-sm mb-1 bg-gray-300 rounded-lg px-2'>2.0m</div>
        </div>
        <div className='text-sm mt-1 '>Ceiling height: <span className='bg-gray-300 rounded-lg px-2'>2.0m</span></div>
        </div>
        <br/>

        <SimpleButton text={'Create'}/>
        <br/>
        <br/>
        <br/>
    </div>
    </div>
  )
}

export default CreateProject