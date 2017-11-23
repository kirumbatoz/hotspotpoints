<?php
$dbh = new PDO("pgsql:host=localhost;port=5433;dbname=wifi_Tracer", "postgres", "nyaundi2012");
   /*  if($dbh){
	echo "connected successfully";
    }
    else{
    	echo "could not conncet";
    }*/
 $query = "SELECT *,ST_AsGeoJSON((ST_AsText(ST_Transform(geom,4326)))) AS geojson FROM footpath";
 $rs = $dbh->query($query); 
   if (!$rs) {
    echo 'An SQL error occured.\n';
    exit;
   }
   //else{
    //  echo "query correct";
    // }
 # Build GeoJSON feature collection array
$geojson = array(
   'type'      => 'FeatureCollection',
   'features'  => array()
);
# Loop through rows to build feature arrays
while ($row = $rs->fetch(PDO::FETCH_ASSOC)) {
    $properties = $row;
    # Remove geojson and geometry fields from properties
    unset($properties['geojson']);
    unset($properties['geom']);
    $feature = array(
         'type' => 'Feature',
         'geometry' => json_decode($row['geojson'], true),
         'properties' => $properties
    );
    # Add feature arrays to feature collection array
    array_push($geojson['features'], $feature);
}

header('Content-type: application/json');
echo json_encode($geojson, JSON_NUMERIC_CHECK);
 //$fp = fopen('school.json', 'w');
 //fwrite($fp, json_encode($geojson));
$conn = NULL;
?>