
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0134a3babdmsh366a1b3b3b7a623p15d3edjsn7294445bd844',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getweather=(city)=>{
cityName.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        
        console.log(response)
        
        // cloud_pct.innerHTML = response.cloud_pct

        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        wind_degrees2.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        
    })
    .catch(response => console.error(err));
}

submit.addEventListener("click", (e)=>{
e.preventDefault()  //reload nhi krega page ko
getweather(city.value)
})

getweather("Delhi");


const Lucknow=(Lucknow)=>{

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + Lucknow, options)
    .then(response => response.json())
    .then((response) => {
        
        console.log(response)
        
        cloud_pct.innerHTML = response.cloud_pct
        temp3.innerHTML = response.temp
        feels_like3.innerHTML = response.feels_like
        humidity3.innerHTML = response.humidity
        min_temp3.innerHTML = response.min_temp
        max_temp3.innerHTML = response.max_temp
        wind_speed3.innerHTML = response.wind_speed
        wind_degrees3.innerHTML = response.wind_degrees
        sunrise3.innerHTML = response.sunrise
        sunset3.innerHTML = response.sunset
        
    })
    .catch(response => console.error(err));
}

Lucknow("Lucknow");

