import { useEffect, useState } from "react";
import getTrendingTerms from "../../api/trending";
import Category from "../Category";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    getTrendingTerms({ signal: controller.signal })
      .then(setTrends)
      .catch((err) => {});

    return () => controller.abort();
  }, []);

  return <Category name="Tendencias" options={trends} />;
}
