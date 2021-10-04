var searchitem = $("#formid")
var searchbar = $("#city")
var searchcity = []
currenturl2=" "



// click event
$(searchitem).click(async function (event) {
    
    event.preventDefault()
    searchitem = searchbar.val()
    currenturl2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchitem + " ," + searchitem + "&appid=913f8a0c9bf081d9e94bfd04b9efd30c"

   
    // get api

    data2 = await fetch(currenturl2)
    
    .then(result => result.json())
    
    .then(data2 => {
    
        
        return(data2)
    })
    forecastdisplay(data2)

    function forecastdisplay(data2){
        console.log(data2)
      var day1= document.getElementById("D1")  
      var day2= document.getElementById("D2")
      var day3= document.getElementById("D3")
      var day4= document.getElementById("D4")
      var day5= document.getElementById("D5")
      var day6= document.getElementById("D6")
      var day7= document.getElementById("D7")
      var day8= document.getElementById("D8")
      day1.innerHTML="Name: " + data2.name
      day2.innerHTML="temp: " + data2.main.temp
      day3.innerHTML="Max temp: " + data2.main.temp_max
      day4.innerHTML="Min temp: " + data2.main.temp_min
      day5.innerHTML="Wind: " + data2.wind.speed
      day6.innerHTML="Humidity: " + data2.main.humidity
      day7.innerHTML="UV: " + data2.main.humidity
      day8.innerHTML="http://openweathermap.org/img/wn/"+ data.weather[0].icon+" @2x.png"
     
      if (day8 !== 50){
         $(this).css('backgorund',"red")
     } else 
          $(this).css('background',' white')
  }
      

    // data1= await fetch(weathericon)
    // .then(response => response.json)
    // .then(data1)
    // return(data1)

    
      
})