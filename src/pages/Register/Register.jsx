import React from 'react';
import InputBox from '../../components/Common/InputBox/InputBox';
import SimpleButton from '../../components/Common/Buttons/SimpleBtn';
import CheckBox from '../../components/Common/CheckBox/CheckBox';
import { IoLockClosedOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";
import { HiOutlineOfficeBuilding } from "react-icons/hi";


const Register = () => {
  return (
    <>
    <div className='flex'>
        <div className='flex flex-col justify-center items-center text-center w-[50%] md:mt-10'>
            <h2 className=' text-2xl text-black font-semibold mb-4'>Register to XLab Planner</h2>
            <span className=' w-72 text-xs text-justify'>Follow the instructions to make your account and enjoy the experience.</span>
            <span className='flex justify-center mt-2'><InputBox label={<span className='flex items-center'><CiUser/> &nbsp; Username</span>}/></span>
            <span className='flex justify-center  mt-2'><InputBox label={<span className='flex items-center'><IoMailOpenOutline/> &nbsp; Email</span>}/></span>
            <span className='flex justify-center  mt-2'><InputBox label={<span className='flex items-center'><HiOutlineOfficeBuilding/> &nbsp; Company</span>}/></span>
            <span className='flex justify-center  mt-2'><InputBox label={<span className='flex items-center'><IoLockClosedOutline/> &nbsp; Password</span>}/></span>


            <div className=' flex flex-col items-start justify-start w-80'>
            <span className='flex justify-center mt-2 text-xs'><CheckBox/>&nbsp; You agree to our <span className=' text-red-600 font-semibold ml-1'> Terms and Conditions</span></span>
            <span className='flex justify-center mt-2 text-xs'><CheckBox/>&nbsp; You agree to receive marketing from Retisoft *</span>
            </div>
            <br/>

            <span className=' w-80 text-[10px] text-justify'>By clicking submit below, you consent to allow Retisoft
             to store and process the personal information submitted above to provide 
             you the content requested. You can review our <span className=' text-red-600 font-semibold'>Privacy Policy.</span></span>

    <div>


    <span className='flex justify-center  mt-2'><SimpleButton  text={'Create Account'}/></span>
<br/>
<div className='flex'>
    <div class="flex items-center justify-center dark:bg-gray-800">
    <button class="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 w-32">
        <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
        <span>Google</span>
    </button>
</div>


<div class="flex items-center justify-center dark:bg-gray-800">
    <button class="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 w-32 ml-2">
        <img class="w-6 h-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmD3X_-G1yPvU7CMlKM34vA3ziy-STiw2bialvN0RueC8W6rq-sWZB3GZbpERpbSh_q4&usqp=CAU" loading="lazy" alt="google logo"/>
        <span>Facebook</span>
    </button>
</div>
</div>
</div>
        </div>


        <div></div>
    </div>
    </>
  )
}

export default Register