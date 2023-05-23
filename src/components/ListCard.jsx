import React from "react";
import EditIcon from "@mui/icons-material/Edit";
function ListCard({ bookData }) {
  return (
    <tr class="bg-gray-800 rounded-full">
      <td class="p-5 text-left">{bookData.title}</td>
      <td class="p-5 text-left">{bookData.author}</td>
      <td class="p-5 text-left">{bookData.language}</td>
      <td class="p-5 text-left">{bookData.country}</td>
      <td class="p-5 text-left">{bookData.year}</td>
      <td class="p-5 text-left font-bold">{bookData.pages}</td>
      <td class="p-5">
        <EditIcon />
      </td>
    </tr>
  );
}

export default ListCard;
