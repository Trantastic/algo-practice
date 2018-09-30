// Moving an element that's not in the right position to the position it should be in. 

const insertionSort = (arr) => {
	// looping through array
	for(let i = 0; i < arr.length; i++) {
		// establishing current array element
		let current = arr[i];
		// j serves as the index we're comparing the variable current to. If index j = negative we've reached the end of the arr
		let j = i - 1;
		// while j isn't negative or equal to 0 AND arr[j]'s value is greater than arr[i] value run code below
		while(j >= 0 && arr[j] > current) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = current
	}
	// return sorted array
	return arr;
}