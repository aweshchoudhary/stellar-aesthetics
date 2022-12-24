import { useState, useEffect } from "react";
import api from "../Api/api";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);
    const controller = new AbortController();
    api
      .get(url, { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        //checking for multiple responses for more flexibility
        //with the url we send in.
        res.data.content && setData(res.data.content);
        res.data && setData(res.data.data);
      })
      .catch((err) => {
        setLoading(false);
        setError("An error occurred. Awkward..");
      });
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}
export default useFetch;
