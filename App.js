// const heading = document.createElement("h2");
// heading.innerHTML = "Hello World From Dynamic";

// const Root = document.getElementById("root1");
// Root.appendChild(heading);

const heading1 = React.createElement(
  "h1",
  { id: "head" }, // -- Attribute
  "Hello World From React by ash" // -- inner HTML
);

<div id="Parent">    

  <div id="child1">
    <h1>Hello HTML</h1>
    <h1>Hello JS</h1>
  </div>

  <div id="child2">
    <h1>Hello React</h1>
  </div>

</div>;

console.log(heading1);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);
