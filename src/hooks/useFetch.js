import { useState } from "react";

export default function useFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const httpRequest = async (url, options) => {
    try {
      const res = await fetch(url, options);
      if (options && options.method) {
        return;
      }
      setData(await res.json());
    } catch (err) {
      setError(err.message);
    }
  };

  return { httpRequest, error, data };
}
