import { Link } from "react-router-dom";
import { restaurantData } from "../../api/dataSet";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { v4 as uuidv4 } from "uuid";

const RestaurantLayout = (e) => {
  console.log(e);
  return (
    <>
      <a href="/banner">
        <button>Goto Banner</button>
      </a>
      <Link to="/banner">
        <button>Goto Banner</button>
      </Link>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4">
          {restaurantData.map((restaurant) => {
            return (
              <RestaurantCard
                key={uuidv4()}
                name={restaurant.name}
                image={restaurant.image}
                description={restaurant.description}
                location={restaurant.location}
                rating={restaurant.rating}
                reviews={restaurant.reviews}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RestaurantLayout;
