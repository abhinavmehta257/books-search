import React from "react";
import CloseIcon from "@mui/icons-material/Close";
function Form() {
  return (
    <div className="">
      <div className=" bg-gray-800 text-white py-6 px-10 sm:max-w-md w-full ">
        <div className="flex content-between sm:text-3xl text-2xl font-semibold text-center text-gray-500  mb-12">
          Book
          <div className="text-white cursor-pointer">
            <CloseIcon />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 bg-gray-800 text-white  my-8"
              placeholder="author "
            />
          </div>
          <div>
            <input
              type="text"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 bg-gray-800 text-white my-8"
              placeholder="country "
            />
          </div>
          <div>
            <input
              type="text"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 bg-gray-800 text-white mb-8"
              placeholder="language "
            />
          </div>
          <div>
            <input
              type="text"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 bg-gray-800 text-white mb-8"
              placeholder="link "
            />
          </div>
          <div>
            <input
              type="number"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 bg-gray-800 text-white mb-8"
              placeholder="pages "
            />
          </div>
          <div>
            <input
              type="text"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 bg-gray-800 text-white mb-8"
              placeholder="title "
            />
          </div>
          <div>
            <input
              type="date"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 bg-gray-800 text-white mb-8"
              placeholder="year "
            />
          </div>
        </div>
        <div className="flex justify-center my-6">
          <button className=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
