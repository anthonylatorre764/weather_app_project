console.log('testing')

const apiKey = "1d82d0aa5308c123ce2c015a8be0247d"


let getUserInput = (event) => {
    event.preventDefault()
    const zip_code = theForm[0].value
    console.log(zip_code)
    weatherData(zip_code)

}


const theForm = document.getElementsByTagName('form')[0]
console.log(theForm)
theForm.addEventListener('submit', getUserInput)


const weatherBox = document.getElementById('weatherBox')


const weatherData = async (zip_code) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip_code},us&appid=1d82d0aa5308c123ce2c015a8be0247d`)
    const data = await response.json()
    console.log(data)
    current_temp = Math.round((data.main.temp - 273.15) * (9/5) + 32)
    high_temp = Math.round((data.main.temp_max - 273.15) * (9/5) + 32)
    low_temp = Math.round((data.main.temp_min - 273.15) * (9/5) + 32)
    weatherBox.innerHTML = `
    <div id="weatherCard">
        <p>${data.name}</p>
        <h1>${current_temp}&deg F</h1>
        <p>${data.weather[0].main}</p>
        <div id="h_l_box">
            <p class="h_or_l">H: ${high_temp}&deg F</p>
            <p class="h_or_l">L: ${low_temp}&deg F</p>    
        </div>
        <p id="humid">Humidity: ${data.main.humidity}%</p>
    </div>
    `
}
