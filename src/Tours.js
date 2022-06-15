import React from "react";
import Tour from "./Tour";

//To display the data on the screen which was fetched
//in App.js file
//Directly destructing the props here with {}
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          //{...tour} means the <Tour/> component
          //has access to all the properties that are
          //the object
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
