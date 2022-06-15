import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  //Remove the data function

  const removeTour = (id) => {
    //if id doesn't match means it shouldnot be remove
    //so it is stored in the new array and its filtered by filter
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  //Fetching data to display
  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      //console.log(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  //Multiple returns
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  //No tours left, i.e if we delete then
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/*Add removeTour prop to <Tours/> then to <Tour/>*/}
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
