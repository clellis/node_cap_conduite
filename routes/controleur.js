/**
 * Page controleur.
 */
var nodemailer = require('nodemailer');

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
exports.permis_bsr = function(req, res){
	res.render('./pages/PermisBSR', {
		titre	: 'Cap Conduite - Permis BSR'});
};
exports.localiser = function(req, res){
	res.render('./pages/Localiser', {
		titre	: 'Cap Conduite - Nous localiser'});
};

exports.recuperation = function(req, res){
	res.render('./pages/Recuperation', {
		titre	: 'Cap Conduite - Nous contacter'});
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
		titre		: 'Cap Conduite - Nous localiser'
		, message	: 'Le mail à été envoyé !'});
};