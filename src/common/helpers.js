export const validateAndUpdateInput = (input, value, form) => {
  const currInput = form[input];
  currInput.value = value;
  currInput.errors = [];

  if (currInput.validations.required) {
    if (value.length < 1) {
      currInput.errors.push({
        name: "required",
        value: `${input} is required`,
      });
    }
  }
  if (currInput.validations.pattern) {
    if (!value.match(currInput.validations.pattern)) {
      currInput.errors.push({
        name: "invalid",
        value: `${input} is invalid`,
      });
    }
  }
  if (currInput.validations.minLength) {
    if (value.length < currInput.validations.minLength) {
      currInput.errors.push({
        name: "minLength",
        value: `${input} must be at least ${currInput.validations.minLength} characters`,
      });
    }
  }
};
