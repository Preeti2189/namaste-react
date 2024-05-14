/*const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);
console.log(heading); // RETURNS AN OBJECT
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


nested dom
<div>
    <div>
        <h1>I am h1 TAg</h1>
    </div>
</div>

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Iam a h1 tag")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

<div>
    <div>
        <h1>I am h1 TAg</h1>
        <h2>I am h2 Tag</h2>
    </div>
</div>


const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/
