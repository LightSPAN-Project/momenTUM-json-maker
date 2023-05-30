import { question } from "./question";

export const section = {
  $id: "#/properties/modules/items/properties/sections/items",
  type: "object",
  title: "Sections",
  required: ["id", "name", "questions", "shuffle"],
  properties: {
    name: {
      $id: "#/properties/modules/items/properties/sections/items/properties/name",
      type: "string",
      title: "Section name",
      description: "The title of this section, which is displayed at the top of the screen.",
      default: "",
      examples: ["Welcome"],
    },
    id: {
      $id: "#/properties/modules/items/properties/id",
      type: "string",
      pattern: "^[a-z0-9_]+$",
      title: "Unique identifier",
      description:
        "A unique identifier for this module. Will be generated if not provided. Must be lowercase and only letters, numbers and underscores. Cannot begin with a number",
      default: "",
      examples: [""],
    },
    shuffle: {
      $id: "#/properties/modules/items/properties/sections/items/properties/shuffle",
      type: "boolean",
      title: "Shuffle Questions?",
      description:
        "Used for counterbalancing. If true, the order of the questions in this section will be randomised.",
      default: false,
      examples: [false],
    },
  },
};
