import Validator from "validatorjs";

const rule = {
  FirstName: "required|min:3|max:20",
  LastName: "required|min:3|max:20",
  EmailAddress: "required|email"
};

const validate = fieldsToValidate => {
  const validator = new Validator(fieldsToValidate, rule);
  validator.passes();
  return validator.errors.all();
};

export default validate;
