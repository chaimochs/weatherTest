const cities: string[] = [
    "Tokyo",
    "10001",
    "Moscow",
    "60607",
    "São Paulo",
    "Cairo",
    "Mumbai", 
]

const validateCityOrZipCode = (value: string): string | null => {
  const cityRegex: RegExp = /^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/
  const zipRegex: RegExp =  /^[0-9]{5}/
    if(cityRegex.test(value)) 
      return "q"
      else if(zipRegex.test(value))
      return "zip"
      else return null
  }

  const unixTimeStampToHumanDateFormat  = (unixTimeStamp: number): string => {
    const milliseconds: number = unixTimeStamp * 1000 
    const dateObject: Date = new Date(milliseconds)
    const humanDateFormat: string = dateObject.toLocaleString('en-US',{hour12:false})
    return humanDateFormat
  }

 const makeTimeZoneString = (zone: number): string | undefined  => {
    if(zone/3600 > 0) return `+${zone/3600}`
    if(zone/3600 < 0) return String(zone/3600)
    if(zone/3600 === 0) return ""    
  }

  const getCurrentWeather = async (location: string) => {
    const BASE_URL: string = "http://api.openweathermap.org/data/2.5/weather?"
    const API_KEY: string = "b91d0780da24d565dc33ac2ab8678d7c"
    let locationQueryString: string | null = validateCityOrZipCode(location)
    if(!locationQueryString) 
      return null     
    let url: string = `${BASE_URL}${locationQueryString}=${location}&units=metric&appid=${API_KEY}`
    let weatherData = await fetch(url)
    let data = await weatherData.json() 
      let dateTime: string = unixTimeStampToHumanDateFormat(data.dt - data.timezone)
      let timeZoneString: string | undefined = makeTimeZoneString(data.timezone)
          let formattedData: string = `Weather for ${data.name}, ${data.sys.country}\n 
          at ${dateTime} local time (UTC${timeZoneString}\n
          The weather is ${data.weather[0].main}
          The temperature is currently ${Math.round(data.main.temp)}\xB0C\n
          Which feels like ${Math.round(data.main.feels_like)}\xB0C\n
          The high today will be ${Math.round(data.main.temp_max)}\xB0C with a low of ${Math.round(data.main.temp_min)}\xB0C\n
          The humidity is ${data.main.humidity}%`
     return formattedData
  }

for(let i = 0; i < cities.length; i++) {
  getCurrentWeather(cities[i])
  .then(res => {
    console.log(res)
  })
}

module.exports = { validateCityOrZipCode, 
                   unixTimeStampToHumanDateFormat, 
                   makeTimeZoneString }
