# Staircase

## Explanation of my answer

Originally, I used two nested loops to keep track of the number of hashes & the number of spaces to use on each line.

But I've since found out you can use `#.repeat(number_of_times)` to tell JavaScript to repeat that string, and then I
found out you can use `.padStart(number_of_times)` to tell javascript to add a passed in number of spaces. Making it a lot simpler.

## HackerRank Problem link

https://www.hackerrank.com/challenges/staircase/problem
