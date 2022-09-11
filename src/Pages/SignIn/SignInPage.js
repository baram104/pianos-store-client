import { useContext, useState } from "react";
import FormComp from "../../Components/Form/FormComp";
import * as api from "../../DAL/api";
import { formInputs } from "../../DAL/data/formInputsData";
import UserContext from "../../store/user-context";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const nav = useNavigate();
  const ctx = useContext(UserContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
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
      const favProducts = await api.getFavProducts();
      ctx.setUserFavProducts(favProducts);
      ctx.onLogin(res.username, res.firstName);
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
