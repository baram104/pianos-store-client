import FormComp from "../../Components/Form/FormComp";
import { formInputs } from "../../DAL/data/formInputsData";
export default function SignInPage() {
  const loginFormInputs = {
    username: formInputs.username,
    password: formInputs.password,
  };
  return (
    <>
      <FormComp formInputs={loginFormInputs} formTitle="Sign In" />
    </>
  );
}
