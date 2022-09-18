import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (linkToSource) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const options = {
      method: "GET",
      url: linkToSource,
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "tech-news3.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [linkToSource]);
  return { data, loading, error };
};
