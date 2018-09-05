// Recreate a version of bubble sort
/* Once you create the sorting function print the following 3 lines:
	-print how many swaps took place
	-first element in the sorted array
	-last element in the sorted array
*/

function bubbleSort(arr) {
	var sortedArr = arr;
	var swapNum = 0;

	for(var i = 0; i < arr.length; i++) {
		for(var x = 0; x < (arr.length - 1); x++) {
			if(arr[x] > arr[x + 1]) {
				arr[x + 1] = arr[x];
				swapNum++;
			}
		}
	}
}