import { useState } from "react";
import FormComp from "../../Components/Form/FormComp";
import * as api from "../../DAL/api";
import { formInputs } from "../../DAL/data/formInputsData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginHandler } from "../../store/redux-store";

export default function SignInPage() {
  const nav = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const loginFormInputs = {
    username: formInputs.username,
    password: formInputs.password,
  };

  const onSubmitHandler = async () => {
    setLoading(true);
    const res = await api.login(
      loginFormInputs.username.value,
      loginFormInputs.password.value
    );

    if (res.logged) {
      dispatch(loginHandler(res.username, res.firstName));
      for (const field in loginFormInputs) {
        loginFormInputs[field].value = "";
      }
      nav("/");
    } else {
      setError("Login Failed");
    }
    setLoading(false);
  };

  return (
    <>
      <FormComp
        formInputs={loginFormInputs}
        formTitle="Sign In"
        handleFormDetails={onSubmitHandler}
        loading={loading}
        error={error}
      />
    </>
  );
}
