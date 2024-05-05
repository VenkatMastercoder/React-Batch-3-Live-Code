import DataSet from "../../api/dataSet";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { v4 as uuidv4 } from "uuid";

const RestaurantLayout = (e) => {
  console.log(e);
  return (
    <div className="2xl:container mx-auto">
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3">
        {DataSet.map((items) => {
          return (
            <RestaurantCard
              key={uuidv4()}
              image={items.image}
              name={items.name}
              city={items.city}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantLayout