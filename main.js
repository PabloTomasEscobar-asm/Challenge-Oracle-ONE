//Input area
const input = document.querySelector(".input-text");
const bEncrypt = document.querySelector(".cryptBtn");
const bDecrypt = document.querySelector(".decryptBtn");

//Output area
const muneco = document.querySelector(".no-output");
const output = document.querySelector(".output-text");
const copyArea = document.querySelector(".copyBtnArea");
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
	output.value = crypt(input.value, decryptKeys);
	toggleOutputArea();
}

function encrypt() {
	output.value = crypt(input.value, encryptKeys);
	toggleOutputArea();
}

function copy() {
	navigator.clipboard.writeText(output.value);
}

function toggleOutputArea() {
	if (output.value != "") {
		muneco.style.display = "none";
		output.style.display = "flex";
		copyArea.style.display = "flex";
	}
	else {
		output.style.display = "none";
		copyArea.style.display = "none";
		muneco.style.display = "block";
	}
}



bEncrypt.onclick = encrypt;
bDecrypt.onclick = decrypt;
bCopy.onclick = copy;
