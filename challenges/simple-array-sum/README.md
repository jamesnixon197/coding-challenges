# Simple Array Sum

## Explanation of my answer

Quite easy, we set a variable to store the total and then loop through each
integer in the array and add it to the total variable, and then we return
that sum.

We can do this in a much simpler & easier way by just using the [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) function
built in to Javascript, which just totals all integers in an array. However, I felt like that was cheating. 😇

## Problem Overview

### Function Description

Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

`simpleArraySum` has the following parameter(s):
`ar`: an array of integers

### Input Format

Contains `n` space-separated integers representing the array's elements.

### Constraints

```
0 <= n, ar[i] <= 100
```

### Output Format

Print the sum of the array's elements as a single integer.

### Sample Input

`[1, 2, 3, 4, 10, 11]`

### Sample Output

`31`
