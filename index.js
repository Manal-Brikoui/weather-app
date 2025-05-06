const apikey = "299c9c502044bf11d1200f329c4b56ce";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".Weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if (response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";

    }else{
        var data = await response.json();
    //console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";
    if(data.weather[0].main==="Clouds"){
        WeatherIcon.src = "images/cloudy.png";
       
    }else if(data.weather[0].main==="Clear"){
        WeatherIcon.src="images/sun.png";
    }
    else if(data.weather[0].main==="Rain"){
        WeatherIcon.src="images/rainy-day.png";
    }
    else if(data.weather[0].main==="Drizzle"){
        WeatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main==="Mist"){
        WeatherIcon.src="images/sun-and-cloud-(mist).png";
    }
    else if(data.weather[0].main==="snow"){
        WeatherIcon.src="images/snow.png";
    }
    
    document.querySelector(".Weather").style.display ="block";
    document.querySelector(".error").style.display ="none"

    }
    
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);

});
