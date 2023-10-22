import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import getRandomNumber from "./utils/getRandomNumber";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";
import FormLocation from "./components/FormLocation";
import Loader from "./components/Loader";
 
 

function App() {
  //Se llama la api
  const [location, setLocation] = useState();
  const [idLocation, setIdLocation] = useState(getRandomNumber(126));
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

 

  //Aqui ejecutamos la api
  useEffect(() => {
    //Hacemos la peticion con axios
    //Al get le pasamos la url.
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
    setIsLoading(true)
    axios
      .get(url)
      .then((res) => {
        setLocation(res.data);
        setHasError(false);
      })
      .catch((err) => {
        console.log(err);
        setHasError(true);
      })
       .finally(() => {
        setIsLoading(false)
       })
  }, [idLocation]);

 

  return (
    <div className="main">
      <div className="title">

        {/* <img className="title__frame" src="./images/frame.png" alt="" /> */}
      <h1 className="title">Rick and Morty App</h1>
      <FormLocation setIdLocation={setIdLocation} />
      
      </div>

      {
      isLoading
      ? (<Loader/>)
      : (
   
        hasError ? (
          <h1 className="err">❌ Hey! you must provide an id from 1 to 126😓</h1>
        ) : (
          <>
            <LocationInfo location={location} />
            <div className="resident-container">
              {location?.residents.map((url) => (
                <ResidentCard key={url} url={url} />
              ))}
            </div>
   
          </>
        )
      )
      
      
   
      
      }
    </div>
  );
}

export default App;
