const RestaurantCard = (restaurant) => {
  return (
    <div
      key={restaurant.id}
      className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-44 object-fit" src={restaurant.image} alt="Restaurant Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{restaurant.name}</div>
        <p className="text-gray-700 text-base">{restaurant.description}</p>
        <p className="text-gray-700 text-base mt-2">
          Location: {restaurant.location}
        </p>
        <p className="text-gray-700 text-base">Cuisine: {restaurant.cuisine}</p>
        <p className="text-gray-700 text-base">
          Rating: {restaurant.rating} ({restaurant.reviews} reviews)
        </p>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;
