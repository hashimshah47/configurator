import React from 'react';
import InputBox from '../../components/Common/InputBox/InputBox';
import SimpleButton from '../../components/Common/Buttons/SimpleBtn';
import CheckBox from '../../components/Common/CheckBox/CheckBox';
import { IoLockClosedOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";


const Login = () => {
  return (
    <>
    <div className='flex'>
        <div className='flex flex-col justify-center items-center text-center w-[50%] md:mt-10'>
            <h2 className=' text-lg text-black font-semibold'>Sign in to your workspace</h2>
            <span className='flex justify-center mt-2'><InputBox label={<span className='flex items-center'><CiUser/> &nbsp; Username</span>}/></span>
            <span className='flex justify-center  mt-2'><InputBox label={<span className='flex items-center'><IoLockClosedOutline/> &nbsp; Password</span>}/></span>

            <span className='flex justify-center  mt-2'><SimpleButton  text={'Login'}/></span>

            
            <span className='flex justify-center mt-2'><CheckBox/>&nbsp; Remember me  &nbsp;|&nbsp;  Forget password?</span>
            <span>Don't have an account? <span className=' text-red-600'>Create Account</span></span>

    <div>
            <div class="relative flex py-5 items-center">
    <div class="flex-grow border-t border-gray-400"></div>
    <span class="flex-shrink mx-4 "><span className='font-medium'>Login</span> with Others</span>
    <div class="flex-grow border-t border-gray-400"></div>
    </div>

    <div class="flex items-center justify-center dark:bg-gray-800">
    <button class="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 w-60">
        <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
        <span>Login with Google</span>
    </button>
</div>


<div class="flex items-center justify-center dark:bg-gray-800">
    <button class="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 w-60 mt-2">
        <img class="w-6 h-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmD3X_-G1yPvU7CMlKM34vA3ziy-STiw2bialvN0RueC8W6rq-sWZB3GZbpERpbSh_q4&usqp=CAU" loading="lazy" alt="google logo"/>
        <span>Login with Facebook</span>
    </button>
</div>
</div>
        </div>


        <div></div>
    </div>
    </>
  )
}

export default Login