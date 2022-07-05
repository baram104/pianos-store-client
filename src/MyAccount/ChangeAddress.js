export default function ChangeAddress() {
  return (
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
  );
}
