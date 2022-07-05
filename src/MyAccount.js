import ChangeAddress from "./ChangeAddress";
import ChangeEmail from "./ChangeEmail";
import ChangeName from "./ChangeName";
import ChangePassword from "./ChangePassword";

function MyAccount() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3">
          <p className="fs-3">Hello, Bar</p>
          <div className="dropdown">
            <button
              className="btn"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <p className="fs-4">Change Details</p>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a href="#" className="dropdown-item">
                  Change Password
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Name
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Address
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Email
                </a>
              </li>
            </ul>
          </div>

          <button className="btn mt-2">
            <p className="fs-4">My wishlist</p>
          </button>
        </div>
        <div className="col-4">
          <ChangePassword />
          <ChangeAddress />
          <ChangeName />
          <ChangeEmail />
        </div>
      </div>
    </div>
  );
}
export default MyAccount;
