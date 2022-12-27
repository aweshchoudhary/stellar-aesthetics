import { useState, useEffect } from "react";
import api from "../Api/api";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetch = async () => {
      setLoading(true);
      setData(null);
      setError(null);
      await api
        .get(url, { signal: controller.signal })
        .then((res) => {
          //checking for multiple responses for more flexibility
          //with the url we send in.
          res.data.content && setData(res.data.content);
          res.data && setData(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError("An error occurred. Awkward..");
        });
    };
    fetch();
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}
export default useFetch;
