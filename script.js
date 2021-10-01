var searchitem =$("#formid")
var searchbar= $("#city")
var url= "https://api.openweathermap.org/data/2.5/onecall?lat=34.0754&lon=84.2941&exclude={part}&appid=913f8a0c9bf081d9e94bfd04b9efd30c"
var currenttemo= "&current.temp="
var humidity= "&current.humidity="
var currentweather= "&daily.weather.description="
var uvindex= "&hourly.uvi="
var wind= "&hourly.wind_speed="



// click event
$(searchitem).click(function(event){
    event.preventDefault()
    searchitem = searchbar.val()
    console.log(searchitem)
})


// get api

fetch(url)
.then(function(response){
    if( response.status!== 200){
    console.log( "opps! something went wrong")
    }
response.json()
})
.then(function(data){
    console.log(response)
})


    

// local storage
function save(cityname){
    localStorage.setItem(city.id, city.value)

}

for( var key in localStorage){
    var citiesrememberd= $(key)
    citiesrememberd.value = localStorage.getItem(key)
}

