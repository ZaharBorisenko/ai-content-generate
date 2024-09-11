import { TemplatesType } from "@/app/(data)/types";
import { Templates } from "@/app/(data)/Templates";
import { create } from "zustand";

interface TemplateState {
  searchTemplate: TemplatesType[];
  setSearchTemplate: (search: string) => void;
  search: string;
  setSearch: (newSearch: string) => void;
}

export const useTemplates = create<TemplateState>((set) => ({
  searchTemplate: Templates,
  setSearchTemplate: (search: string) => {
    if (!search) {
      set(() => ({ searchTemplate: Templates }));
    } else {
      const filterTemplates = Templates.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      set(() => ({ searchTemplate: filterTemplates }));
    }
  },
  search: "",
  setSearch: (newSearch: string) => set(() => ({ search: newSearch })),
}));
