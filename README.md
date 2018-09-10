# algo-practice
This repo holds my practice algorithm problems

_Problems are currently from the ones I solve on www.hackerrank.com_

## Big O Notes
Big O notation - how fast an algorithm runs in worse-case scenario.

_Binary Search_ vs _Simple Search_  
These run at different run time depending on the number of elements.

Simple Search takes O(n)  
Binary Search takes O(log n), used to find an element in a sorted list. Starts by identifying middle element, and checking if searched elemented is higher or lower than middle. Doing this, you can disregard 1 half of the list. This process is repeated until desired element is found or find out the element isn't in the list.    

O(log n) - log time  
O(n) - linear time, time goes up linearly while n goes up exponentially (ex: 1 sec to compute 10 elements, 2 sec to compute 100, 3 sec to compute 1000)  
O(n * log n) - fast  
O(n2) - slow  
O(n!) - super slow

