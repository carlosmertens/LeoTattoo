function sendForm () {
	let emailForm = document.getElementById('email').value;
	let message = document.getElementById('message');
	let confirmation = document.getElementById('confirmation');
	let alerta = document.getElementById('alerta');

	let loc = location.pathname;
	let english = null;
	let german = null;

	loc.includes('en') ? english = true: german = true;

	if (emailForm.includes("@")) {

		let nameForm = document.getElementById('name').value,
			phoneForm = document.getElementById('telefon').value,
			bodyForm = document.getElementById('figur').value,
			descriptionForm = document.getElementById('kommentare').value,
			motivForm = document.getElementById('motiv').value,
			tattooForm = document.getElementById('tattoo').value;

		if(nameForm === ""){
			let messageEn = 'Missing Name, please fill.';
			let messageDe = 'Bitte Name ausfüllen.';

			message.innerText= english ? messageEn : messageDe;
			return false;
		}

		if(phoneForm === ""){
			let messageEn = 'Missing Phone, please fill.';
			let messageDe = 'Bitte Telefon ausfüllen.';

			message.innerText= english ? messageEn : messageDe;
			return false;
		}

		if(descriptionForm === ""){
			let messageEn = 'Missing Description, please fill.';
			let messageDe = 'Bitte Beschreibung ausfüllen.';

			message.innerText= english ? messageEn : messageDe;
			return false;
		}

		Email.send({
			Host : "smtp.strato.de",
			Username : "web@leonardoacostaatelier.com",
			Password : "juan1t041991",
			To : 'leonardoacostaatelier@gmail.com',
			From : "web@leonardoacostaatelier.com",
			Subject : "Appointment Leonardo Acosta Atelier",
			Body :  `
				<html>
				<head><title>Email Leonardo Acosta Atelier</title></head>
				<body style="background: #FAF9F9; color: #72706b">
					<h1 style="padding: 20px">Appointment <br> Leonardo Acosta Atelier</h1>
					<table style="width: 100%; padding: 20px">
						<tr>
						<td>Name: </td>
						<td>${nameForm}</td>
						</tr>
						<tr>
						<td>Email: </td>
						<td>${emailForm}</td>
						</tr>
						<tr>
						<td>Telefon: </td>
						<td>${phoneForm}</td>
						</tr>
						<tr>
						<td>Körperstelle: </td>
						<td>${bodyForm}</td>
						</tr>
						<tr>
						<td>Beschreibung: </td>
						<td>${descriptionForm}</td>
						</tr>
						<tr>
						<td>Ideen/Inspiration: </td>
						<td>${motivForm}</td>
						</tr>
						<tr>
						<td>Tätowierer: </td>
						<td>${tattooForm}</td>
						</tr>
					</table>
				</body>		
				</html>
				
	
			`
		}).then(
			messageResponsePlugin => {

				debugger;
				let messageEn = 'Plomo, Message sent!!';
				let messageDe = 'Plomo, Nachricht gesendet!!';

				confirmation.innerText = english ? messageEn : messageDe;
				$('#exampleModal').modal('hide');
				alerta.classList.remove("d-none");
			}
		);

	}else {
		let messageEn = 'Missing or incorrect email.';
		let messageDe = 'Bitte Email ausfüllen.';

		message.innerText= english ? messageEn : messageDe;
	}







	
}


