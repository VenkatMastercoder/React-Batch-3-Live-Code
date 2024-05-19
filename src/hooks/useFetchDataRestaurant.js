import { useEffect, useState } from "react";

const useFetchDataRestaurant = () => {
  const [isLoading, setIsLoading] = useState(false); // Loader or Shimmer

  const [restaurantCardData, setRestaurantCardData] = useState([]); // store the data

  const [filterData, setFilterData] = useState([]);

  const fetchData = async () => {
    // API CALL
    setIsLoading(true);
    try {
      const res = await fetch("https://apis.ccbp.in/products/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU",
        },
      });
      const data = await res.json(); // 50 card data
      setRestaurantCardData(data.products);
      console.log(data);
      setFilterData(data.products);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { isLoading, restaurantCardData, filterData };
};

export default useFetchDataRestaurant;
