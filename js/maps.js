wow = new WOW({}).init();
var OpenStreetMap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
var WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');
var landlink = L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png');
var pathsData = "geojson/footpath.geojson", parksData = "geojson/parking.geojson", bushData = "geojson/bushes.geojson",
	pitchData= "geojson/football.geojson", pondData = "geojson/ponds.geojson", buildingData = "geojson/buildings.geojson",
	boundaryData = "geojson/boundary.geojson", roadsData = "geojson/roads.geojson", medData = "geojson/meds.geojson",
	toiletData = "geojson/toilets.geojson", maizeData = "geojson/maize.geojson", hotspotData = "geojson/hotspots.json",
	points="geojson/points.geojson",polygon="geojson/polygon.geojson",polyline="geojson/polyline.geojson";

var map = L.map('map',{
	layers: [OpenStreetMap],
	center: [-0.397915, 36.960856],
	zoom: 18
}),lookup=[];
var baseLayers = {
	"Open Street Map": OpenStreetMap,
	"World Imagery": WorldImagery
};
		// styling paths
var paths_style={

	color: "#A52A2A",
	weight: 1.5,
	fillColor: "#0000FF",
	fillOpacity: 2

};
var paths_st={
	color: "#FF0000",
	weight: 2,
	fillColor: "#0000FF",
};
var Bounds={
	color: "#000000",
	weight: 3
};
var pitc={
	color:"#008B8B",
	weight:2,
	fillColor:"#FFF0F5",
	fillOpacity: 2
};
var pak={
	color:"#FFF8DC",
	weight:2,
	fillColor:"#8FBC8F",
	fillOpacity: 2
};
var edu={
	color:"#556B2F",
	weight:2,
	fillColor:"#E9967A",
	fillOpacity: 2
};
var bush={
	color:"#8FBC8F",
	weight:2,
	fillColor:"#228B22",
	fillOpacity: 2
};
var cater={
	color:"#778899",
	weight:2,
	fillColor:"#000080",
	fillOpacity: 2
};
	var meds={
	color:"#778899",
	weight:1,
	fillColor:"#D8BFD8",
	fillOpacity: 2
};
var maize={
	color:"#ADFF2F",
	weight:1,
	fillColor:"#90EE90",
	fillOpacity: 2
};
var building={
	color:"#778899",
	weight:1,
	fillColor:"#BC8F8F",
	fillOpacity: 2
};
var wk={
	fillColor:"#C0C0C0",
	fillOpacity: 2
};
var paths=L.geoJson(false, {
	style:paths_st,
});

$.getJSON(points, function(data){
L.geoJson(data,{}).addTo(map);
});

$.getJSON(pathsData, function (data) {
	paths.addData(data).addTo(map);
});
var parkings=L.geoJson(false, {
	style:pak,
	onEachFeature: function( feature, layer )
	{
	layer.bindPopup( "<strong>" + feature.properties.names + "</strong>" )
	}
});

$.getJSON(polygon, function (data) {
	parkings.addData(data).addTo(map);
});
var pitch=L.geoJson(false, {
	style:pitc,
	onEachFeature: function( feature, layer ){
		layer.bindPopup("<strong>" + feature.properties.names + "</strong>");
	}
});

$.getJSON(pitchData, function (data) {
	pitch.addData(data).addTo(map);
});
var buildings=L.geoJson(false, {
	style:building,
	onEachFeature: function( feature, layer ){
		layer.bindPopup( "<strong>" + feature.properties.name + "</strong>" );
	}
});

$.getJSON(buildingData, function (data) {
	buildings.addData(data).addTo(map);
});

function addAccessPoint(obj){
	var popContent = "<table class='table table-hover table-stripped table-bordered'><thead><th>WAP Name</th><th>WiFi Location</th><th>Area of Service</th><th>Morning Signal Strenth</th><th>Noon Signal Strenth</th><th>Evening Signal Strenth</th></thead>";
	popContent += "<tr><td>"+obj.name+"</td><td>"+obj.location+"</td><td>"+obj.area+"</td><td>"+obj.morning+"(dBM)</td><td>"+obj.noon+"(dBM)</td><td>"+obj.evening+"(dBM)</td></tr></table>";
	L.marker([obj.lat, obj.lng], {
		icon: L.icon({
			iconUrl: "leaflet/images/marher-icon.png",
			iconSize: [30, 32],
			iconAnchor: [12, 28],
			popupAnchor: [0, -25]
		}),
		title: obj.name,
		riseOnHover: true
	}).bindPopup(popContent).addTo(map);
}

$.getJSON(hotspotData, function (data) {
$.each(data, function(key, value){
	addAccessPoint(value);
	lookup.push({"value":value.name, "data":[value.lat, value.lng]});
});
});

var bushes=L.geoJson(false, {
style:bush,
onEachFeature: function( feature, layer )
{
layer.bindPopup( "<strong>" + feature.properties.names + "</strong>" )
}
});

$.getJSON(bushData, function (data) {
bushes.addData(data).addTo(map);
});
var ponds=L.geoJson(false, {
//style:cater,
onEachFeature: function( feature, layer )
{
layer.bindPopup( "<strong>" + feature.properties.names + "</strong>" )
}
});

$.getJSON(pondData, function (data) {
ponds.addData(data).addTo(map);
});
var Boundary=L.geoJson(false, {
style:Bounds,
});

$.getJSON(boundaryData, function (data) {
Boundary.addData(data).addTo(map);
});
var Roads=L.geoJson(false, {
style:paths_style,
});
$.getJSON(polyline, function (data) {
Roads.addData(data).addTo(map);
});
var maize_plantations=L.geoJson(false, {
style:maize,
onEachFeature: function( feature, layer )
{
layer.bindPopup( "<strong>" + feature.properties.name + "</strong>" )
}
});

$.getJSON(maizeData, function (data) {
maize_plantations.addData(data).addTo(map);
});

var med=L.geoJson(false, {
style:meds,
onEachFeature: function( feature, layer ){

}
});

$.getJSON(medData, function (data) {
med.addData(data).addTo(map);
});
var toilets=L.geoJson(false, {
//style:cater,
onEachFeature: function( feature, layer )
{
layer.bindPopup( "<strong>" + feature.properties.names + "</strong>" )
}
});

$.getJSON(toiletData, function (data) {
toilets.addData(data).addTo(map);
});
var overlays =  {
"buildings": buildings,
"Extent": Boundary,
"toilets": toilets,
//"tanks": tanks,
"maize_plantations": maize_plantations,
"Roads": Roads,
"ponds":ponds,
"bushes":bushes,
"pitch":pitch,
"Parking Lots":parkings,
"paths":paths
};
L.control.layers(baseLayers,overlays,{ collapsed: true }).addTo(map);
var testPoints = [];
map.on('click',function(event){
testPoints.push([event.latlng.lng,event.latlng.lat]);
	});
map.on('dblclick',function(event){
	console.log({points:testPoints});
	});
$('#search-input #search-item').autocomplete({
	lookup: lookup,
	showNoSuggestionNotice: false,
	noSuggestionNotice: "No Match Found",
	onSelect: function (chose) {
		var filtered = { lat: chose.data[0], lng: chose.data[1] };
		map.panTo(filtered);
		map.setCenter(filtered);
	}
});
