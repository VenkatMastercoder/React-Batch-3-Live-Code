// import { cardImage } from "../../assets/images";
// import cardImg from "../../assets/cardImg.jpeg";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const RestaurantCard = (restaurant) => {
  return (
    <div
      key={restaurant.id}
      className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* <img
        className="w-full h-44 object-fit"
        src={cardImg}
        alt="Restaurant Image"
      /> */}
      <div>
        <LazyLoadImage
          alt="Restaurant Image"
          className="w-full h-[90%] object-full"
          src={restaurant.image} // use normal <img> attributes as props
          height={100}
          width={500}
          effect="blur"
        />
      </div>

      <div className="px-6 py-4 mt-2">
        <div className="font-bold text-xl mb-2">{restaurant.name}</div>
        <p className="text-gray-700 text-base">{restaurant.description}</p>
        <p className="text-gray-700 text-base mt-2">
          Location: {restaurant.location}
        </p>
        <p className="text-gray-700 text-base">Cuisine: {restaurant.cuisine}</p>
        <p className="text-gray-700 text-base">
          Rating: {restaurant.rating} ({restaurant.reviews} reviews)
        </p>
        <Link to={"/restaurant/" + restaurant.id}>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RestaurantCard;
