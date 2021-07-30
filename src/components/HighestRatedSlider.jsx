import React, { useEffect, useState } from "react";
import { fetchHighestRated } from "../service/RestApi";
import SectionSlider from "./SectionSlider";

const HighestRatedSlider = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchHighestRated();
      setData(data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return (
    <SectionSlider
      name="Highest Rated Anime"
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default HighestRatedSlider;
