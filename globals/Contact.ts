import type { GlobalConfig } from "payload";

export const Contact: GlobalConfig = {
  slug: "contact",
  label: "Contact",
  admin: { group: "Setări" },
  access: { read: () => true },
  fields: [
    { name: "email", type: "email", required: true },
    { name: "phone", type: "text", required: true },
    { name: "address", type: "text", required: true },
    {
      name: "socials",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "href", type: "text", required: true },
      ],
    },
  ],
};
