var searchitem = $("#formid")
var searchbar = $("#city")
var searchcity = []
currenturl2=" "



// click event
$(searchitem).click(async function (event) {
    
    event.preventDefault()
    searchitem = searchbar.val()
    currenturl2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchitem + " ," + searchitem + "&units=imperial&current.temp=&current.humidity=&daily.weather.description=&current.uvi=&hourly.wind_speed=&current.weather.icon=&appid=913f8a0c9bf081d9e94bfd04b9efd30c"

   
    // get api

    data2 = await fetch(currenturl2)
    
    .then(result => result.json())
    
    .then(data2 => {
    
        
        return(data2)
        
    })
    forecastdisplay(data2)
// display data
    function forecastdisplay(data2){
        console.log(data2)
      var day1= document.getElementById("D1")
      var day1icon= document.getElementById("DICON1")
      var DT= document.getElementById("d&t")

      var day2= document.getElementById("D2")
      var day2icon= document.getElementById("DICON2")

      var day3= document.getElementById("D3")
      var day3icon= document.getElementById("DICON3")

      var day4= document.getElementById("D4")
      var day4icon= document.getElementById("DICON4")

      var day5= document.getElementById("D5")
      var day5icon= document.getElementById("DICON5")

        DT.innerHTML= data2.list.dt_txt
        day1.innerHTML=  data2.list[1].main.temp
        day1icon.src= "https://openweathermap.org/img/wn/"+ data2.list[1].weather[0].icon+"@2x.png"
        
        day2.innerHTML=  data2.list[9].main.temp
        day2icon.src= "https://openweathermap.org/img/wn/"+ data2.list[9].weather[0].icon+"@2x.png"
        
        day3.innerHTML=  data2.list[17].main.temp
        day3icon.src= "https://openweathermap.org/img/wn/"+ data2.list[17].weather[0].icon+"@2x.png"
        
        day4.innerHTML=  data2.list[25].main.temp
        day4icon.src= "https://openweathermap.org/img/wn/"+ data2.list[25].weather[0].icon+"@2x.png"
        
        day5.innerHTML=  data2.list[33].main.temp
        day5icon.src= "https://openweathermap.org/img/wn/"+ data2.list[33].weather[0].icon+"@2x.png"
    
     
    
  }
      
})