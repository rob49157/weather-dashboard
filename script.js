var searchitem =$("#formid")
var searchbar= $("#city")
var url= 

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

