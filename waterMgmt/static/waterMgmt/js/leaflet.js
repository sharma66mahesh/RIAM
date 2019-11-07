var greenIcon = L.icon({
  iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
  iconSize: [20, 30],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76]
});


var map = L.map('mapid').setView([8.9736178, 7.357235], 7);

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets',
//     accessToken: 'https://www.openstreetmap.org/oauth/access_tokenOt2qyB5FzeqHUArDQxheo'
// }).addTo(mymap);


// var htmltag = "<h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><h1>Hello!</h1><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p><p>dhguirhfuijdfnsdkjfnsdjkvdnfjk</p>"

// L.marker([27.8, 85.4], {icon: greenIcon}).addTo(mymap).bindPopup("<a href='https://google.com'>Cafe</a>");

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//-------------------------___ADDING SEARCH FUNCTIONALITY -----------------------------



// // Initialize the map and assign it to a variable for later use
// var map = L.map('map', {
//   // Set latitude and longitude of the map center (required)
//   center: [37.7833, -122.4167],
//   // Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
//   zoom: 10
// });

const content = [
  "<h1>Solution</h1><p>Location: Abaji</p><p>Description: Water here is pure and safe for drinking.</p><p>Added By: Ashish</p>",
  "<h1>Solution</h1><p>Location: Abuja</p><p>Description: Ground water is suitable for drinking after purification by using water filter and boiling.</p><p>Added By: Mahesh</p>",
  "<h1>Problem</h1><p>Location: Saki West</p><p>Description: Water is not suitable for drinking. It has chemicals mixed in it which is not safe for drinking.</p><p>Added By: Maria</p>"
];

let l1 = [8.476479,6.9415698];
L.marker(l1).addTo(map).on('click', L.bind(onClick, null, 0));
L.marker([8.9736178, 7.357235]).addTo(map).on('click', L.bind(onClick, null, 1));
L.marker([8.6430879, 2.542606]).addTo(map).on('click', L.bind(onClick, null, 2));


function onClick(marker, e) {
  console.log(e, marker);
  console.log(e.latlng);
  elem = $('.overlay').css('z-index');
  
  if(elem !== '-1') {
    $('.overlay').css('z-index', '-1');
  } else {
    $('.overlay').css('z-index', '1');

    $('.overlay').html(content[marker]);
  }
}

$('.overlay').click(function (e) { 
  e.preventDefault();
  $('.overlay').css('z-index', '-1');
});

L.control.scale().addTo(map);

// Create a Tile Layer and add it to the map
//var tiles = new L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png').addTo(map);
// L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// var searchControl = new L.esri.Geocoding.Geosearch().addTo(map);
// console.log(searchControl);

// var results = new L.LayerGroup().addTo(map);
// console.log(results);

// searchControl.on('results', function(data){
//   results.clearLayers();
//   for (var i = data.results.length - 1; i >= 0; i--) {
//     results.addLayer(L.marker(data.results[i].latlng));
//   }
// });
// setTimeout(function(){$('.pointer').fadeOut('slow');},3400);

const apiKey = "cbQxbniyzG1aBLeR6EkrBAK6PhnqiIBs";
const apiUrl = "http://www.mapquestapi.com/geocoding/v1/address?key=" + apiKey;


async function getLocation(loc) {
  
  const postData = {
    location: loc,
    maxResults: 10
  };

  const res = await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(postData)
  });

  console.log(JSON.stringify(postData));
  return await res.json();
}


$("#searchForm").submit(async function(e){
  e.preventDefault();
  const location = e.target[0].value;
  console.log(location);
  let returnData = [];
  try{
    locations = await getLocation(location);
    locations.results[0].locations.forEach(coords=> {
      console.log(coords.latLng);
      if(typeof coords.latLng !== 'undefined'){
        returnData.push(coords.latLng);
        L.marker([coords.latLng.lat, coords.latLng.lng]).addTo(map);
      }
    })
    // console.log(locations.results[0].locations)
  } catch(error){
    console.error(error);
  }

});