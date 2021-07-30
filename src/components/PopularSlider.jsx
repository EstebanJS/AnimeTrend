import React, { useEffect, useState } from "react";
import { fetchPopular } from "../service/RestApi";
import SectionSlider from "./SectionSlider";

const PopularSlider = () => {
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
      const data = await fetchPopular();
      setData(data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return (
    <SectionSlider
      name="Most Popular Anime"
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default PopularSlider;
