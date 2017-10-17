<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Configureer website</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<link rel="stylesheet" href="css/style.css">
	<script src="js/script.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
	<div id="progress-wrp">
	    <div class="progress-bar"></div>
	    <div class="status">0%</div>
	</div>
	<h1>Website configureren</h1>
	<form>
		<div class="page" data-page="1">
			<h3>Kies een template</h3>
			<input type="radio" name="template" value="A" id="A" checked="checked">
			<label for="A"><img src="https://via.placeholder.com/200"></label>
			<input type="radio" name="template" value="B" id="B">
			<label for="B"><img src="https://via.placeholder.com/200"></label>
			<input type="radio" name="template" value="C" id="C">
			<label for="C"><img src="https://via.placeholder.com/200"></label>
			<input type="radio" name="template" value="D" id="D">
			<label for="D"><img src="https://via.placeholder.com/200"></label>
			<input type="radio" name="template" value="E" id="E">
			<label for="E"><img src="https://via.placeholder.com/200"></label>
			<br>
			<button type="button" class="pageSwitcher" data-page="2">Verder</button>
		</div>
		<div class="page" data-page="2">
			<h3>Kies pagina's</h3>
			<input type="text"><input type="button" id="addPage" value="pagina toevoegen">
			<div><input type="checkbox" name="page" id="Home"><label for="Home">Home</label></div>
			<div><input type="checkbox" name="page" id="Overons"><label for="Overons">Over ons</label></div>
			<div><input type="checkbox" name="page" id="Diensten"><label for="Diensten">Diensten</label></div>
			<div><input type="checkbox" name="page" id="Prijslijst"><label for="Prijslijst">Prijslijst</label></div>
			<div><input type="checkbox" name="page" id="Portfolio"><label for="Portfolio">Portfolio</label></div>
			<div><input type="checkbox" name="page" id="Fotogalerij"><label for="Fotogalerij">Foto galerij</label></div>
			<div><input type="checkbox" name="page" id="Referenties"><label for="Referenties">Referenties</label></div>
			<div><input type="checkbox" name="page" id="Vestigingen"><label for="Vestigingen">Vestigingen</label></div>
			<div><input type="checkbox" name="page" id="Vacatures"><label for="Vacatures">Vacatures</label></div>
			<div><input type="checkbox" name="page" id="Blog"><label for="Blog">Blog</label></div>
			<div><input type="checkbox" name="page" id="Contact"><label for="Contact">Contact</label></div>
			<button type="button" class="pageSwitcher" data-page="1">Terug</button><button type="button" class="pageSwitcher" data-page="3" id="buttonToFiles">Verder</button>
		</div>
		<div class="page" data-page="3">
			<h3>Selecteer uw bestanden</h3>
			<div><input type="file" name="content" id="contentFile"><label for="contentFile">Upload uw content (pdf, jpg, png, zip, doc, docx)</label></div>
			<button type="button" class="pageSwitcher" data-page="2">Terug</button><button type="button" class="pageSwitcher" data-page="4">Verder</button>
		</div>
		<div class="page" data-page="4">
			<h3>CheckCheckDubbelCheck</h3>
			<p id="templateOverview">Template: geen template gekozen.</p>
			<p id="pageOverview">Pagina's: geen pagina's gekozen.</p>
			<button type="button" class="pageSwitcher" data-page="3">Terug</button><button type="button" class="pageSwitcher" data-page="5">Verder</button>
		</div>
		<div class="page" data-page="5">
			<h3>Gegevens</h3>
			<label for="voornaam">Voornaam:</label><input type="text" id="voornaam"><br>
			<label for="tussenvoegsel">Tussenvoegsel:</label><input type="text" id="tussenvoegsel"><br>
			<label for="achternaam">Achternaam:</label><input type="text" id="achternaam"><br>
			<label for="email">E-mail:</label><input type="text" id="email"><br>
			<button type="button" class="pageSwitcher" data-page="4">Terug</button><button type="button" class="pageSwitcher" data-page="6">Verder</button>
		</div>
		<div class="page" data-page="6">
			<h3>Betalen</h3>
			<button type="button" class="pageSwitcher" data-page="4">Terug</button><button type="button" class="pageSwitcher" data-page="6">Verder</button>
		</div>
	</form>
</body>
</html>