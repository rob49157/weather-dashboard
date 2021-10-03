var searchitem = $("#formid")
var searchbar = $("#city")
var searchcity = []
//var url= "https://api.openweathermap.org/data/2.5/onecall?q=Atlanta&exclude=minutely&units=metric&current.temp=&daily.weather.description=&hourly.uvi=&hourly.wind_speed=&timezone=America/Atlanta&appid=913f8a0c9bf081d9e94bfd04b9efd30c"
var currenturl = ""





// click event
$(searchitem).click(async function (event) {
    event.preventDefault()
    searchitem = searchbar.val()
    currenturl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchitem + " ," + searchitem + " &current.temp=&current.humidity=&daily.weather.description=&current.uvi=&hourly.wind_speed=&appid=913f8a0c9bf081d9e94bfd04b9efd30c"
    // get api

    data = await fetch(currenturl)
    .then(result => result.json())
    .then(data => {
    
        
        return(data)
    })
    weatherdisplay(data)
      
})

// create display for the fetch data
  function weatherdisplay(data){
      console.log(data)
    var div1= document.getElementById("W1")  
    var div2= document.getElementById("W2")
    var div3= document.getElementById("W3")
    var div4= document.getElementById("W4")
    var div5= document.getElementById("W5")
    div1.innerHTML= data.name
    div2.innerHTML= data.main.temp
    div3.innerHTML= data.main.temp_max
    div4.innerHTML= data.main.temp_min
    div5.innerHTML= data.wind.speed
    
  }
    


// local storage
function save(cityname) {
    localStorage.setItem(city.id, city.value)

}

for (var key in localStorage) {
    var citiesrememberd = $(key)
    citiesrememberd.value = localStorage.getItem(key)
}

