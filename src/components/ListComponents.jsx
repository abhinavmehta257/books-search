import React from "react";
import ListCard from "./ListCard";

function ListComponents({ books }) {
  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-900">
      <div class="col-span-12">
        <div class="overflow-auto lg:overflow-visible ">
          <table class="table text-gray-400 border-separate space-y-6 text-sm">
            <thead class="bg-gray-800 text-gray-500">
              <tr>
                <th class="p-3">title</th>
                <th class="p-3 text-left">author</th>
                <th class="p-3 text-left">language</th>
                <th class="p-3 text-left">country</th>
                <th class="p-3 text-left">year</th>
                <th class="p-3 text-left">pages</th>
                <th class="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <ListCard bookData={book} key={book.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListComponents;
