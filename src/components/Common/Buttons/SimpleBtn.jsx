
/* eslint-disable react/prop-types */

function SimpleButton({type, onClick, text}) {
    return (
      <div>
        <button 
        type={type}
        className= "bg-red-600 h-10  hover:bg-gray-300 text-white font-semibold text-sm px-4 border border-gray-400 rounded-2xl shadow w-80"
        onClick={onClick}
        >
          {text}
        </button>
      </div>
    );
  }
  
  export default SimpleButton;