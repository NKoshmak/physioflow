export const homepage = {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    // Method
    {
      name: "methodTitle",
      title: "Method Title",
      type: "string",
    },
    {
      name: "methodSubtitle",
      title: "Method Subtitle",
      type: "string",
    },
    {
      name: "methodTextLeft",
      title: "Method Text Left",
      type: "text",
    },
    {
      name: "methodTextRight",
      title: "Method Text Right",
      type: "array",
      of: [{ type: "text" }],
    },

    // Benefits
    {
      name: "benefitsTitle",
      title: "Benefits Title",
      type: "string",
    },
    {
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "number",
              title: "Number",
              type: "string",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "text",
              title: "Text",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      name: "benefitsClosingText",
      title: "Benefits Closing Text",
      type: "text",
    },

    // PRACTITIONER
    {
      name: "practitionerTitle",
      title: "Practitioner Title",
      type: "string",
    },
    {
      name: "practitionerIntro",
      title: "Practitioner Intro",
      type: "text",
    },
    {
      name: "practitionerParagraphs",
      title: "Practitioner Paragraphs",
      type: "array",
      of: [{ type: "text" }],
    },
    {
      name: "certifications",
      title: "Certifications",
      type: "array",
      of: [{ type: "string" }],
    },

    // BOOKING
    {
      name: "bookingTitle",
      title: "Booking Title",
      type: "string",
    },
    {
      name: "bookingText",
      title: "Booking Text",
      type: "text",
    },
    {
      name: "bookingEmail",
      title: "Booking Email",
      type: "string",
    },
    {
      name: "bookingButtonText",
      title: "Booking Button Text",
      type: "string",
    },

    
  ],
};
