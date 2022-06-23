

function zipCodeData(){
    let zipcode=document.getElementById('zipcode').value
    
    if(zipcode==""){
        alert("enter zipcode")
        return false
    }
    else {  
        if (isNaN(zipcode)) {  
            alert('enter a valid zipcode');  
            return false;  
        }  
   }  

    const API=`http://api.weatherapi.com/v1/forecast.json?key=7501e5a1dbf441eb8d0154519221706&q=${zipcode}&days=3&aqi=no&alerts=no`

  
const showData=fetch(API)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    return data;
   
  })
  .catch((error) => console.error("FETCH ERROR:", error));
  //https://www.weatherapi.com/my/

  const printOutData = () => {
    showData.then((a) => {
      const location=a.current.feelslike_f
      const name=a.location.name
      const nextDay=a.forecast.forecastday[1].date
      const nextDayTemp=a.forecast.forecastday[1].day.avgtemp_f
      const nextDayForecast=a.forecast.forecastday[1].day.condition.icon
      const thirdDay=a.forecast.forecastday[2].date
      const thirdDayTemp=a.forecast.forecastday[2].day.avgtemp_f
      const thirdDayForcast=a.forecast.forecastday[2].day.condition.icon
      
      //location
      document.getElementById("location").innerHTML=name
      //temp
      document.getElementById("temp").innerHTML=location

      //forcast
      
      
      const forcast=a.current.condition.icon
      
      const div = document.getElementById("forcast");
      div.innerHTML=`<img src=${forcast}>`
      //next day weather
      document.getElementById("tomorrow").innerHTML=nextDay
      document.getElementById("temp1").innerHTML=nextDayTemp
      // next day forcast
  
     
     
      const tomorrowImage = document.getElementById("forcast1");
      tomorrowImage.innerHTML=`<img src=${nextDayForecast}>`

      //The 3rd day
      document.getElementById("3rd").innerHTML=thirdDay
      document.getElementById("temp2").innerHTML=thirdDayTemp
      const thirdDayImage=document.getElementById("forcast2")
      thirdDayImage.innerHTML=`<img src=${thirdDayForcast}>`

     
    });
  };
  printOutData();
}




window.onload=function addNode(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
  
   
    document.getElementById("divMsg").innerHTML =dateTime

}
