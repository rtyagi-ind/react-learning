const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading1" }, "Hello world from React 1"),
    React.createElement("h2", { id: "heading2" }, "Hello world from React 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading1" }, "Hello world from React 1"),
    React.createElement("h2", { id: "heading2" }, "Hello world from React 2"),
  ]),
]);

const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello world from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
