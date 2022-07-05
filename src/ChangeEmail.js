export default function ChangeEmail() {
  return (
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
        <input type="email" className="form-control" id="confirm_new_email" />
      </div>

      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}
