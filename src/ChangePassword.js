export default function ChangePassword() {
  return (
    <form className="mb-5">
      <div className="mb-3">
        <label for="current_password" className="form-label">
          Current Password
        </label>
        <input type="password" className="form-control" id="current_password" />
      </div>
      <div className="mb-3">
        <label for="new_password" className="form-label">
          New Password
        </label>
        <input type="password" className="form-control" id="new_password" />
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
  );
}
