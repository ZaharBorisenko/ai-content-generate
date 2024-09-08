import React from "react";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="p-5 shadow-md border-b-2">
      <div className="flex gap-x-5 justify-center p-2 border-2 rounded-2xl max-w-md">
        <FaSearch size={32} className="" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full outline-none placeholder:text-xl"
        />
      </div>
    </div>
  );
};
