'use strict';
const contacts = document.querySelector('.contacts-list');
const listParse = JSON.parse(loadContacts()); 

contacts.innerHTML = ''; 

function list(json) {
	let newContacts;
	let i;
	for (const contact of json) {  
		contacts.appendChild(document.createElement('li'));
		newContacts = document.querySelectorAll('.contacts-list > li'); 
		i = json.indexOf(contact); 
		newContacts[i].innerHTML =`<strong> ${contact.name} </strong>`;	 
		newContacts[i].dataset.phone = contact.phone; 
		newContacts[i].dataset.email = contact.email;	
	}
}

list(listParse);