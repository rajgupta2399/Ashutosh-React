import React from "react";
import ReactDOM from "react-dom";

// const heading = document.createElement("h2");
// heading.innerHTML = "Hello World From Dynamic";

// const Root = document.getElementById("root1");
// Root.appendChild(heading);

// const heading1 = React.createElement(
//   "h1",
//   { id: "head" }, // -- Attribute
//   "Hello World From React by ash" // -- inner HTML
// );
// console.log(heading1);

// <div id="Parent">

//   <div id="child1">
//     <h1>Hello HTML</h1>
//     <h1>Hello JS</h1>
//   </div>

//   <div id="child2">
//     <h1>Hello React</h1>
//   </div>

// </div>;

// const parent = React.createElement("div", { id: "Parent" }, [
//   // div 1
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", { class: "head1" }, "Hello World from HTML"),
//     React.createElement("h2", { class: "head2" }, "Hello World from JS"),
//   ]),

//   // div 2
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h3", { class: "head3" }, "Hello World from React"),
//   ]),
// ]);
const parent = <h1>hello</h1>       // JSX - javascript XML

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
