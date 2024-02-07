import React, { Component } from "react";
import "./App.scss";
import Form from "./Form";
import Result from "./Result";
const APIKey = "f7767ab6f7be7514f9b14ba08d93410d";
class App extends Component {
  state = {
    value: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false,
    description: "",
    image: "",
  };

  handleCitySubmit = (e) => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric&lang=pl`;

    fetch(API)
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw Error("Nie udało się");
      })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          value: "",
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          err: false,
          city: this.state.value,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          humidity: data.main.humidity,
        });
      })
      .catch((err) => {
        this.setState({
          err: true,
          city: this.state.value,
        });
      });
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <Form
            value={this.state.value}
            change={this.handleInputChange}
            submit={this.handleCitySubmit}
          />
          <Result weather={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
