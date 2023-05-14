const input = document.querySelector(".input-text");
const bClear = document.querySelector(".clsBtn");
const bEncrypt = document.querySelector(".cryptBtn");
const bDecrypt = document.querySelector(".decryptBtn");

const output = document.querySelector(".output-text");
const bCopy = document.querySelector(".copyBtn");

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
	output.innerHTML = "";
	input.value = "";
}

function copy() {
		navigator.clipboard.writeText(output.textContent);
}

bEncrypt.onclick = encrypt;
bDecrypt.onclick = decrypt;
bClear.onclick = clear;
bCopy.onclick = copy;
