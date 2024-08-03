import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React!"
);

// JSX is a react element at the end of the day.
const jsxHeading = <h1>Namaste React !</h1>;

// React Component
const TitleComponent = () => {
  return <h1>Namaste React by Akshay Saini!</h1>;
};

const HeaderComponent = () => {
  return (
    <div className="container">
      <TitleComponent />
      <h1>Hello world from React Component</h1>
    </div>
  );
};
const App = () => {
  return (
    <>
      <HeaderComponent />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
