import React, { useState } from "react";
import ListCard from "./ListCard";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Form from "./Form";

function ListComponents() {
  const data = useSelector((state) => state.data.data.data);
  const [isFormOpen, setIsFormOpen] = useState(false);
  useEffect(() => {}, []);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="col-span-12">
        <div className="flex">
          <div
            className="flex items-center max-w-md mx-auto bg-white rounded-lg "
            x-data="{ search: '' }"
          >
            <div className="w-full">
              <input
                type="search"
                className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                placeholder="search"
                x-model="search"
              />
            </div>
            <div>
              <button
                type="submit"
                className="flex items-center bg-gray-800 justify-center w-12 h-12 text-white rounded-r-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="flex items-center bg-gray-800 justify-center w-12 h-12 text-white rounded-lg"
            onClick={() => {
              setIsFormOpen(true);
            }}
          >
            <AddIcon />
          </button>
        </div>

        <div className="overflow-auto lg:overflow-visible ">
          <table className="table text-gray-400 border-separate space-y-6 text-sm">
            <thead className="bg-gray-800 text-gray-500">
              <tr>
                <th className="p-3">title</th>
                <th className="p-3 text-left">author</th>
                <th className="p-3 text-left">language</th>
                <th className="p-3 text-left">country</th>
                <th className="p-3 text-left">year</th>
                <th className="p-3 text-left">pages</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((book) => (
                <ListCard bookData={book} key={book.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isFormOpen ? (
        <div className="w-full h-full absolute flex flex-col items-center justify-center">
          <Form />
        </div>
      ) : null}
    </div>
  );
}

export default ListComponents;
