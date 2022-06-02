mapboxgl.accessToken = 'pk.eyJ1Ijoid2lsbGpkdW5jYW4iLCJhIjoiY2wxcnZ0bDAxMGxxZTNvcXEzdTdxZzU3ZiJ9.2K211Cg3BG3AL1k-knpdAA';
let lon = document.querySelector("#long").textContent;
let lat = document.querySelector("#lati").textContent;

//Display Hidden Gem on map
getGemMap = (lon,lat) => {
    var map = new mapboxgl.Map({
        container: 'map',
        center: [lon, lat],
        zoom:9,
        style: 'mapbox://styles/mapbox/streets-v11'
    });
}


getGemMap(lon, lat);