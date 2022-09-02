import { useEffect, useState } from "react";

export default function useFetch(apiFunc, funcArgs, dependencies) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFunc(funcArgs)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [dependencies]);

  return { error, data, loading };
}
