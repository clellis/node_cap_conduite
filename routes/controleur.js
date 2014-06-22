/**
 * GET home page.
 */
exports.accueil = function(req, res){
//	console.log( res.__('app.name'));
	res.render('./pages/Accueil', {
		titre	: 'Cap Conduite - Accueil'});
};

exports.prestation = function(req, res){
	res.render('./pages/Prestation', {
		titre	: 'Cap Conduite - Nos prestations'});
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