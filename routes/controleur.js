/**
 * GET home page.
 */
exports.accueil = function(req, res){
//	console.log( res.__('app.name'));
	res.render('./pages/Accueil', {
		titre	: 'Cap Conduite - Accueil'});
};

exports.permis_b = function(req, res){
	res.render('./pages/PermisB', {
		titre	: 'Cap Conduite - Permis B'});
};
exports.permis_aac = function(req, res){
	res.render('./pages/PermisAAC', {
		titre	: 'Cap Conduite - Permis AAC'});
};
exports.perfectionnement = function(req, res){
	res.render('./pages/Perfectionnement', {
		titre	: 'Cap Conduite - Perfectionnement'});
};
exports.carte = function(req, res){
	res.render('./pages/Carte', {
		titre	: 'Cap Conduite - A la carte'});
};

exports.localiser = function(req, res){
	res.render('./pages/Localiser', {
		titre	: 'Cap Conduite - Nous localiser'});
};

exports.contact = function(req, res){
	res.render('./pages/Contact', {
		titre	: 'Cap Conduite - Nous contacter'});
};

exports.envoyer_mail = function(req, res){
	//Capter tout les champs du formulaire
	
	//Envoyer le mail
	
	//Revenir sur la page contact avec message d'execution
	res.render('./pages/Contact', {
		titre	: 'Cap Conduite - Nous contacter'});
};