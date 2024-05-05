/* eslint-disable react/prop-types */
import "./index.css";
import ReactDOM from "react-dom/client";
import { v4 as uuidv4 } from "uuid";

const heading = <h1 className="bg-red-500">Heading</h1>; // jsx

const DataSet = [
  {
    name: "abc1",
    city: "red",
    image:
      "https://ik.imagekit.io/4z8covdo9/MERN%20BATCH%203/Card-Image.avif?updatedAt=1711983526",
  },
  {
    name: "abc2",
    city: "red",
    image:
      "https://ik.imagekit.io/4z8covdo9/MERN%20BATCH%203/Card-Image.avif?updatedAt=1711983526",
  },
  {
    name: "abc3",
    city: "red",
    image:
      "https://ik.imagekit.io/4z8covdo9/MERN%20BATCH%203/Card-Image.avif?updatedAt=1711983526",
  },
  {
    name: "abc4",
    city: "red",
    image:
      "https://ik.imagekit.io/4z8covdo9/MERN%20BATCH%203/Card-Image.avif?updatedAt=1711983526",
  },
  {
    name: "abc5",
    city: "red",
    image:
      "https://ik.imagekit.io/4z8covdo9/MERN%20BATCH%203/Card-Image.avif?updatedAt=1711983526",
  },
];

const Header = () => {
  return <p>Header Component</p>;
};

const Footer = () => {
  return <p>Footer Component</p>;
};

const HeroSection = () => {
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4">
          <div className="flex justify-center items-center">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png"
              alt="Image"
              className="h-52"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png"
              alt="Image"
              className="h-52"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png"
              alt="Image"
              className="h-52"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png"
              alt="Image"
              className="h-52"
            />
          </div>
        </div>
      </div>
    </>
  );
};

// List all the Restaurants
// para == props
const RestaurantLayout = (e) => {
  console.log(e);
  return (
    <div className="2xl:container mx-auto">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col justify-center items-start">
          <img src={e.image} alt="CardImage" className="h-48" />
          <p>{e.name}</p>
          <p>{e.name}</p>
        </div>
      </div>
    </div>
  );
};
// paraa
// function add(a, b) {
//   console.log(a + b);
// }
// // arg
// add(5, 5);
// add(10, 10);

// 11

// add(5,5) // arg
// add(6,6)
// Props - short form Property

const AppLayout = () => {
  return (
    <>
      <Header />
      <HeroSection />
      {DataSet.map((items) => {
        return (
          <RestaurantLayout
            key={uuidv4()}
            image={items.image}
            name={items.name}
            city={items.city}
          />
        );
      })}
      {/* <RestaurantLayout name={"abc"} city={"vjndj"} image={"jfhjksd"} />
      <RestaurantLayout name={"fvdf"} city={"dfv"} image={"fdv"} /> */}
      {/* {RestaurantLayout("name","city","jldfnhjl")} */}
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")); // <div id="root"></div>
root.render(<AppLayout />);
