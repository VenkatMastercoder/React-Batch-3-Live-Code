import React from "react";
import ReactDOM from "react-dom";

// <h1>Hello</h1>

// React.createElement() ==> object => HTML

// JSX ==> React.createElement() ==> object => HTML

const headingElement = React.createElement("h1", null, "Hello");

const paragraphElement = <p>Hello World</p>;

const Header = () => {
  return (
    <>
      <p>Para - 2</p>
      <p>Para - 1</p>
      <>
        {5 + 3}
        <p>jsdfvhnslnh</p>
      </>
    </>
  );
};

const Footer = () => {
  return <p>Footer Component</p>;
};

const AppLayout = () => {
  return (
    <>
      <p>Hello WOrld</p>
      <Header />
      <Footer />
      {Header()}
      {}
    </>
  );
};

console.log("jsx", paragraphElement);

console.log("reactCREATE ELEMENT:", headingElement);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
