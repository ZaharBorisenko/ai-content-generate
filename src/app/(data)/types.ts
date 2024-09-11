export interface FormField {
  label: string;
  field: "input" | "textarea" | "dropdown";
  name: string;
  required?: boolean;
}

export interface TemplatesType {
  name: string;
  desc: string;
  category: string;
  icon: string;
  aiPrompt: string;
  slug: string;
  form: FormField[];
}
