var searchitem = $("#formid")
var searchbar = $("#city")
var searchcity = []
//var url= "https://api.openweathermap.org/data/2.5/onecall?q=Atlanta&exclude=minutely&units=metric&current.temp=&daily.weather.description=&hourly.uvi=&hourly.wind_speed=&timezone=America/Atlanta&appid=913f8a0c9bf081d9e94bfd04b9efd30c"
var currenturl = ""
// var weathericon= "http://openweathermap.org/img/wn/"+ div8 +" @2x.png"






// click event
$(searchitem).click(async function (event) {
    event.preventDefault()
    searchitem = searchbar.val()
    currenturl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchitem + " ," + searchitem + "&units=imperial&current.temp=&current.humidity=&daily.weather.description=&current.uvi=&hourly.wind_speed=&current.weather.icon=&appid=913f8a0c9bf081d9e94bfd04b9efd30c"
    //  weathericon="http://openweathermap.org/img/wn/"+ div8 +" @2x.png"
   
    // get api

    data = await fetch(currenturl)
    .then(result => result.json())
    .then(data => {
    
        
        return(data)
    })
    weatherdisplay(data)

    // data1= await fetch(weathericon)
    // .then(response => response.json)
    // .then(data1)
    // return(data1)

    
      
})



// create display for the fetch data
  function weatherdisplay(data){
      console.log(data)
    var div1= document.getElementById("W1")  
    var div2= document.getElementById("W2")
    var div3= document.getElementById("W3")
    var div4= document.getElementById("W4")
    var div5= document.getElementById("W5")
    var div6= document.getElementById("W6")
    var div7= document.getElementById("W7")
    var div8= document.getElementById("W8")
    div1.innerHTML=  data.name
    div2.innerHTML= "temp: " + data.main.temp
    div3.innerHTML= "Max temp: " + data.main.temp_max
    div4.innerHTML= "Min temp: " + data.main.temp_min
    div5.innerHTML= "Wind: " + data.wind.speed
    div6.innerHTML=" Humidity: " + data.main.humidity
    div7.innerHTML=" UV: " + data.main.humidity
    div8.innerHTML= "https://openweathermap.org/img/wn/"+ data.weather[0].icon+" @2x.png"
   
    if (div8 !== 50){
       $("#weatherdata").css('backgorund',"red")
   } else 
        $("#weatherdata").css('background',' white')
}
    


// local storage
function save(cityname) {
    localStorage.setItem(city.id, city.value)

}

for (var key in localStorage) {
    var citiesrememberd = $(key)
    citiesrememberd.value = localStorage.getItem(key)
}

