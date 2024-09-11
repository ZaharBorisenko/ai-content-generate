"use client";
import React, { useEffect } from "react";
import { TemplateCard } from "@/app/dashboard/_components/TemplateCard/TemplateCard";
import { TemplatesType } from "@/app/(data)/types";
import { useTemplates } from "@/store/TemplatesStore";

export const TemplateListSection = () => {
  const search = useTemplates((state) => state.search);
  const searchList = useTemplates((state) => state.searchTemplate);
  const setSearch = useTemplates((state) => state.setSearchTemplate);

  useEffect(() => {
    setSearch(search);
  }, [search]);

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {searchList.map((item: TemplatesType, i) => (
          <TemplateCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};
