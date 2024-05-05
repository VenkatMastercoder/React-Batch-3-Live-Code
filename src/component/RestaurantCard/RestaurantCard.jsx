const RestaurantCard = (e) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={e.image} alt="CardImage" className="h-48" />
      <p>{e.name}</p>
      <p>{e.name}</p>
    </div>
  );
};

export default RestaurantCard