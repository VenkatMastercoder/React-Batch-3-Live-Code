import useOnlineStatus from "../../hooks/useOnlineStatus";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

const Navbar2 = () => {
  const [show, setShow] = useState(false);
  const data = useOnlineStatus();

  const userData = useContext(UserContext);
  console.log(userData);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className="2xl:container bg-red-500 mx-auto">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 bg-green-600">
        {/* logo */}
        <div className="bg-yellow-50 flex justify-between">
          <p>{userData.userName}</p>
          <div>
            {/* Menu Toggle Icon */}
            {show ? (
              <svg
                onClick={toggle}
                className="block md:hidden"
                viewBox="0 0 21 21"
                fill="currentColor"
                height="1em"
                width="1em"
                aria-label="Close menu">
                <g fill="none" fillRule="evenodd" stroke="currentColor">
                  <path d="M15.5 15.5l-10-10zM15.5 5.5l-10 10" />
                </g>
              </svg>
            ) : (
              <svg
                onClick={toggle}
                className="block md:hidden"
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
                aria-label="Open menu">
                <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
              </svg>
            )}
          </div>
        </div>
        {/* content */}
        <div className={show ? "block" : "hidden md:block"}>
          <ul className="bg-slate-500 flex flex-col justify-center items-center md:flex-row md:justify-end gap-4">
            <li id="home">
              <Link to="/" onClick={toggle}>
                {/* onClick - TO GET Auto Close Feature */}
                Home
              </Link>
            </li>
            <Link to="/offer" onClick={toggle}>
              Help
            </Link>
            <Link to="/cart" onClick={toggle}>
              cart
            </Link>
            <li id="offer">Offer</li>
            <li>Status:{data ? "✅" : "❌"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
