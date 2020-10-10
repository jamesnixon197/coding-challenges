# Grading Students

## Explanation of my answer

I first loop through the array of passed in grade numbers. I check if the grade
number is above 100 then error out, as it's an invalid value & if the value
is less than 38 as it means the grade is a failure and doesn't need to be rounded.

I then get the value of `grade % 5` and minus that from 5, to get the difference
to the next multiple of 5. If the difference is less than 2, then I just add
the difference to the grade else I just push up the grade as it is.

I then return the array of the rounded grades.

## HackerRank Problem link

https://www.hackerrank.com/challenges/grading-students/problem
