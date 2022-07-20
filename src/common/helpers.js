export const validateAndUpdateInput = (input, value, form) => {
  const currInput = form[input];
  currInput.value = value;
  currInput.errors = [];

  if (currInput.validations.required) {
    if (value.length < 1) {
      currInput.errors.push(`${currInput.title} is required`);
    }
  }
  if (currInput.validations.patternObj) {
    if (!value.match(currInput.validations.patternObj.pattern)) {
      currInput.errors.push(currInput.validations.patternObj.errorMsg);
    }
  }
  if (currInput.validations.minLength) {
    if (value.length < currInput.validations.minLength) {
      currInput.errors.push(
        `${currInput.title} must be at least ${currInput.validations.minLength} characters`
      );
    }
  }
  if (currInput.validations.compare) {
    if (value !== form[currInput.validations.compare].value) {
      currInput.errors.push(`${currInput.title} doesn't match`);
    }
  }
};
