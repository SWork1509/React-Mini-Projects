import React, { useState, useEffect } from 'react';
import Loading from './Loading'
import Tours from './Tours'
import { TOURS } from './ToursData';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project/';
function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = () => {
    fetch(url)
      .then(resp => {
        if (resp.status >= 200 && resp.status < 300) {
          return resp.json();
        } else {
          const err = resp.statusText;
          throw new Error(err);
        }
      })
      .then(tours => {
        console.log(tours);
        setIsLoading(false);
        setTours(tours);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      });

    // Method=2
    // try {
    //   const response = await fetch(url);
    //   const tours = await response.json();
    //   setIsError(false);
    //   setIsLoading(false);
    //   setTours(tours);
    //   console.log(tours);
    // } catch (error) {
    //   setIsError(true);
    //   setIsLoading(false);
    //   console.log(error);
    // }
  }

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if (isLoading) {
    return <main>
      <Loading />
    </main>
  }

  // if (isError) {
  //   return <main>
  //     <p>ERROR...</p>
  //   </main>
  // }

  if (tours.length) {
    return <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  } else {
    return <main>
      <div className="title">
        No Tours Found
      </div>
      <button className='btn' onClick={fetchTours}>Fetch Tours</button>
    </main>
  }
}

export default App
