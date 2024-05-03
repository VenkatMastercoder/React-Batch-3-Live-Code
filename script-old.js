import React from "react";
import ReactDOM from "react-dom"

// const div = document.getElementById("root") //  <div id="root"></div>

// const heading = document.createElement("h1") // <h1></h1>

// heading.textContent = "Heading" // <h1>Heading</h1>

// div.appendChild(heading)

// const div = document.getElementById("root")

const heading = React.createElement("h1", null, "Heading"); // <h1>Heading</h1>

// <p class="para">Paragrahp</p>
const paragraph = React.createElement("p", { class: "para" }, "Paragraph");

// <div class="a">
//   <div class="b">
//     <h1>Hello World</h1>
//   </div>
// </div>

const nestedElement = React.createElement("div", { class: "a" }, [
  React.createElement("div", { class: "b" }, [
    React.createElement("h1", null, "Hello World"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));





export default script

root.render(nestedElement);
