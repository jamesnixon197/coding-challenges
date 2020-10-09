# Diagonal Difference

## Explanation of my answer

To calculate the diagonal differnece, I first validated that the array passed in is a valid square (height & width the same).
We then loop through each line in the square, and then each item on each line of the square.

If we're getting the total of the left diagonal line, we just start the index at 0 and then add 1 on each new line.
If we're getting the total of the right diagonal line, we start the index at the length of the array minus 1 (to get the last index) and then minus 1 on each new line. Finally, we minus each of the totals and use `Math.abs` to make sure a negative value is not returned.

## HackerRank Problem link

https://www.hackerrank.com/challenges/diagonal-difference/problem
