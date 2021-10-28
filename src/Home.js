import { useState } from "react";

const Home = () => {
  // let name = "mario";
  const [name, setName] = useState("mario");
  const [age, setAge] = useState("45");

  const handleClick = () => {
    setName("luigi");
    setAge("46");
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
