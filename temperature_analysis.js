async function ksc(){
    const ki=k.value;
    const long_lati= await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${ki}&appid=3b573df660e587665018888b8b538db5`);
    var data1=await long_lati.json();
    // console.log(data1[0].lon);
    const longi=data1[0].lon;
    const lati=data1[0].lat;
    console.log(longi,lati);
    const city= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=ce3e49d14781c1afb94c114871a529a4`);
    var data1=await city.json();
     console.log(data1.name);
     document.getElementById("locval").innerHTML=data1.name;
     document.getElementById("currtemp").innerHTML=`current temp ${(data1.main.temp-272.15).toFixed(2)} celcius`;
     document.getElementById("max_temp").innerHTML=`MAX ${(data1.main.temp_max-272.15).toFixed(2)} celcius`;
     document.getElementById("min_temp").innerHTML=`MIN ${(data1.main.temp_min-272.15).toFixed(2)} celcius`;
     const im=document.getElementById("pa");
console.log(data1.weather[0].main);
if(data1.weather[0].main=="Clouds")
        {
          im.innerHTML="<i class='fa-solid fa-cloud'></i>";
        }
        else if(data1.weather[0].main=="Clear")
        {
          im.innerHTML="<i class='fa-solid fa-sun'></i>";
        }
        else if(data1.weather[0].main=="Rain")
        {
          im.innerHTML="<i class='fa-solid fa-cloud-showers-heavy'></i>";        }
        else if(data1.weather[0].main=="Drizzle")
        {
          im.innerHTML="<i class='fa-solid fa-cloud-drizzle'></i>";        }
        else if(data1.weather[0].main=="Mist")
        {
          im.innerHTML='<i class="fa-solid fa-smog"></i>'        }
        else if(data1.weather[0].main=="Haze")
        {
          im.innerHTML="<i class='fa-solid fa-radiation'></i>";
        }
 }
 const k=document.getElementById("cities");
k.addEventListener("change", ksc);
