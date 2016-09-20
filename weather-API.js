end point: http://api.openweathermap.org/data/2.5/weather?q=<your_city>&appid=a38f2cd356c61a0bb7185abc4eac77ab 

method: GET

Response:

{
coord: {
lon: 77.22,
lat: 28.67
},
weather: [
{
id: 721,
main: "Haze",
description: "haze",
icon: "50d"
}
],
base: "cmc stations",
main: {
temp: 297.15,
pressure: 1007,
humidity: 44,
temp_min: 297.15,
temp_max: 297.15
},
wind: {
speed: 0.32,
deg: 81.5026
},
clouds: {
all: 20
},
dt: 1461717000,
sys: {
type: 1,
id: 7809,
message: 0.0029,
country: "IN",
sunrise: 1461716017,
sunset: 1461763453
},
id: 1273294,
name: "Delhi",
cod: 200
}
