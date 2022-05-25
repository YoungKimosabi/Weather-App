
const handleSearch = async(event) => {
    event.preventDefault();
    let city = document.getElementById('city').value
    const container = document.getElementById('wx-container');
    if (container){
        clearTable()
    }else{
    await getWeather(city)
    }
};

const clientKey = "1794813594f27630f1af069690fc1f83"
document.getElementById('search').addEventListener('click', (event)=>handleSearch(event))


const clearTable = () =>{
    const container = document.getElementById('wx-container');
    container.replaceChildren();
};


//get data
const getWeather = async (city) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${clientKey}`,{
        method:"GET",
    });
    const data = await res.json()
    console.log(data)

    let cityCurrent = 'Current weather in: ' + (data.name) 
    let h1 = document.getElementById('heading')
    if (h1.innerHTML){
        h1.innerHTML = '';
    }
    h1.append(cityCurrent)

    let highTemp = data.main.temp_max
    let highTempF = Math.round(((highTemp - 273.15)* 9/5 + 32)) + `\u00B0`

    let lowTemp = data.main.temp_min
    let lowTempF = Math.round(((lowTemp - 273.15)* 9/5 + 32)) + `\u00B0`

    let condCurrent = data.weather[0].description

    let visCurrent = Math.round(((data.visibility)/1000)) + 'km'

    let high = document.getElementById('high_p')
    if (high.innerHTML){
        high.innerHTML = '';
    }
    high.append(highTempF)

    let low = document.getElementById('low_p')
    if (low.innerHTML){
        low.innerHTML = '';
    }
    low.append(lowTempF)

    let cond = document.getElementById('cond')
    if (cond.innerHTML){
        cond.innerHTML = '';
    }
    cond.append(condCurrent)

    let vis = document.getElementById('vis')
    if (vis.innerHTML){
        vis.innerHTML = '';
    }
    vis.append(visCurrent)
    
};

// return highs & lows in our tables
// const returnTemps = async() => {
//     const res = await getWeather()
//     const data = getWeather.data
//     let high = document.getElementById('high_p');
//     let low = document.getElementById('low_p');
    // high.insert(data.)//index into data to get temp_max & temp_min


