var searchitem =$("#formid")
var searchbar= $("#city")
var url= "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={913f8a0c9bf081d9e94bfd04b9efd30c}"
var currenttemo= "&current.temp="
var humidity= "&current.humidity"
var currentweather= "&daily.weather.description="
var uvindex= "&hourly.uvi="
var wind= "&hourly.wind_speed"



// click event
$(searchitem).click(function(event){
    event.preventDefault()
    searchitem = searchbar.val()
    console.log(searchitem)
})


// get api


    

// local storage
function save(cityname){
    localStorage.setItem(city.id, city.value)

}

for( var key in localStorage){
    var citiesrememberd= $(key)
    citiesrememberd.value = localStorage.getItem(key)
}

