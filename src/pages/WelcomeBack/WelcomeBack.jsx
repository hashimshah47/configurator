import React from 'react';
import SimpleButton from '../../components/Common/Buttons/SimpleBtn';
import { useNavigate } from 'react-router-dom';


const WelcomeBack = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    console.log("first")
    navigate("/createproject");
  }
  return (
    <>
      <div className="flex bg-gray-100 h-[80vh]">
        <div className="flex flex-col justify-center items-center text-center w-[50%] ">
          <div className="bg-gray-200 p-5 rounded-lg">
            <h2 className=" text-lg text-black font-semibold text-start">
              Intro to XLab Planner text
            </h2>
            <div className=" text-xs w-96 text-justify">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                deserunt inventore magni beatae sit laudantium sapiente, dolores
                quam, reiciendis error nostrum. Excepturi ipsa praesentium fuga,
                tempora officia laboriosam eius quia?
              </p>
            </div>
            <br/>
            <div className=" text-xs w-96 text-justify">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                deserunt inventore magni beatae sit laudantium sapiente, dolores
                quam, reiciendis error nostrum. Excepturi ipsa praesentium fuga,
                tempora officia laboriosam eius quia?
              </p>
            </div>
          </div>
          <br/>

        <div className=' w-96 flex text-start justify-start'>
          <h2 className="text-2xl text-black font-bold ">
            Welcome back Eric!
          </h2>
        </div>
          <br/>

          <div className='flex w-96'>
            <div className=" font-medium h-28 w-28 bg-gray-200 flex items-center justify-center border-gray-300 border-2 rounded-lg">
              My Projects
            </div>
            <div className=" ml-2 font-medium h-28 w-28 bg-gray-200 flex items-center justify-center border-gray-300 border-2 rounded-lg">
              Purchased Projects
            </div>
            <div className="ml-2 font-medium h-28 w-28 bg-gray-200 flex items-center justify-center border-gray-300 border-2 rounded-lg">
              Under Review
            </div>
          </div>
          <br/>
          <span className="flex justify-center  mt-2">
            <SimpleButton text={"Create New Project"} onClick={handleClick} />
          </span>
        </div>

        <div></div>
      </div>
    </>
  );
}

export default WelcomeBack