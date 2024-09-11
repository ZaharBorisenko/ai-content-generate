import { TemplatesType } from "@/app/(data)/types";
import Image from "next/image";
import React from "react";

export const TemplateCard = (item: TemplatesType) => {
  return (
    <div className="p-5 border-4 border-gray-500 shadow-md text-center rounded-2xl">
      <Image width={108} height={108} src={item.icon} alt="" />
      <h2>{item.name}</h2>
      <p>{item.desc}</p>
    </div>
  );
};
