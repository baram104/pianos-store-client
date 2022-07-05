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
          <form className="mb-5">
            <div className="mb-3">
              <label for="current_password" className="form-label">
                Current Password
              </label>
              <input
                type="password"
                className="form-control"
                id="current_password"
              />
            </div>
            <div className="mb-3">
              <label for="new_password" className="form-label">
                New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="new_password"
              />
            </div>
            <div className="mb-3">
              <label for="confirm_new_password" className="form-label">
                Confirm New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirm_new_password"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
          <form className="mb-5">
            <div className="mb-3">
              <label for="first_name" className="form-label">
                First name
              </label>
              <input type="text" className="form-control" id="first_name" />
            </div>
            <div className="mb-3">
              <label for="last_name" className="form-label">
                Last name
              </label>
              <input type="text" className="form-control" id="last_name" />
            </div>

            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
          <form className="mb-5">
            <div className="mb-3">
              <label for="city" className="form-label">
                City
              </label>
              <input type="text" className="form-control" id="city" />
            </div>
            <div className="mb-3">
              <label for="address" className="form-label">
                Address
              </label>
              <input type="text" className="form-control" id="address" />
            </div>
            <div className="mb-3">
              <label for="zipcode" className="form-label">
                Zipcode
              </label>
              <input type="text" className="form-control" id="zipcode" />
            </div>

            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
          <form className="mb-5">
            <div className="mb-3">
              <label for="current_email" className="form-label">
                Current Email
              </label>
              <input type="email" className="form-control" id="current_email" />
            </div>
            <div className="mb-3">
              <label for="new_email" className="form-label">
                New Email
              </label>
              <input type="email" className="form-control" id="new_email" />
            </div>
            <div className="mb-3">
              <label for="confirm_new_email" className="form-label">
                Confirm New Email
              </label>
              <input
                type="email"
                className="form-control"
                id="confirm_new_email"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default MyAccount;
