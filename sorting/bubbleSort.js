// Recreate a version of bubble sort
/* Once you create the sorting function print the following 3 lines:
	-print how many swaps took place
	-first element in the sorted array
	-last element in the sorted array
*/

function bubbleSort(arr) {
	var sortedArr = arr;
	var swapNum = 0;

	for(var i = 0; i < sortedArr.length; i++) {
		for(var x = 0; x < (sortedArr.length - 1); x++) {
			if(sortedArr[x] > sortedArr[x + 1]) {
				sortedArr[x + 1] = sortedArr[x];
				swapNum++;
			}
		}

		if(i == (sortedArr.length - 1)) {
			console.log("Swapped: " + swapNum + " 1st Array: " + sortedArr[0]);
		}
	}
}

bubbleSort([5,4,3,1,2,9]);