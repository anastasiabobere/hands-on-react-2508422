import React from "react";
// class Welcome extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
const Welcome = (props) => {
  return <h1>Welcome {props.name}</h1>;
};

function App() {
  const name = "StarGazers";

  return (
    <div className="container">
      <article>
        {" "}
        <hgroup>
          <img src="images/group.svg" alt="StarGazers" />
          <Welcome name="Stars" />
          <Welcome name={name} />
          <p>
            Members of an <b>intergalactic alliance</b> paving the way for peace
            and benevolence among all species. They are known for their
            enthusiasm for science, for their love of fun, and their dedication
            to education.
          </p>
          <button className="outline" onClick={() => alert("Hallo")}>
            Click me
          </button>
        </hgroup>
      </article>
    </div>
  );
}
export default App;
