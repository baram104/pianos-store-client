import { useContext } from "react";
import FormComp from "../../Components/Form/FormComp";
import * as api from "../../DAL/api";
import { formInputs } from "../../DAL/data/formInputsData";
import AuthContext from "../../store/auth-context";
export default function SignInPage() {
  const authCtx = useContext(AuthContext);

  const loginFormInputs = {
    username: formInputs.username,
    password: formInputs.password,
  };

  const onSubmitHandler = ([username, password]) => {
    api.login(username.value, password.value);
  };

  return (
    <>
      <FormComp
        formInputs={loginFormInputs}
        formTitle="Sign In"
        handleFormDetails={onSubmitHandler}
      />
      <button
        onClick={() =>
          fetch("http://localhost:3100/users", { credentials: "include" }).then(
            (res) => console.log(res.status)
          )
        }
      >
        click me
      </button>
    </>
  );
}
