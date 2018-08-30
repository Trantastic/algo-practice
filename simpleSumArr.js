// Create a function that sums all the elements of an array

function sumArr(arr) {
	var totalSum = 0;

	for(i of arr) {
		totalSum = totalSum + i;

		if(i == arr.length) {
			console.log(totalSum);
		}
	}
}

sumArr([1,2,3]);