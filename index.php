<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>DeKUT Wireless Access Points</title>
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="css/font-awesome.min.css">
	<link href="css/animate.min.css" rel="stylesheet">
	<link rel="stylesheet" href="leaflet/leaflet.css" />
	<link href="css/style.css" rel="stylesheet" />
</head>

<body>
	<header id="header">
		<nav class="navbar navbar-default navbar-static-top" role="banner">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<div class="navbar-brand">
						<a href="index.html">
							<h1>DeKUT Wireless Access Points</h1>
						</a>
					</div>
				</div>
				<div class="navbar-collapse collapse">
					<div class="menu">
						<ul class="nav nav-tabs" role="tablist">
							<li role="presentation">
								<a href="index.php" class="active">Home</a>
							</li>
							<li role="presentation">
								<a href="maps.php">Maps</a>
							</li>
							<li role="presentation">
								<form id="search-input"><input type="text" id="search-item" /></form>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	</header>

	<div id="map"></div>

<?php require_once('fns.php'); require_once('footer.php'); ?>

	
<script src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="leaflet/leaflet.js"></script>
<script src="js/wow.min.js"></script>
<script src="js/jquery.autocomplete.min.js"></script>
<script src="js/maps.js"></script>
</body>

</html>