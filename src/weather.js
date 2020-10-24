import React from "react";
import style from "./weather.module.css";

function Weather(props) {
    return (
        <div className={style.weather}>
            <div className={style.weatherHead}>
                <h1>{props.name}</h1>
                <img src={props.img} alt="" />
            </div>
            <p>Longitude: {props.lon} Latitude: {props.lat}</p>
            <h3>Temperature: {(props.temp - 273.15).toFixed(2)} &#8451;</h3>
            <h3>Feels Like: {(props.feelsLike - 273.15).toFixed(2)} &#8451;</h3>
            <div className={style.weatherHead}>
                <h4>Min Temp: {(props.minTemp-273).toFixed(2)} &#8451; &nbsp;</h4>
                <h4>Max Temp: {(props.maxTemp-273).toFixed(2)} &#8451;</h4>
            </div>
        </div>
    );
}

export default Weather;