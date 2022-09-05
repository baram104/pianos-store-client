import MyWishList from "./MyWishList";
import FormComp from "../../Components/Form/FormComp";
import { formInputs } from "../../DAL/data/formInputsData";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function MyAccount() {
  const changePasswordForm = {
    oldPassword: formInputs.oldPassword,
    passwordRegistration: {
      ...formInputs.passwordRegistration,
      title: "New Password",
    },
    confirmPassword: formInputs.confirmPassword,
  };
  const changeNameForm = {
    FirstName: formInputs.firstName,
    lastName: formInputs.lastName,
  };

  return (
    <div className="container-fluid container-lg mt-5 text-primary ">
      <Row>
        <div className="col-lg-3 col-12">
          <Col>
            <p className="fs-3">
              <strong>Hello, Bar</strong>
            </p>
            <div className="line"></div>
          </Col>
          <Col className="mt-2">
            <button className="btn" type="button">
              <p className="fs-4 text-primary">Change Details</p>
            </button>
          </Col>
          <Col>
            <button className="btn mt-2" type="button">
              <p className="fs-4 text-primary">My Wishlist</p>
            </button>
          </Col>
        </div>
        <Col>
          <FormComp
            formTitle="Change Password"
            handleFormDetails={() => {}}
            formInputs={changePasswordForm}
          />
          <FormComp
            formTitle="Change Name"
            handleFormDetails={() => {}}
            formInputs={changeNameForm}
          />
          <MyWishList />
        </Col>
      </Row>
    </div>
  );
}
export default MyAccount;
