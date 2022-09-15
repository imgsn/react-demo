import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      let response = await yelp.get("/search", {
        params: {
          location: "De",
          limit: 50,
          term: searchTerm,
        },
      });
      setResult(response.data.businesses);
      console.log(result);
    } catch (exeption) {
      setError(exeption);
    }
  };
  useEffect(() => {
    searchApi("pizza");
  }, []);
  return [searchApi, result, error];
};
