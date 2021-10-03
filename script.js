var searchitem = $("#formid")
var searchbar = $("#city")
var searchcity = []
//var url= "https://api.openweathermap.org/data/2.5/onecall?q=Atlanta&exclude=minutely&units=metric&current.temp=&daily.weather.description=&hourly.uvi=&hourly.wind_speed=&timezone=America/Atlanta&appid=913f8a0c9bf081d9e94bfd04b9efd30c"
var currenturl = ""

var currenttemp = "&current.temp="
var humidity = "&current.humidity="
var currentweather = "&daily.weather.description="
var uvindex = "&hourly.uvi="
var wind = "&hourly.wind_speed="



// click event
$(searchitem).click(async function (event) {
    event.preventDefault()
    searchitem = searchbar.val()
    currenturl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchitem + " ," + searchitem + " &current.temp=&current.humidity=&daily.weather.description=&hourly.uvi=&hourly.wind_speed=&appid=913f8a0c9bf081d9e94bfd04b9efd30c"
    // get api

    data = await fetch(currenturl)
    .then(result => result.json())
    .then(data => {
    
        
        return(data)
    })
    weatherdisplay(data)
        // .then(function (response) {
        //     if (response.status !== 200) {
        //         console.log("opps! something went wrong")
        //     }
        //     response.json()
        // })
        // .then((data) => {
        //     console.log(data)
        // })
        // .then(function (data) {
        //     console.log(data)
        // })
})


// create display for the fetch data
  function weatherdisplay(data){
      
    var div = document.getElementById("weatherdata")
    div.innerHTML = data.name
    
    }
}






// local storage
function save(cityname) {
    localStorage.setItem(city.id, city.value)

}

for (var key in localStorage) {
    var citiesrememberd = $(key)
    citiesrememberd.value = localStorage.getItem(key)
}

