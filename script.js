const cities = [
    "Tokyo",
    "10001",
    "Moscow",
    "60607",
    "São Paulo",
    "Cairo",
    "Mumbai", 
]

const validateCityOrZipCode = value => {
  const cityRegex = /^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/
  const zipRegex =  /^[0-9]{5}/
    if(cityRegex.test(value)) 
      return "q"
      else if(zipRegex.test(value))
      return "zip"
      else return null
  }

  const unixTimeStampToHumanDateFormat  = unixTimeStamp => {
    const milliseconds = unixTimeStamp * 1000 
    const dateObject = new Date(milliseconds)
    const humanDateFormat = dateObject.toLocaleString() 
    return humanDateFormat
  }

  const getCurrentWeather = async location => {
    const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?"
    const API_KEY = "b91d0780da24d565dc33ac2ab8678d7c"
    let locationQueryString = validateCityOrZipCode(location)
    if(!locationQueryString) 
      return null     
    let url = `${BASE_URL}${locationQueryString}=${location}&units=metric&appid=${API_KEY}`
    let resolved = await fetch(url)
    let data = await resolved.json()  
    let dateTime = unixTimeStampToHumanDateFormat(data.dt - data.timezone)
    let timeZone 
      if(data.timezone/3600 > 0)  timeZone = `+${data.timezone/3600}`
      if(data.timezone/3600 <= 0) timeZone = data.timezone/3600   
        let formattedData = `Weather for ${data.name}, ${data.sys.country}\n 
        at ${dateTime} UTC${timeZone}\n
        The weather is ${data.weather[0].main}
        The temperature is currently ${Math.round(data.main.temp)}\xB0C\n
        Which feels like ${Math.round(data.main.feels_like)}\xB0C\n
        The high today will be ${Math.round(data.main.temp_max)}\xB0C with a low of ${Math.round(data.main.temp_min)}\xB0C\n
        The humidity is ${data.main.humidity}%`
    console.log(formattedData)
  }

for(let i = 0; i < cities.length; i++) {
  getCurrentWeather(cities[i])  
}

