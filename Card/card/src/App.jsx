import React from "react";
import "./App.css";
import Card from "./Card.jsx";
function App() {
  return (
    <div className="Cards-container">
      <Card
        img="/images/img1.jpg"
        petName="Whiskerson"
        telephone="(212)555-123"
        email="whiskaz@catnap.meow"
      />
      <Card
        img="/images/img2.jpg"
        petName="Sara"
        telephone="(212) 555-2345"
        email="whiskaz@catnap.meow"
      />
      <Card
        img="/images/img3.jpg"
        petName="Jilly"
        telephone="(212) 555-4567"
        email="whiskaz@catnap.meow"
      />
      <Card
        img="/images/img4.jpg"
        petName="Ginger"
        telephone="(212)555-123"
        email="whiskaz@catnap.meow"
      />
    </div>
  );
}

export default App;
