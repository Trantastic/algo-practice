# algo-practice
This repo holds my practice algorithm problems and notes from studying.

_Problems are currently from the ones I solve on www.hackerrank.com_

## Big O Notes
Big O notation - Describes the time/space complexity and how fast a specific algorithm runs in worse-case scenario.

_Binary Search_ vs _Simple Search_  
These run at different runtime depending on the number of elements.

Simple Search takes O(n)  
Binary Search takes O(log(n)), used to find an element in a sorted list. Starts by identifying middle element, and checking if searched elemented is higher or lower than middle. Doing this, you can disregard 1 half of the list. This process is repeated until desired element is found or find out the element isn't in the list.    
## Time Complexities:  
O(1) - Constant, fast  
O(log(n)) - Logarithmic, fast    
O(n) - Linear, time goes up linearly while n goes up exponentially (ex: 1 sec to compute 10 elements, 2 sec to compute 100, 3 sec to compute 1000)  
O(n * log n) - fast  
O(n^2) - Quadratic, slow  
O(n!) - super slow  
O(2^n) - Exponential, slow

### Constant O(1)
The algorithm runs in the same amount of time no matter the input size. I.e. Grabing the first and last element of an array.

### Linear O(n)
The algorithm runtime grows linearly with the input size. I.e. Looping through an array.

### Quadratic O(n^2)
The runtime of the algorithm is directly proportional to the square of the size of input (n * n). I.e. Looping through an array and comparing each element with another element in another or same array.

### Logarithmic O(log(n))
The size of input gets split into half iteratively. The larger the input size, the smaller the difference in runtime. I.e. see Binary Search explanation above.

### Exponential O(2^n)
The algorithm runtime doubles with every addition to its input size. 