let input = document.getElementById("input-text");
let bClear = document.querySelector("#clsBtn");
let bEncrypt = document.querySelector("#cryptBtn");
let bDecrypt = document.querySelector("#decryptBtn");

let output = document.getElementById("output-text");
let defaultMessage = "Ningún mensaje fue encontrado"
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
	
	return str.toLowerCase().replace(re, function(matched){
		return keys[matched.toLowerCase()];
	})
}

function decrypt() {
	output.innerHTML = crypt(input.value, decryptKeys);
}

function encrypt() {
	output.innerHTML = crypt(input.value, encryptKeys);
}


function clear() {
	output.innerHTML = defaultMessage;
	input.value = "";
}

function copy() {
	if (output.textContent !== defaulMessage) {
		navigator.clipboard.writeText(output.textContent);
	}
}

bEncrypt.onclick = encrypt;
bDecrypt.onclick = decrypt;
bClear.onclick = clear;
bCopy.onclick = copy;
