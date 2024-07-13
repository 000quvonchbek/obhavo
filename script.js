const container = document.querySelector('.container');
const serach = document.querySelector('.serach-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

serach.addEventListener('click', () => {

    const APIKey = 'a6873c03c3ea1653821612562b3dcc31'; // Yangi API kalit
    const city = document.querySelector('.serach-box input').value;

    if (city === '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(json => {
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');    
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch(json.weather[0].main) {
                case 'Clear':
                    image.src = 'clear.png';
                    break;
                
                case 'Rain':
                    image.src = 'rain.png';
                    break;

                case 'Snow':
                    image.src = 'snow.png';
                    break;

                case 'Clouds':
                    image.src = 'cloud.png';
                    break;

                case 'Mist':
                    image.src = 'mist.png';
                    break;

                case 'Haze':
                    image.src = 'haze.png';
                    break;

                default:
                    image.src = 'cloud.png';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Shahar nomi noto‘g‘ri yoki API kalitda muammo bor.');
        });
});
