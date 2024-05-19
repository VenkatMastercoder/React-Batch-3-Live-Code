import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Footer = () => {
  const userData = useContext(UserContext);
  return <p className="bg-black text-white"> {userData.name}</p>;
};

export default Footer;
