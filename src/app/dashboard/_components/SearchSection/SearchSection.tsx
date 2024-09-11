import { useTemplates } from "@/store/TemplatesStore";
import React from "react";

export const SearchSection = () => {
  const search = useTemplates((state) => state.search);
  const setSearch = useTemplates((state) => state.setSearch);

  return (
    <div className="bg-blue-500 p-10 flex justify-center items-center">
      <div className="text-center flex flex-col gap-y-5">
        <h2 className="text-4xl font-extrabold">Browse All Templates</h2>
        <p>What would you like to create today?</p>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};
