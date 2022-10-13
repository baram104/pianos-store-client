export const formInputs = {
  username: {
    title: "Username",
    value: "",
    validations: {
      required: true,
    },
    type: "text",
    errors: [],
  },
  password: {
    title: "Password",
    value: "",
    validations: {
      required: true,
    },
    type: "password",
    errors: [],
  },
  email: {
    title: "Email",
    value: "",
    validations: {
      required: true,
      patternObj: {
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        errorMsg: "Email is incorrect",
      },
    },
    type: "email",
    errors: [],
  },
  usernameRegistration: {
    title: "Username",
    value: "",
    validations: {
      required: true,
      minLength: 2,
    },
    type: "text",
    errors: [],
  },
  passwordRegistration: {
    title: "Password",
    value: "",
    validations: {
      required: true,
      patternObj: {
        pattern:
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        errorMsg:
          "Password must be at least 8 characters long, must contain at least one special character, capital letter and a number",
      },
    },
    type: "password",
    errors: [],
  },
  confirmPassword: {
    title: "Confirm Password",
    value: "",
    validations: {
      required: true,
      compare: "passwordRegistration",
    },
    type: "password",
    errors: [],
  },
  oldPassword: {
    title: "Old Password",
    value: "",
    validations: {
      required: true,
    },
    type: "password",
    errors: [],
  },
  firstName: {
    title: "First Name",
    value: "",
    validations: {
      required: true,
      patternObj: {
        pattern: /(^[A-Za-z]+$)/,
        errorMsg: "First Name must contain only letters.",
      },
      minLength: 3,
    },
    type: "text",
    errors: [],
  },
  lastName: {
    title: "Last Name",
    value: "",
    validations: {
      required: true,
      patternObj: {
        pattern: /(^[A-Za-z]+$)/,
        errorMsg: "Last Name must contain only letters.",
      },
      minLength: 3,
    },
    type: "text",
    errors: [],
  },
  city: {
    title: "City",
    value: "",
    validations: {
      required: true,
      patternObj: {
        pattern: /(^[A-Za-z\s]+$)/,
        errorMsg: "City must contain only letters.",
      },
      minLength: 3,
    },
    type: "text",
    errors: [],
  },
  street: {
    title: "Street",
    value: "",
    validations: {
      required: true,
      patternObj: {
        pattern: /(^[A-Za-z1-9\s]+$)/,
        errorMsg: "Street must contain only letters and numbers.",
      },
      minLength: 3,
    },
    type: "text",
    errors: [],
  },
  zipcode: {
    title: "Zipcode",
    value: "",
    validations: {
      required: true,
      patternObj: {
        pattern: /(^[1-9]+$)/,
        errorMsg:
          "Zipcode must be at least 7 characters and must contain only numbers.",
      },
    },
    type: "text",
    errors: [],
  },
};
