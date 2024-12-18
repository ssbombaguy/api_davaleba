
import axios from "axios";
import {useState,useEffect} from "react";
const  App = () => {
    const [marsWeather, setMarsWeather] = useState({});
  useEffect(() => {
    axios.get(`https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0`)
        .then(function (response) {
          // handle success
          console.log(response.data);
            setMarsWeather(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
  }, []);
  return (
      <>
          {marsWeather.current  && marsWeather.AT ? <>
            <h1>{marsWeather.AT.ct}</h1>
          </> : null
          }
      {/*    viwvale magram ratomgac marsWeather.675 ze error aris arada postmani abrunebs magas */}
      </>

  )
}

export default App
