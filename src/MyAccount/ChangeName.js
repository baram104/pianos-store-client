export default function ChangeName() {
  return (
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
  );
}
