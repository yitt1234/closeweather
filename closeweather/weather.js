const api ={
    base:"https://api.openweathermap.org/data/2.5/"
}
const API_KEY = "Your APi key"; 
const COORDS = 'coords';
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
if (evt.keyCode == 13) {
  getResults(searchbox.value);
}
}

function getResults (query) {
fetch(`${api.base}weather?q=${query}&units=metric&APPID=${API_KEY}`)
  .then(weather => {
    return weather.json();
  }).then(function(json){
    console.log(json)
    const babo = json.weather[0].main;
    const temp = json.main.temp;
    const weathericon = json.weather[0].icon;
    const weatherIconedrs = `https://openweathermap.org/img/wn/${weathericon}@2x.png`;
    const pleca = json.name;
    const wand = json.wind.speed;
    const humadity = json.main.humidity;
    const weatherDascription = json.weather[0].description;
    a.innerText=`${temp}°C`
    weatherIconImg.setAttribute('src', weatherIconedrs);
    wa.innerText = `${pleca}`
    wea.innerText = `  
        
        wind:${wand}m/s
        weather:${weatherDascription}
        humidity:${humadity}%
        
        
           `;
           document.body.style.backgroundImage = `url(${json.weather[0]['main']}.jpg)`;
        if (32  > temp > 25){
            tw.innerText = ``;
            alert("1")
        } else if (17 < temp < 25) {
            tw.innerText = ``;
            alert("2")
        } else if (5 < temp < 17) {
            tw.innerText = ``;
            alert("3")
        } else if (-10 < temp < 5) {
            tw.innerText = ``;
            alert("4")
        } else if (-100 < temp < -10) {
            tw.innerText = ``;
            alert("5")
        } else if (temp < -100) {
            tw.innerText = ` `;
            alert("6")
        } else if ( 56 > temp > 32 ) {
            tw.innerText = ``;
            alert("7")
        } else if (temp > 56) {
            tw.innerText = ` `;
            alert("8")
        } else {
            alert("9")
        }
  })
}


var name ="  error404"
const wea = document.querySelector('.weatherInfo');
const weatherIconImg = document.querySelector('.weatherIcon');
const wa = document.querySelector('.location')
const a = document.querySelector('.temperature')
const tw = document.querySelector('.tempwarm')
function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=en`)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json)
        const temperature = json.main.temp;
        const place = json.name;
        const weatherDescription = json.weather[0].description;
        const weatherIcon = json.weather[0].icon;
        const weatherIconAdrs = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        const wind = json.wind.speed;
        const humidity = json.main.humidity;
        wea.innerText = `  
        
        wind:${wind}m/s
        weather:${weatherDescription}
        humidity:${humidity}%
        
        
           `;
           
           document.body.style.backgroundImage = `url(${json.weather[0]['main']}.jpg)`;

        weatherIconImg.setAttribute('src', weatherIconAdrs);
        wa.innerText = `${place}`
        a.innerText = `${temperature}°C`
        if (32  > temperature > 25){
            tw.innerText = ``;
            alert("1")
        } else if (17 < temperature < 25) {
            tw.innerText = ``;
            alert("2")
        } else if (5 < temperature < 17) {
            tw.innerText = ``;
            alert("3")
        } else if (-10 < temperature < 5) {
            tw.innerText = ``;
            alert("4")
        }  else if (-100 < temperature < -10) {
            tw.innerText = ``;
            alert("5")
        }  else if (temperature < -100) {
            tw.innerText = ``;
            alert("6")
        } else if ( 56 > temperature > 32 ) {
            tw.innerText = ``;
            alert("7")
        } else if (temperature > 56) {
            tw.innerText = ` `;
            alert("8")
        } else {
            alert("9")
        }
        calculate();
        setInterval(notify, 21600000);
        window.onload = function () {
            if (window.Notification) {
                Notification.requestPermission();
            }
        }
 
        function calculate() {
            setTimeout(function () {
                notify();
            }, 1);
        }
 
        function notify() {
            if (Notification.permission !== 'granted') {
                
            }
            else {
                var notification = new Notification(place + ' Current weather', {
                    icon: weatherIconAdrs,
                    body: temperature + "°C " + weatherDescription
                });
 
               
            }
        }
    })
    .catch((handleError) => console.log("error:", handleError));
}
function init() {
    askForCoords()
}


function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    
}


function handleSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    getWeather(latitude, longitude);
    
    
    console.log("location access success")
    
    
}

function handleError() {
    //handleError가 났을떄 이 메시지를 띄움
   
}


        

init();
