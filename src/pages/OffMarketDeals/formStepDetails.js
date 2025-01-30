const formStepDetails = [
  {
    step: 1,
    inputs: [
      [
        {
          required() {return `Please input your ${this.label.toLowerCase()}`},
          type: "text",
          name: "name",
          label: "Name",
          placeholder: "Name",
        },
      ],
      [
        {
          required() {return `Please input your ${this.label.toLowerCase()}`},
          type: "email",
          name: "email",
          label: "Email",
          placeholder: "Email",
        },
      ],
      [
        {
          required() {return `Please input your ${this.label.toLowerCase()}`},
          type: "tel",
          name: "phoneNumber",
          label: "Phone Number",
          placeholder: "Phone Number",
        },
      ],
      [
        {
          required() {return `Please input your ${this.label.toLowerCase()}`},
          type: "text",
          name: "address",
          label: "Address",
          placeholder: "address",
        },
      ],
      [
        {
          required() {return `Please input your ${this.label.toLowerCase()}`},
          type: "text",
          name: "city",
          label: "City",
          placeholder: "city",
        },
      ],
      [
        {
          required() {return `Please input your ${this.label.toLowerCase()}`},
          type: "text",
          name: "province",
          label: "Province",
          placeholder: "province",
        },
      ],
      [
        {
          required() {return `Please input your ${this.label.toLowerCase()}`},
          type: "text",
          name: "postal_code",
          label: "Postal Code",
          placeholder: "postal code",
        },
      ],
      [
        {
          required() {return `Please input your ${this.label.toLowerCase()}`},
          type: "text",
          name: "price",
          label: "Asking Price",
          placeholder: "Asking Price",
        },
      ],
      [
        {
          required() {return `Please select a ${this.name.toLowerCase()}`},
          type: "select",
          name: "deadline",
          label: "Deadline (how soon you want to sell)",
          options: [
            {
              value: "3 - 4 weeks",
              text: "3 - 4 weeks"
            },
            {
              value: "1 - 2 months",
              text: "1 - 2 months"
            },
            {
              value: "2 - 5 months",
              text: "2 - 5 months"
            },
            {
              value: "6 months and more",
              text: "6 months and more"
            },
          ],
        },
      ],
      [
        {
          required() {return `Please input your ${this.label.toLowerCase()}`},
          type: "textarea",
          name: "description",
          label: "Description",
          placeholder: "Tell us more about the property",
        },
      ],
      [
        {
          required() {return `Please select a ${this.name.toLowerCase()}`},
          type: "select",
          name: "reason",
          label: "Why do you want to sell?",
          options: [
            {
              value: "Facing foreclosure",
              text: "Facing foreclosure"
            },
            {
              value: "Divorce",
              text: "Divorce"
            },
            {
              value: "Struggling with problematic tenants",
              text: "Struggling with problematic tenants"
            },
            {
              value: "Dealing with fire or water damage",
              text: "Dealing with fire or water damage"
            },
            {
              value: "Simply unable to sell for any reason",
              text: "Simply unable to sell for any reason"
            },
            {
              value: "other",
              text: "Other"
            },
          ],
        },
        {
          type: "text",
          name: "otherReason",
          label: "Other",
          placeholder: "Other reason",
          other: true,
        },
      ],
      [
        {
          required() {return `Please input your ${this.placeholder.toLowerCase()}`},
          type: "file",
          name: "pictures",
          accept: "image/*",
          label: "Picture",
          placeholder: "Picture",
        },
      ],
    ],
  },
];

export {formStepDetails};