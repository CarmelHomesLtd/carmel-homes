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
          type: "text",
          name: "price",
          label: "Asking Price",
          placeholder: "Asking Price",
        },
      ],
      [
        {
          required() {return `Please input your ${this.placeholder.toLowerCase()}`},
          type: "text",
          name: "deadline",
          label: "Deadline (how soon you want to sell)",
          placeholder: "Tell us your closing date",
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
          required() {return `Please input your ${this.label.toLowerCase()}`},
          type: "tel",
          name: "phoneNumber",
          label: "Phone Number",
          placeholder: "Phone Number",
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