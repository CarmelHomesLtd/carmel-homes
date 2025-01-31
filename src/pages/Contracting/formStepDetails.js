const formStepDetails = [
  {
    step: 1,
    inputs: [
      [
        {
          required() {return `Please input your ${this.label.toLowerCase()}`},
          type: "text",
          name: "firstName",
          label: "First Name",
          placeholder: "First Name",
        },
      ],
      [
        {
          required() {return `Please input your ${this.label.toLowerCase()}`},
          type: "text",
          name: "lastName",
          label: "Last Name",
          placeholder: "Last Name",
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
          name: "budget",
          label: "Budget",
          placeholder: "Budget",
        },
      ],
      [
        {
          required() {return `Please select your ${this.label.toLowerCase()}`},
          type: "select",
          name: "service",
          label: "Service",
          options: [
            { text: "Basement Renovation", value: "Basement Renovation" },
            { text: "Home Addition", value: "Home Addition" },
            { text: "Custom Home", value: "Custom Home" },
            { text: "Full Home Remodelling", value: "Full Home Remodelling" },
          ]
        },
      ],
      [
        {
          required() {return `Please input your ${this.name.toLowerCase()}`},
          type: "text",
          name: "city",
          label: "Where is your project located?",
          placeholder: "Where is your project located?",
        },
      ],
      [
        {
          required() {return `${this.label.toLowerCase()}`},
          type: "text",
          name: "howDidYouHearAboutUs",
          label: "How Did You Hear About Us?",
          placeholder: "How Did You Hear About Us?",
        },
      ],
      [
        {
          required() {return `Please input your ${this.label.toLowerCase()}`},
          type: "text",
          name: "description",
          label: "Description",
          placeholder: "Tell Us About Your Project",
        },
      ],
    ],
  },
];

export {formStepDetails};