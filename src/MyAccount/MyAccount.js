import ChangeAddress from "./ChangeAddress";
import ChangeEmail from "./ChangeEmail";
import ChangeName from "./ChangeName";
import ChangePassword from "./ChangePassword";
import MyWishList from "./MyWishList";
import FormComp from "../FormComp";
import { formInputs } from "../data/formInputsData";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function MyAccount() {
  const changePasswordForm = {
    oldPassword: formInputs.oldPassword,
    newPassword: { ...formInputs.passwordRegistration, title: "New Password" },
    confirmPassword: formInputs.confirmPassword,
  };

  return (
    <div className="container mt-5 text-primary">
      <Row>
        <div className="col-3">
          <Col>
            <p className="fs-3">Hello, Bar</p>
          </Col>
          <Col>
            <button className="btn" type="button">
              <p className="fs-4 text-primary">Change Details</p>
            </button>
          </Col>
          <Col>
            <button className="btn mt-2">
              <p className="fs-4">My wishlist</p>
            </button>
          </Col>
        </div>
        <Col>
          <FormComp
            formTitle="Change Password"
            handleFormDetails={() => {}}
            formInputs={changePasswordForm}
          />
        </Col>
      </Row>

      {/* <MyWishList /> */}
    </div>
  );
}
export default MyAccount;
