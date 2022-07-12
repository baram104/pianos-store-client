export const loginFormInputs = {
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
};

export const signUpFormInputs = {
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
  username: {
    title: "Username",
    value: "",
    validations: {
      required: true,
      minLength: 2,
    },
    type: "text",
    errors: [],
  },
  password: {
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
      compare: "password",
    },
    type: "password",
    errors: [],
  },
};
