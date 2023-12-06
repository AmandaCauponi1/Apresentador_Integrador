var map;
// console.log(map)


function success(nasc) {
  // console.log(nasc.coords.latitude, nasc.coords.longitude);
  // h2.textContent = `Latitude:${nasc.coords.latitude}, Longitude:${nasc.coords.longitude}`;


  if (map === undefined) {
    map = L.map('mapid').setView([nasc.coords.latitude, nasc.coords.longitude], 13);
  } else {
    map.remove();
    map = L.map('mapid').setView([nasc.coords.latitude, nasc.coords.longitude], 13);
  }


  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">nascOpenMap</a> contributors'
  }).addTo(map);


  L.marker([nasc.coords.latitude, nasc.coords.longitude]).addTo(map)
    .bindPopup('Eu estou aqui!')
    .openPopup();
}


function error(err) {
  console.log(err);
}


var watchID = navigator.geolocation.watchPosition(success, error, {
  enableHighAccuracy: true,
  timeout: 5000
});



  const mapa_icon = document.getElementById('mapa_icon')
  const map_none = document.getElementById('map_none')
  const conteudo_map = document.getElementById('conteudo_map')

  mapa_icon.addEventListener('click', () => {
    map_none.style.display = 'none'
    conteudo_map.style.display = 'flex'
    conteudo_map.style.gap =  10;
  })


