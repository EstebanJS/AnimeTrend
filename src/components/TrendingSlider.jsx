import React, { useEffect, useState } from "react";
import { fetchTrending } from "../service/RestApi";
import SectionSlider from "./SectionSlider";

const TrendingSlider = () => {
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
      const data = await fetchTrending();
      setData(data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return (
    <SectionSlider
      name="Trending This Week"
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default TrendingSlider;
