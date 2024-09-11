// initialize va
var currentUser = 'user1';
var messageInput = document.getElementById('message');
var msg = document.getElementById('msg');
var sendButton = document.getElementById('send');


import { db } from './db.js';



 
var btn = document.getElementById("btn");
function getMessage() {
  const message = messageInput.value;
  console.log(message);
  
  msg.innerHTML= message;

}
btn.addEventListener("click", getMessage);





const id = db.id;



console.log (id)





// function to add message to the chatbox
//function addMessage(sender, message) {
//	var div = document.createElement('div');
//	div.classList.add('message');
//	var senderSpan = document.createElement('span');
//	senderSpan.classList.add('sender');
//	senderSpan.innerText = sender + ': ';
//	div.appendChild(senderSpan);
//	var textNode = document.createTextNode(message);
//	div.appendChild(textNode);
//	messageList.appendChild(div);
//}
