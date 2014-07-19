/**
 * Page controleur.
 */
var nodemailer = require('nodemailer');

exports.accueil = function(req, res){
	res.render('./pages/Accueil', {
		layout				: 'main'
		, titre				: 'Cap Conduite - Accueil'
		, meta_description	: 'Cap Conduite, Auto-Ecole Auto dans les Chartreux à Marseille'
		, meta_motsClefs	: 'Cap Conduite, Accueil, Auto-Ecole, Chartreux, Marseille, permis, conduite, cap, conduire, points, permis conduire, récupération points, points permis, points permis conduire'});
};

exports.permis_b = function(req, res){
	res.render('./pages/PermisB', {
		layout	: 'details'
		, titre	: 'Cap Conduite - Permis B'});
};
exports.permis_aac = function(req, res){
	res.render('./pages/PermisAAC', {
		layout	: 'details'
		, titre	: 'Cap Conduite - Permis AAC'});
};
exports.perfectionnement = function(req, res){
	res.render('./pages/Perfectionnement', {
		layout	: 'details'
		, titre	: 'Cap Conduite - Perfectionnement'});
};
exports.carte = function(req, res){
	res.render('./pages/Carte', {
		layout	: 'details'
		, titre	: 'Cap Conduite - A la carte'});
};
exports.permis_bsr = function(req, res){
	res.render('./pages/PermisBSR', {
		layout	: 'details'
		, titre	: 'Cap Conduite - Permis BSR'});
};
exports.localiser = function(req, res){
	res.render('./pages/Localiser', {
		layout	: 'main'
		, titre	: 'Cap Conduite - Nous localiser'});
};

exports.recuperation = function(req, res){
	res.render('./pages/Recuperation', {
		layout	: 'details'
		, titre	: 'Cap Conduite - Récupération de points'});
};

exports.envoyer_mail = function(req, res){
	//Capter tous les champs du formulaire
	var nom = req.body.form_contact_nom;
	var eMail = req.body.form_contact_email;
	var sujet = req.body.form_contact_sujet;
	var message = req.body.form_contact_message;
	
	//Contrôler les champs
	
	
	//Créer le mail
	var smtpTransport = nodemailer.createTransport("SMTP",{
		service: "hotmail",
	    auth: {
	        user: "capconduite@outlook.com",
	        pass: "128chartreux"
	    }
	});
	
	var mailOptions = {
		    from: "Cap Conduite ✔ <capconduite@outlook.com>", // sender address
		    to: eMail, // list of receivers
		    subject: sujet, // Subject line
//		    text: "Hello world", // plaintext body
		    html: message // html body
		}
	
	//Envoyer le mail
	smtpTransport.sendMail(mailOptions, function(error, response){
	    if(error){
	        console.log(error);
	        var error = "e";
	    }else{
	        console.log("Message sent: " + response.message);
	    }
		
	    // if you don't want to use this transport object anymore, uncomment following line
	    smtpTransport.close(); // shut down the connection pool, no more messages
	});
	
	//Revenir sur la page contact avec message d'execution
	res.render('./pages/Localiser', {
		layout		: 'main'
		, titre		: 'Cap Conduite - Nous localiser'
		, message	: 'Le mail à été envoyé !'});
};