function palindrome(str) {
	var x = /[\W_]/g;
	var y = str.toLowerCase().replace(x, "");

	var reverse = y.split("").reverse().join("");

	if (reverse === y) {
		return true;
	} else {
		return false;
	}
}

palindrome("_eye");
