var searchitem = $("#formid")
var searchbar = $("#city")
var searchcity = []

var currenturl = ""
//for local storage
var citiresults = document.getElementById("citiresults")






// click event
$(searchitem).click(async function (event) {
    event.preventDefault()
    searchitem = searchbar.val()
    currenturl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchitem + " ," + searchitem + "&units=imperial&current.temp=&current.humidity=&daily.weather.description=&current.uvi=&hourly.wind_speed=&current.weather.icon=&appid=913f8a0c9bf081d9e94bfd04b9efd30c"

    // get api

    data = await fetch(currenturl)
        .then(result => result.json())
        .then(data => {
            return (data)
        })
    weatherdisplay(data)

})



// create display for the fetch data
function weatherdisplay(data) {
    var div1 = document.getElementById("W1")
    var div2 = document.getElementById("W2")
    var div3 = document.getElementById("W3")
    var div4 = document.getElementById("W4")
    var div5 = document.getElementById("W5")
    var div6 = document.getElementById("W6")
    var div7 = document.getElementById("W7")
    var weatherIcon = document.getElementById("image")
    div1.innerHTML = data.name
    div2.innerHTML = "temp: " + data.main.temp
    div3.innerHTML = "Max temp: " + data.main.temp_max
    div4.innerHTML = "Min temp: " + data.main.temp_min
    div5.innerHTML = "Wind: " + data.wind.speed
    div6.innerHTML = " Humidity: " + data.main.humidity
    div7.innerHTML = " UV: " + data.main.humidity
    weatherIcon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"

    if (div7 >= 50) {
        $("#weatherdata").css('backgorund', "red")
    } else
        $("#weatherdata").css('background', ' white')
}



// local storage
function save(cityname) {
    localStorage.setItem(city.value, city.value)

}

for (var key in localStorage) {
    if (localStorage.getItem(key) != null || localStorage.getItem(key) != undefined) {
        var loopresult = document.createElement("button")
        loopresult.innerHTML = localStorage.getItem(key)
        loopresult.value = localStorage.getItem(key)
        loopresult.id = localStorage.getItem(key)
        
        loopresult.onclick = getweather(loopresult.value)
        citiresults.append(loopresult)
    }
}

async function getweather(name) {
    name = name.replace(' ', "%20");
    currenturl = "https://api.openweathermap.org/data/2.5/weather?q=" + name + "&units=imperial&current.temp=&current.humidity=&daily.weather.description=&current.uvi=&hourly.wind_speed=&current.weather.icon=&appid=913f8a0c9bf081d9e94bfd04b9efd30c"
    // get api
    weatherData = null
    await fetch(currenturl)
        .then(result => result.json())
        .then(data => {
            weatherData = data
        })
    weatherdisplay(weatherData)

    currenturl2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + name + "&units=imperial&current.temp=&current.humidity=&daily.weather.description=&current.uvi=&hourly.wind_speed=&current.weather.icon=&appid=913f8a0c9bf081d9e94bfd04b9efd30c"
    // get api
    data2 = await fetch(currenturl2)
        .then(result => result.json())
        .then(data => {
            return (data)
        })
    forecastdisplay(data2)
    // display data
   
   
    function forecastdisplay(data2) {
        console.log(data2)
        var day1 = document.getElementById("D1")
        var day1icon = document.getElementById("DICON1")

        var day2 = document.getElementById("D2")
        var day2icon = document.getElementById("DICON2")

        var day3 = document.getElementById("D3")
        var day3icon = document.getElementById("DICON3")

        var day4 = document.getElementById("D4")
        var day4icon = document.getElementById("DICON4")

        var day5 = document.getElementById("D5")
        var day5icon = document.getElementById("DICON5")

        day1.innerHTML = data2.list[1].main.temp
        day1icon.src = "https://openweathermap.org/img/wn/" + data2.list[1].weather[0].icon + "@2x.png"

        day2.innerHTML = data2.list[9].main.temp
        day2icon.src = "https://openweathermap.org/img/wn/" + data2.list[9].weather[0].icon + "@2x.png"

        day3.innerHTML = data2.list[17].main.temp
        day3icon.src = "https://openweathermap.org/img/wn/" + data2.list[17].weather[0].icon + "@2x.png"

        day4.innerHTML = data2.list[25].main.temp
        day4icon.src = "https://openweathermap.org/img/wn/" + data2.list[25].weather[0].icon + "@2x.png"

        day5.innerHTML = data2.list[33].main.temp
        day5icon.src = "https://openweathermap.org/img/wn/" + data2.list[33].weather[0].icon + "@2x.png"
    }
}