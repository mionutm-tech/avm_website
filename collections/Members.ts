import type { CollectionConfig } from "payload";

export const Members: CollectionConfig = {
  slug: "members",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "role", "group", "order"],
    group: "Conținut",
  },
  defaultSort: "order",
  access: { read: () => true },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "role", type: "text", required: true },
    { name: "bio", type: "textarea", required: true },
    {
      name: "group",
      type: "select",
      required: true,
      defaultValue: "team",
      options: [
        { label: "Board", value: "board" },
        { label: "Echipă", value: "team" },
        { label: "Voluntari", value: "volunteers" },
      ],
    },
    {
      name: "accent",
      type: "select",
      required: true,
      defaultValue: "mint",
      options: [
        { label: "Mint", value: "mint" },
        { label: "Sky", value: "sky" },
        { label: "Sunrise", value: "sunrise" },
      ],
    },
    { name: "order", type: "number", defaultValue: 0 },
  ],
};
