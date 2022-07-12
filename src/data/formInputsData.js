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
      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
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
      minLength: 8,
      pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
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
      pattern: /(^[A-Za-z]+$)/,
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
      pattern: /(^[A-Za-z]+$)/,
      minLength: 3,
    },
    type: "text",
    errors: [],
  },
};
