import { useParams } from "react-router-dom";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import useFetchData from "../../hooks/useFetchData";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const RestaurantDetailsPage = () => {
  const data2 = useParams(); // data2.id
  // const { id } = useParams(); // id
  const { addCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const { data, isLoading } = useFetchData(data2.id);

  {
    return isLoading ? (
      <p>Loading</p>
    ) : (
      <>
        <pre>{JSON.stringify(data)}</pre>
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2">
            <div>
              <img src={data.image_url} alt={data.title} />
            </div>
            <div>
              <p>{data.title}</p>
              <p>{data.style}</p>
              <p>{data.price}</p>
              <p>{data.description}</p>
              <p>{data.brand}</p>
              <p>{data.total_reviews}</p>
              <p>{data.rating}</p>
              <p>{data.availability}</p>
              <button
                onClick={() => {
                  addCart({ ...data, quantity, u_id: uuidv4() });
                }}>
                Add Cart
              </button>

            </div>
            <p>similar_products</p>
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3"></div>{" "}
            {!data.similar_products || data.similar_products.length === 0 ? (
              <p>No Similar Product</p>
            ) : (
              data.similar_products.map((restaurant) => (
                <div key={restaurant.id}>
                  <RestaurantCard
                    id={restaurant.id}
                    name={restaurant.title}
                    image={restaurant.image_url}
                    description={restaurant.title}
                    location={restaurant.brand}
                    rating={restaurant.rating}
                    reviews={restaurant.title}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </>
    );
  }
};

export default RestaurantDetailsPage;
