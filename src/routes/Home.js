import React, { Component } from 'react';
const API_KEY ='05542e36559de019967088aaa2ccb705';

class Home extends Component{
 
    constructor(props) {
      super(props)
      this.state = {
        temperauture: 0,
        name: '',
       
      }
    }
  
 
  getWeather= () => {


    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Seoul&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json =>{
      this.setState({
      temperauture: Math.floor(json.main.temp -273.15),
      name: json.weather[0].main,
      icon: json.weather[0].main
    });
  });
}

componentDidMount(){
  this.getWeather()
}
render(){
  const{ temperauture, name }= this.state;
 
  return(
    <div>
      <br></br>
    <h1>오늘의 날씨</h1>
  
    <h3>온도: {temperauture} 도</h3>
    <h3>날씨: {name}</h3>
    </div>
  );
}
}

export default Home;