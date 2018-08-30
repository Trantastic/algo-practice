// Create a function that sums all the elements of an array

function sumArr(arr) {
	var sum = 0;

	for(let i of arr) {
		sum = sum + i;
	}
	console.log(sum);
}

sumArr([1,2,100]);

function simpleArraySum(ar) {
    var totalSum = ar.reduce(sum);
    
    function sum(total, num) {
        return total + num;
    }
    console.log(totalSum);
}

simpleArraySum([1,2]);