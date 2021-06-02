const currency = {
	ONEHUNDRED: 100 * 100,
	TWENTY: 20 * 100,
	TEN: 10 * 100,
	FIVE: 5 * 100,
	ONE: 1 * 100,
	QUARTER: 0.25 * 100,
	DIME: 0.1 * 100,
	NICKEL: 0.05 * 100,
	PENNY: 0.01 * 100,
};

function checkCashRegister(price, cash, cid) {
	let changeAmount = Math.round(cash * 100 - price * 100);
	const originalChange = changeAmount;
	const cashInDrawer = cid.reduce(function (acc, cur) {
		acc[cur[0]] = Math.round(cur[1] * 100);
		return acc;
	}, {});

	const totalAmountInDrawer = Object.values(cashInDrawer).reduce(
		(t, n) => t + n
	);

	let status = "";
	let changeArr = [];
	for (const [key, value] of Object.entries(currency)) {
		let amount = 0;
		while (changeAmount >= value && cashInDrawer[key] > 0) {
			amount += value;
			changeAmount -= value;
			cashInDrawer[key] -= value;
		}
		if (amount !== 0) {
			changeArr.push([`${key}`, amount / 100]);
		}
	}

	if (changeAmount > 0 || changeAmount > totalAmountInDrawer) {
		status = "INSUFFICIENT_FUNDS";
		changeArr = [];
	} else if (changeAmount == 0 && originalChange == totalAmountInDrawer) {
		status = "CLOSED";
		changeArr = cid;
	} else {
		status = "OPEN";
	}

	return { status: status, change: changeArr };
}

checkCashRegister(19.5, 20, [
	["PENNY", 0.5],
	["NICKEL", 0],
	["DIME", 0],
	["QUARTER", 0],
	["ONE", 0],
	["FIVE", 0],
	["TEN", 0],
	["TWENTY", 0],
	["ONE HUNDRED", 0],
]);
