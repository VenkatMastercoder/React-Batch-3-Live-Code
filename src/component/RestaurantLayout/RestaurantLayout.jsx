import { Link } from "react-router-dom";
// import { restaurantData } from "../../api/dataSet";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

const RestaurantLayout = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [restaurantCardData, setRestaurantCardData] = useState([]);

  const [filterData, setFilterData] = useState([]);

  // const searchData = "Text"
  const [searchData, setSearchData] = useState();

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
      const data = await res.json();
      setRestaurantCardData(data.products);
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

  if (isLoading) {
    <p>Loafing</p>;
  } else {
    return (
      <>
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto grid grid-cols-1 gap-4 py-5">
            <div className="flex justify-start items-center gap-4">
              <a href="/banner">
                <button className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-4">
                  Goto Banner [ With Acnhor Tag]
                </button>
              </a>
              <Link to="/banner">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
                  Goto Banner [ With Link Tag ]
                </button>
              </Link>
            </div>
          </div>

          <div className="w-[90%] mx-auto grid grid-cols-1 pb-5">
            <div className="flex justify-start items-center gap-4">
              <button
                className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4 max-w-60"
                onClick={() => {
                  const moreRatingData = restaurantCardData.filter((e) => {
                    return e.rating >= 4.5;
                  });
                  setRestaurantCardData(moreRatingData);
                }}>
                Rating More than 4.5
              </button>

              <button
                className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4 max-w-60"
                onClick={() => {
                  const moreRatingData = restaurantCardData.filter((e) => {
                    return e.rating <= 4.5;
                  });
                  setRestaurantCardData(moreRatingData);
                }}>
                Rating less than 4.5
              </button>

              <button
                className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4 max-w-60"
                onClick={() => {
                  setRestaurantCardData(restaurantCardData);
                }}>
                All Restaurants
              </button>

              <div className="h-[100%] space-x-2">
                <input
                  value={searchData}
                  onChange={(e) => {
                    setSearchData(e.target.value);
                  }}
                  className="border border-gray-400 h-6 py-2"
                />
                <button
                  className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4 max-w-60"
                  onClick={() => {
                    const filterData = restaurantCardData.filter((e) => {
                      return e.name
                        .toLowerCase()
                        .includes(searchData.toLowerCase());
                    });
                    setFilterData(filterData);
                  }}>
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4">
            {filterData.map((restaurant) => {
              return (
                <RestaurantCard
                  key={uuidv4()}
                  name={restaurant.title}
                  image={restaurant.image_url}
                  description={restaurant.title}
                  location={restaurant.brand}
                  rating={restaurant.rating}
                  reviews={restaurant.title}
                />
              );
            })}
          </div>

          {/* {withCard(RestaurantCard)} */}

          {/* <NewBanner Banner={Banner} /> */}
        </div>
      </>
    );
  }
};

// HOC
// // New Function --> Return Enchan Function Component [ HOC ]

// const withCard = (A) => {
//   const NewCard = (props) => {
//     return (
//       <>
//         <p>New Card</p>
//         <A {...props} />
//       </>
//     );
//   };

//   return NewCard; // function component
// };

export default RestaurantLayout;
