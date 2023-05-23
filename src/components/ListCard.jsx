import React from "react";
import EditIcon from "@mui/icons-material/Edit";
function ListCard({ bookData }) {
  return (
    <tr className="bg-gray-800 rounded-full">
      <td className="p-5 text-left">{bookData.title}</td>
      <td className="p-5 text-left">{bookData.author}</td>
      <td className="p-5 text-left">{bookData.language}</td>
      <td className="p-5 text-left">{bookData.country}</td>
      <td className="p-5 text-left">{bookData.year}</td>
      <td className="p-5 text-left font-bold">{bookData.pages}</td>
      <td className="p-5 cursor-pointer">
        <EditIcon />
      </td>
    </tr>
  );
}

export default ListCard;
