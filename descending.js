// Your task is to make a function that can take any non-negative integer 
// as a argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
	var arr = n.toString().split('');
	arr.sort().reverse();

	console.log(parseInt(arr.join('')));
}

descendingOrder(921579);
// 997521