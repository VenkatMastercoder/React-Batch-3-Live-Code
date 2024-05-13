import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import RestaurantCard from "../RestaurantCard/RestaurantCard";

const RestaurantDetailsPage = () => {
  const data2 = useParams();

  //Local State Variable - 2
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const res = await fetch("https://apis.ccbp.in/products/" + data2.id, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU",
        },
      });
      const data = await res.json(); // Data
      setData(data);
      // console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    //Execute
    fetchData();
  }, [data2]);

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
              <button>Add Cart</button>
            </div>
            <p>similar_products</p>
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3"></div>{" "}
            {/* {data.similar_products.length === 0 ? (
              <p>fcs</p>
            ) : (
              data.similar_products.map((restaurant) => {
                return (
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
                );
              })
            )} */}
          </div>
        </div>
      </>
    );
  }
};

export default RestaurantDetailsPage;
