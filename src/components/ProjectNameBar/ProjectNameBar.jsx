import React from 'react'
import { IoExpand } from "react-icons/io5";
import { BsBoxArrowUp } from "react-icons/bs";
import { useAppDispatch } from '../../redux/hooks';
import { setCurrentPanel } from '../../redux/slices/panel';
// import { useModelContext } from '../../context/ModelContext';

const ProjectNameBar = () => {
// const {currentPanel, setCurrentPanel} = useModelContext();
const dispatch = useAppDispatch();

  return (
    

<nav className= "  bg-white-200 border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-xl" >
  <div className="max-w-screen-xl flex flex-wrap items-center  mx-auto p-4">
    <a href="#" className=" w-[25%] flex items-center space-x-3 rtl:space-x-reverse">
        {/* <img src='https://www.slas.org/SLAS/assets/Image/2023-Corp-Partners/Retisoft.png' className=" h-16" alt="Flowbite Logo" /> */}
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Project Name</span>
    </a>
    <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="justify-between w-[75%] hidden md:block md:w-auto">
    <ul className='flex  justify-between'>
    {/* //   <ul className= "  flex  font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> */}
        <li className=' ml-24'>
          <a onClick={()=>dispatch(setCurrentPanel("table"))}  
          className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Tables</a>
        </li>

        <li className=' ml-24'>
          <a 
          onClick={()=>dispatch(setCurrentPanel("instrument"))}   
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Instruments</a>
        </li>

        <li className='ml-24'>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Accessories</a>
        </li>

        <li className='ml-24'>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Summary</a>
        </li>
        <li>
        {/* <PiLineVerticalThin/> */}
        {/* <PiLineVerticalThin/> */}
        <div className=" border-l-[2px] ml-8 h-8"></div>
        </li>
        <li>
        <IoExpand size={30}/>
        </li>
        <li>
        <BsBoxArrowUp size={25}/>

        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default ProjectNameBar
