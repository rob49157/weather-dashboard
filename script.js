var searchitem =$("#formid")
var searchbar= $("#city")
//var url= "https://api.openweathermap.org/data/2.5/onecall?q=Atlanta&exclude=minutely&units=metric&current.temp=&daily.weather.description=&hourly.uvi=&hourly.wind_speed=&timezone=America/Atlanta&appid=913f8a0c9bf081d9e94bfd04b9efd30c"
var currenturl="https://api.openweathermap.org/data/2.5/weather?q=London&appid=913f8a0c9bf081d9e94bfd04b9efd30c"

var currenttemp= "&current.temp="
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

fetch(currenturl)
.then(function(response){
    if( response.status!== 200){
    console.log( "opps! something went wrong")
    }
response.json()
})
.then(function(data){
    appendData(data)
    
    // console.log(searchitem)
})

// create display for the fetch data
function weatherdisplay(){
    var div= document.getElementById("weatherdata")
    for( i=0; i<data.lenght; i++){
        var creatercontainer= document.createElement(div)
        creatercontainer.innerHTML= data[i]
        div.appendChild(creatercontainer)
    }
}



    

// local storage
function save(cityname){
    localStorage.setItem(city.id, city.value)

}

for( var key in localStorage){
    var citiesrememberd= $(key)
    citiesrememberd.value = localStorage.getItem(key)
}

