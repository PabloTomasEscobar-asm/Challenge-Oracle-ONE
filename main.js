let input = document.getElementById("input-text");
let bClear = document.querySelector("#clsBtn");
let bEncrypt = document.querySelector("#cryptBtn");
let bDecrypt = document.querySelector("#decryptBtn");

let output = document.getElementById("output-text");
let defaulMessage = "Ningún mensaje fue encontrado"
let bCopy = document.querySelector("#copyBtn");

let encryptKeys = {
	e: "enter",
	i: "imes",
	a: "ai",
	o: "ober",
	u: "ufat"
}

let decryptKeys = {
	enter: "e",
	 imes: "i",
	   ai: "a",
	 ober: "o",
	 ufat: "u"
}

function crypt(str, keys) {
	let re = new RegExp(Object.keys(keys).join("|"),"gi");
	
	return str.toLowerCase.replace(re, function(matched){
		return keys[matched.toLowerCase()];
	})
}

function decrypt() {
	output.innerHTML = crypt(input.value, decryptKeys);
	console.log(output.textContent);
}

function encrypt() {
	output.innerHTML = crypt(input.value, encryptKeys);
	console.log(output.textContent);
}


function clear() {
	output.innerHTML = defaulMessage;
	input.value = "";
}

function copy() {
	if (output.textContent !== defaulMessage) {
		navigator.clipboard.writeText(output.textContent);
		console.log("Texto copiado!");
	}
}

bEncrypt.onclick = encrypt;
bDecrypt.onclick = decrypt;
bClear.onclick = clear;
bCopy.onclick = copy;
