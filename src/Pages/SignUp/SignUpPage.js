import FormComp from "../../Components/Form/FormComp";
import { formInputs } from "../../DAL/data/formInputsData";
import * as api from "../../DAL/api";
import UserContext from "../../store/user-context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignUpPage() {
  const nav = useNavigate();
  const ctx = useContext(UserContext);
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
    if (res) {
      ctx.onLogin(res.username, res.firstName);
      nav("/");
    } else {
      setError("Registration Failed");
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
