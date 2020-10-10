# Time Conversion

## Explanation of my answer

First used the `match` function to pull out all different parts of the time string
& also to validate a valid time string is passed in.

I then built an object of the different parts of the time string just to improve
readability.

I then implemented the equation of `(h % 12) + 12)` to convert 12 hour times to
24 hour times. For example, `13 % 12` is 1 and then adding 12 returns 13.

However, this didn't work for AM times as they don't change regardless of the
time format, apart from `12:00:00AM` for that I had to hard code it returning
`00:00:00AM`.

## HackerRank Problem link

https://www.hackerrank.com/challenges/time-conversion/problem
