import FormComp from "../../Components/Form/FormComp";
import { formInputs } from "../../DAL/data/formInputsData";
import * as api from "../../DAL/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginHandler } from "../../store/redux-store";
export default function SignUpPage() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const signUpFormInputs = {
    email: formInputs.email,
    usernameRegistration: formInputs.usernameRegistration,
    firstName: formInputs.firstName,
    lastName: formInputs.lastName,
    passwordRegistration: formInputs.passwordRegistration,
    confirmPassword: formInputs.confirmPassword,
  };

  const handleSubmit = async ([
    email,
    username,
    firstName,
    lastName,
    password,
  ]) => {
    setLoading(true);

    const res = await api.register(
      username.value,
      password.value,
      email.value,
      firstName.value,
      lastName.value
    );
    if (res.ok) {
      dispatch(loginHandler(res.username, res.firstName));
      for (const field in signUpFormInputs) {
        signUpFormInputs[field].value = "";
      }
      nav("/");
    } else {
      setError("Email or Username already exists");
    }
    setLoading(false);
  };
  return (
    <>
      <FormComp
        formInputs={signUpFormInputs}
        handleFormDetails={handleSubmit}
        formTitle="Sign Up"
        loading={loading}
        error={error}
      />
    </>
  );
}
