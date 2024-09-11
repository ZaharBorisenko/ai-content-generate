"use client";
import React from "react";
import {
  SearchSection,
  TemplateListSection,
} from "@/app/dashboard/_components";

export const TemplatesManager = () => {
  return (
    <div>
      <SearchSection />
      <p>dashboard</p>
      <TemplateListSection />
    </div>
  );
};
