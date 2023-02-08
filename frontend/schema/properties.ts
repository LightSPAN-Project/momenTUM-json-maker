export const properties = {
  $id: "#/properties/properties",
  type: "object",
  title: "Properties",
  description: "Stores the metadata of the study",
  default: {},
  examples: [
    {
      study_name: "Demo",
      study_id: "3ZDOGAH",
      created_by: "Adrian Shatte",
      instructions: "This is a demo study showing the features of schema",
      post_url: "https://make.momentumresearch.eu/api/v1/response",
      empty_msg: "You're all up to date",
      banner_url: "https://getschema.app/img/schema_banner.png",
      support_url: "https://getschema.app",
      support_email: "hello@getschema.app",
      conditions: ["Control", "Treatment"],
      cache: false,
      ethics: "This study was approved by ethics body with approval #123456789",
      pls: "https://getschema.app/pls-file-link.pdf",
    },
  ],
  required: [
    "study_name",
    "study_id",
    "created_by",
    "post_url",
    "empty_msg",
    "banner_url",
    "conditions",
    "cache",
  ],
  properties: {
    study_name: {
      $id: "#/properties/properties/properties/study_name",
      type: "string",
      title: "Name",
      description: "The name of the current study.",
      default: "",
      examples: ["Demo"],
    },
    study_id: {
      $id: "#/properties/properties/properties/study_id",
      type: "string",
      pattern: "^[a-z0-9_]+$",
      title: "ID",
      description: "An identifier for the study which is sent to the server with response data.",
      default: "",
      examples: ["3ZDOGAH"],
    },
    created_by: {
      $id: "#/properties/properties/properties/created_by",
      type: "string",
      title: "Created by",
      description: "An explanation about the purpose of this instance.",
      default: "",
      examples: ["Adrian Shatte"],
    },
    instructions: {
      $id: "#/properties/properties/properties/instructions",
      type: "string",
      title: "Instructions",
      description:
        "Brief description/instructions for the study that is displayed in the app. Basic HTML supported.",
      default: "",
      examples: ["This is a demo study showing the features of schema"],
    },
    post_url: {
      $id: "#/properties/properties/properties/post_url",
      type: "string",
      title: "Post URL",
      description: "An endpoint to receive participant responses (POST data) from the app.",
      default: "https://tuspl22-momentum.srv.mwn.de/api/v1",
    },
    empty_msg: {
      $id: "#/properties/properties/properties/empty_msg",
      type: "string",
      title: "Empty Message",
      description:
        "A message displayed to the user when there are no tasks currently available to complete.",
      default: "",
      examples: ["You're all up to date"],
    },
    banner_url: {
      $id: "#/properties/properties/properties/banner_url",
      type: "string",
      title: "Banner URL",
      description:
        "The URL to an image that will be displayed on the home page of your study. It will be displayed at 100% width and maintain the aspect ratio of the original image.",
      default: "",
      examples: ["https://getschema.app/img/schema_banner.png"],
    },
    support_url: {
      $id: "#/properties/properties/properties/support_url",
      type: "string",
      title: "Support URL",
      description:
        "A web link to the study's homepage or support information that is linked to in the app.",
      default: "",
      examples: ["https://getschema.app"],
    },
    support_email: {
      $id: "#/properties/properties/properties/support_email",
      type: "string",
      title: "Support Email",
      description: "An email address that participants can contact for support with the study.",
      default: "",

      examples: ["hello@getschema.app"],
    },
    cache: {
      $id: "#/properties/properties/properties/cache",
      type: "boolean",
      title: "Cache Media?",
      description:
        "Indicates whether media elements will be cached for offline mode during study enrollment. Note: media should be optimised to reduce download times.",
      default: true,
    },
    ethics: {
      $id: "#/properties/properties/properties/ethics",
      type: "string",
      title: "Ethics Statement",
      description: "An ethics statement for the study.",
      default: "",
      examples: ["This study was approved by ethics body with approval #123456789"],
    },
    pls: {
      $id: "#/properties/properties/properties/pls",
      type: "string",
      title: "Plain Language Statement",
      description: "A web URL to a PDF file containing the study's Plain Language Statement.",
      default: "",
      examples: ["https://getschema.app/pls-file-link.pdf"],
    },
    conditions: {
      $id: "#/properties/properties/properties/conditions",
      type: "array",
      title: "Conditions",
      description: "A list of conditions that participants can be randomised into.",
      default: ["Control", "Treatment"],
      examples: [["Control", "Treatment"]],
      items: {
        $id: "#/properties/properties/properties/conditions/items",
        type: "string",
      },
    },
  },
};
