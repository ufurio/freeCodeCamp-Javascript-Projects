function telephoneCheck(str) {
	let reg = new RegExp(/^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/);
	let result = reg.test(str);
	return result;
}

telephoneCheck("555-555-5555");
